import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import FontLoader from './components/FontLoader';
import { HomeScreen } from './screens/HomeScreen';
import { ApprovalScreen } from './screens/ApprovalScreen';
import { DocumentsScreen } from './screens/DocumentsScreen';

import HomeIcon from './assets/images/bot-nav-icons/home.svg';
import ApprovalIcon from './assets/images/bot-nav-icons/revision-history.svg';
import DocumentsIcon from './assets/images/bot-nav-icons/documents.svg';
import SupportIcon from './assets/images/supportIcon.svg';
import UserIcon from './assets/images/userIcon.svg';

// const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <FontLoader>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={({ navigation }) => ({
            headerTintColor: '#1D2452',
            tabBarActiveTintColor: '#415ADA',
            headerLeft: () => (
              <SupportIcon
                width={24}
                height={24}
                // onPress={() => navigation.navigate('Support')}
              />
            ),
            headerRight: () => (
              <UserIcon
                width={24}
                height={24}
                stroke={'#1D2452'}
                // onPress={() => navigation.navigate('UserProfile')}
              />
            ),
          })}
        >
          <BottomTabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <HomeIcon width={size} height={size} stroke={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Approval"
            component={ApprovalScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <ApprovalIcon width={size} height={size} stroke={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Documents"
            component={DocumentsScreen}
            options={{
              title: 'Purchase Orders',
              tabBarLabel: 'Documents',
              tabBarIcon: ({ color, size }) => (
                <DocumentsIcon width={size} height={size} stroke={color} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
