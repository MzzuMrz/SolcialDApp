import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppKitButton } from '@reown/appkit-wagmi-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to SocialDapp</Text>
        <Text style={styles.subtitle}>Connect your wallet to continue</Text>
        <AppKitButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
});