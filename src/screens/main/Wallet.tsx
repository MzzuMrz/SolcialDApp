import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAccount, useBalance, useDisconnect } from 'wagmi';

export const WalletScreen: React.FC = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address,
  });
  const { disconnect } = useDisconnect();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wallet</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceTitle}>Your Balance</Text>
          <Text style={styles.balanceAmount}>
            {balance ? `${balance.formatted} ${balance.symbol}` : '0'}
          </Text>
        </View>

        <View style={styles.addressCard}>
          <Text style={styles.addressTitle}>Wallet Address</Text>
          <Text style={styles.addressText}>
            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
          </Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.disconnectButton]}
            onPress={() => disconnect()}
          >
            <Text style={styles.buttonText}>Disconnect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  balanceCard: {
    backgroundColor: '#3B82F6',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  balanceTitle: {
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 5,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addressCard: {
    backgroundColor: '#F3F4F6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  addressTitle: {
    color: '#666',
    marginBottom: 5,
  },
  addressText: {
    fontSize: 16,
  },
  actions: {
    gap: 10,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  disconnectButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});