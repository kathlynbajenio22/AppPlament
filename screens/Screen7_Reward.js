import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function RewardsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Rewards</Text>

        {/* Points Progress Bar */}
        <View style={styles.pointsContainer}>
          <Text style={styles.maxText}>Max: 500</Text>
          <View style={styles.progressBar}>
            <Text style={styles.pointsText}>💰 20</Text>
          </View>
        </View>

        {/* Bottle to Points Display */}
        <View style={styles.bottlePointsBox}>
          <Text style={styles.bottleText}>🧴 = </Text>
          <Text style={styles.pointsValue}>3 points</Text>
        </View>

        {/* Search Bar */}
        <TextInput
          placeholder="🔍 Search"
          style={styles.searchBar}
        />

        {/* Rewards Grid */}
        <View style={styles.grid}>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Badge')}>
            <Text style={styles.emoji}>🛡️</Text>
            <Text style={styles.label}>Badge</Text>
            <Text style={styles.stock}>(0/5)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('KeyChain')}>
            <Text style={styles.emoji}>🔑</Text>
            <Text style={styles.label}>Key Chain</Text>
            <Text style={styles.stock}>(0/5)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Peso')}>
            <Text style={styles.emoji}>🪙</Text>
            <Text style={styles.label}>5 Pesos</Text>
            <Text style={styles.stock}>(0/5)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Ballpen')}>
            <Text style={styles.emoji}>🖊️</Text>
            <Text style={styles.label}>Ballpen</Text>
            <Text style={styles.stock}>(0/5)</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navLabel}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
          <Text style={styles.navLabel}>🎁 Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('QR')}>
          <Text style={styles.navLabel}>📷 QR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Text style={styles.navLabel}>🕘 History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navLabel}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  pointsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  maxText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  progressBar: {
    height: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  pointsText: {
    fontSize: 14,
  },
  bottlePointsBox: {
    flexDirection: 'row',
    backgroundColor: '#E5D5FF',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  bottleText: {
    fontSize: 18,
  },
  pointsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  searchBar: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '47%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 15,
  },
  emoji: {
    fontSize: 36,
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
  },
  stock: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  navLabel: {
    fontSize: 14,
    color: '#047857',
    textAlign: 'center',
  },
});
