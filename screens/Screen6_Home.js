import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>P-Lament</Text>

        {/* Points Card */}
        <View style={styles.card}>
          <View style={styles.pointsContainer}>
            <View style={styles.section}>
              <Text style={styles.cardLabel}>Your Points</Text>
              <Text style={styles.cardValue}>20</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.section}>
              <Text style={styles.cardLabel}>Plastic</Text>
              <Text style={styles.cardValue}>7</Text>
            </View>
          </View>
        </View>

        {/* Fact Section */}
        <View style={styles.factContainer}>
          <Text style={styles.factTitle}>Did you know that?</Text>
          <Text style={styles.factText}>
            Over 5 trillion pieces of plastic are floating in our oceans right now, and we produce over 400 million tons more every year?
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navLabel}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reward')}>
          <Text style={styles.navLabel}>🎁 Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Qr')}>
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
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: '#111827',
  },
  card: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  section: {
    alignItems: 'center',
  },
  cardLabel: {
    color: '#e0f2fe',
    fontSize: 16,
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#93c5fd',
  },
  factContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
  },
  factTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  factText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#374151',
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
