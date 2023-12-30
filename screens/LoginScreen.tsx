import { Button, Text, View } from 'react-native';
import CustomLinearGradient from '../components/CustomLinearGradient';

export const LoginScreen = () => {
  return (
    <CustomLinearGradient>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen</Text>
      </View>
    </CustomLinearGradient>
  );
};
