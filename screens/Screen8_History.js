import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HistoryScreen({ navigation }) {
  const historyData = [
    { date: 'July 1, 2025', action: '🍼 Inserted 3 plastic bottles', points: '+6 points' },
    { date: 'June 30, 2025', action: '🍼 Inserted 5 plastic bottles', points: '+10 points' },
    { date: 'June 29, 2025', action: '🎁 Redeemed 1 reward', points: '-20 points' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>📜 History</Text>
        <Text style={styles.subtitle}>Your recent activity</Text>

        {historyData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.action}>{item.action}</Text>
            <Text style={styles.points}>{item.points}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation (Emoji style) */}
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  action: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  points: {
    fontSize: 14,
    color: '#047857',
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
