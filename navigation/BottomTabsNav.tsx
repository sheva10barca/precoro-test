import { TouchableOpacity } from 'react-native';
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
    sceneContainerStyle={{ backgroundColor: '#fff' }}
    screenOptions={({ navigation }) => ({
      headerTintColor: '#1D2452',
      tabBarActiveTintColor: '#415ADA',
      headerTitleStyle: { fontFamily: 'inter-semibold' },
      contentStyle: { backgroundColor: '#fff' },

      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Support')}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        >
          <SupportIcon width={24} height={24} style={{ marginLeft: 24 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('UserProfile')}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        >
          <UserIcon
            width={24}
            height={24}
            stroke={'#1D2452'}
            style={{ marginRight: 24 }}
          />
        </TouchableOpacity>
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
