import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>👤 Profile</Text>

        <View style={styles.profileCard}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Kathlyn Bajenio</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>kathlyn@example.com</Text>

          <Text style={styles.label}>Joined:</Text>
          <Text style={styles.value}>June 2025</Text>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsHeader}>📊 Your Stats</Text>
          <Text style={styles.stat}>Plastic Bottles Recycled: <Text style={styles.highlight}>32</Text></Text>
          <Text style={styles.stat}>Points Earned: <Text style={styles.highlight}>78</Text></Text>
          <Text style={styles.stat}>Rewards Claimed: <Text style={styles.highlight}>2</Text></Text>
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
    padding: 20,
    backgroundColor: '#f0fdf4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#047857',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#111827',
    fontWeight: 'bold',
  },
  statsCard: {
    backgroundColor: '#d1fae5',
    padding: 16,
    borderRadius: 12,
  },
  statsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#047857',
    marginBottom: 10,
    textAlign: 'center',
  },
  stat: {
    fontSize: 14,
    marginBottom: 6,
    color: '#065f46',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#065f46',
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
