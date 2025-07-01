import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Tagline2Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/snap.png')} style={styles.image} />
      <Text style={styles.title}>Snap, track, and earn rewards 📸</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#047857',
    marginBottom: 40,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#047857',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
