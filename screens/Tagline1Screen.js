import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Tagline1Screen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Image source={require('../assets/recycle.png')} className="w-20 h-20 mb-6" />
      <Text className="text-xl text-center font-bold text-green-700 mb-6">
        Turn trash into treasure!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Tagline2')}>
        <Text className="text-green-700 font-semibold">NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}
