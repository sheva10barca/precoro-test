import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens/LoginScreen';
import { ScreenNames } from '../types/ScreenNames';

const Stack = createNativeStackNavigator();

export const AuthenticationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenNames.Login}
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);