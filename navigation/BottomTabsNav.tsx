import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/HomeScreen';
import { DocumentsScreen } from '../screens/DocumentsScreen';
import { ApprovalScreen } from '../screens/ApprovalScreen';

import HomeIcon from '../assets/images/bot-nav-icons/home.svg';
import ApprovalIcon from '../assets/images/bot-nav-icons/revision-history.svg';
import DocumentsIcon from '../assets/images/bot-nav-icons/documents.svg';
import SupportIcon from '../assets/images/supportIcon.svg';
import UserIcon from '../assets/images/userIcon.svg';

export const BottomTabs = createBottomTabNavigator();

export const BottomTabsNav = () => (
  <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerTintColor: '#1D2452',
      tabBarActiveTintColor: '#415ADA',

      headerLeft: () => (
        <SupportIcon
          width={24}
          height={24}
          onPress={() => navigation.navigate('Support')}
          style={{ marginLeft: 24 }}
        />
      ),
      headerRight: () => (
        <UserIcon
          width={24}
          height={24}
          stroke={'#1D2452'}
          onPress={() => navigation.navigate('UserProfile')}
          style={{ marginRight: 24 }}
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
);
