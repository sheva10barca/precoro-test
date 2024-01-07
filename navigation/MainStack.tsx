import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabsNav } from './BottomTabsNav';

import { HomeScreen } from '../screens/HomeScreen';
import { SupportScreen } from '../screens/SupportScreen';
import { UserProfileScreen } from '../screens/UserProfileScreen';

import { ScreenNames } from '../types/ScreenNames';

export const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: '#fff' },
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen
      name={ScreenNames.BottomTabs}
      component={BottomTabsNav}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
    <Stack.Screen name={ScreenNames.Support} component={SupportScreen} />
    <Stack.Screen
      name={ScreenNames.UserProfile}
      component={UserProfileScreen}
      options={{ title: 'Profile' }}
    />
  </Stack.Navigator>
);
