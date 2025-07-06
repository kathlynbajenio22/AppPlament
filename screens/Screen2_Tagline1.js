import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen2_Tagline1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/recycle.png')} style={styles.image} />
      <Text style={styles.text}>Welcome to P-Lament: Your Recycling Adventure Starts Here</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tagline2')}>
        <Text style={styles.buttonText}>Next</Text>
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
  text: {
    fontSize: 20,
    color: '#047857',
    textAlign: 'center',
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
