import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useAccount } from 'wagmi';
import { Home, PlusSquare, User, Wallet } from 'lucide-react-native';

// Import screens
import { LoginScreen } from '../screens/auth/Login';
import { FeedScreen } from '../screens/main/Feed';
import { ProfileScreen } from '../screens/main/Profile';
import { WalletScreen } from '../screens/main/Wallet';
import { CreateScreen } from '../screens/main/Create';

// Types
type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

type MainTabParamList = {
  Feed: undefined;
  Create: undefined;
  Profile: undefined;
  Wallet: undefined;
};

// Create navigators
const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// Tab Navigator
const TabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        height: 60,
        paddingBottom: 8,
        paddingTop: 8,
      },
      tabBarActiveTintColor: '#3B82F6',
      tabBarInactiveTintColor: '#9CA3AF',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={{
        tabBarIcon: (props) => <Home {...props} />
      }}
    />
    <Tab.Screen
      name="Create"
      component={CreateScreen}
      options={{
        tabBarIcon: (props) => <PlusSquare {...props} />
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: (props) => <User {...props} />
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        tabBarIcon: (props) => <Wallet {...props} />
      }}
    />
  </Tab.Navigator>
);

// Root Navigator
export const RootNavigator: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isConnected ? (
        <Stack.Screen name="Auth" component={LoginScreen} />
      ) : (
        <Stack.Screen name="Main" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
};