import { TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from '../screens/HomeScreen';
import { DocumentsScreen } from '../screens/DocumentsScreen';
import { ApprovalScreen } from '../screens/ApprovalScreen';

import { ScreenNames } from '../types/ScreenNames';

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
      headerTitleStyle: {
        fontFamily: 'inter-semibold',
      },
      contentStyle: { backgroundColor: '#fff' },
      tabBarStyle: {
        height: 75,
        paddingVertical: 14,
      },
      tabBarLabelStyle: {
        opacity: 0.5,
        flex: 1,
        letterSpacing: -0.2,
        marginTop: 4,
      },
      headerTitleAlign: 'center',

      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.Support)}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        >
          <SupportIcon
            width={24}
            height={24}
            style={{ marginLeft: 24 }}
            opacity={0.5}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.UserProfile)}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        >
          <UserIcon
            width={24}
            height={24}
            style={{ marginRight: 24 }}
            fill={'#1D2452'}
            opacity={0.5}
          />
        </TouchableOpacity>
      ),
    })}
  >
    <BottomTabs.Screen
      name={ScreenNames.Home}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <HomeIcon width={size} height={size} fill={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name={ScreenNames.Approval}
      component={ApprovalScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <View style={{ position: 'relative' }}>
            <ApprovalIcon width={size} height={size} fill={color} />
            {/* // TODO add a real condition for displaying an icon */}
            {true && (
              <Ionicons
                name="ellipse"
                style={{ position: 'absolute', top: -2, right: -2 }}
                size={10}
                color={'#D66262'}
              />
            )}
          </View>
        ),
      }}
    />
    <BottomTabs.Screen
      name={ScreenNames.Documents}
      component={DocumentsScreen}
      options={{
        title: 'Purchase Orders',
        tabBarLabel: 'Documents',
        tabBarIcon: ({ color, size }) => (
          <DocumentsIcon width={size} height={size} fill={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);
