import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabsNav } from './BottomTabsNav';

import { HomeScreen } from '../screens/HomeScreen';
import { SupportScreen } from '../screens/SupportScreen';
import { UserProfileScreen } from '../screens/UserProfileScreen';

export const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BottomTabs"
      component={BottomTabsNav}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Support" component={SupportScreen} />
    <Stack.Screen name="UserProfile" component={UserProfileScreen} />
  </Stack.Navigator>
);
