import { Button, Text, TextInput, View } from 'react-native';
import CustomLinearGradient from '../components/CustomLinearGradient';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsAuthenticated } = useContext(AuthContext);

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
        <Button title="Log In" onPress={() => setIsAuthenticated(true)} />
      </View>
    </CustomLinearGradient>
  );
};
