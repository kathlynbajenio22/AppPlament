import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to P-Lament!</Text>
      <Text style={styles.points}>Your Points: 20</Text>
      <Image source={require('../assets/earth.png')} style={styles.image} />
      <Text style={styles.quote}>Together, we recycle for a better planet 🌍</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECFDF5',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#047857',
    marginBottom: 10,
  },
  points: {
    fontSize: 18,
    color: '#065f46',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  quote: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
  },
});
