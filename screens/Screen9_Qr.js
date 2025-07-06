import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRScreen() {
  const [qrValue, setQRValue] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerateQR = () => {
    const timestamp = new Date().toISOString();
    const code = `PLASTIC-BOTTLE-${timestamp}`;
    setQRValue(code);
    setGenerated(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code Generator</Text>

      {generated ? (
        <>
          <Text style={styles.label}>Scan this QR code:</Text>
          <QRCode value={qrValue} size={200} />
          <Text style={styles.codeText}>{qrValue}</Text>
        </>
      ) : (
        <>
          <Text style={styles.info}>Insert a plastic bottle to generate a QR code.</Text>
          <Button title="Simulate Bottle Insert" onPress={handleGenerateQR} color="#047857" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#047857',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#374151',
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: '#111827',
  },
  codeText: {
    marginTop: 10,
    fontSize: 12,
    color: '#6B7280',
  },
});
