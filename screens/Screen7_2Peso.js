import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FivePesoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Claim Reward</Text>

      <View style={styles.card}>
        <Text style={styles.emoji}>🪙</Text>
        <Text style={styles.label}>5 Pesos</Text>
        <Text style={styles.requirements}>Requirements: 10 points</Text>
        <Text style={styles.userPoints}>20/10 points</Text>
        <TouchableOpacity style={styles.claimButton}>
          <Text style={styles.claimText}>Claim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  card: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 30,
    borderRadius: 10,
  },
  emoji: {
    fontSize: 64,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  requirements: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  userPoints: {
    marginTop: 8,
    color: 'green',
    fontSize: 14,
  },
  claimButton: {
    marginTop: 20,
    backgroundColor: '#2563eb',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  claimText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
