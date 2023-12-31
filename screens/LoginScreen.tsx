import { useContext, useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

import { AuthContext } from '../providers/AuthProvider';
import { login } from '../api/api';

import CustomLinearGradient from '../components/CustomLinearGradient';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAuthToken } = useContext(AuthContext);

  const handleLogin = async () => {
    if (email === 'test' && password === 'password') {
      const token = await login(email, password);

      setAuthToken(token);
    } else {
      Alert.alert(
        'You can log in only with email: "test" and password: "password"',
      );
    }
  };

  return (
    <CustomLinearGradient>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            width: 327,
            height: 34,
            backgroundColor: '#fff',
            marginTop: 20,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            width: 327,
            height: 34,
            backgroundColor: '#fff',
            marginTop: 20,
          }}
        />
        <Button title="Log In" onPress={handleLogin} />
      </View>
    </CustomLinearGradient>
  );
};
