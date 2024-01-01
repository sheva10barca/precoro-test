import { useContext, useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { AuthContext } from '../providers/AuthProvider';
import { login } from '../api/api';

import CustomLinearGradient from '../components/CustomLinearGradient';

import PrecoroLogo from '../assets/images/precoroLogo.svg';
import LoginIcon from '../assets/images/auth-screen-icons/login.svg';
import PasswordIcon from '../assets/images/auth-screen-icons/password.svg';
// import EyeIcon from '../assets/images/auth-screen-icons/eye.svg';
import GoogleIcon from '../assets/images/auth-screen-icons/google.svg';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
    console.log('show pass');
  };

  const handleUnavailableFeature = () => {
    Alert.alert('You cannot use this feature at the moment');
  };

  return (
    <CustomLinearGradient>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PrecoroLogo width={210} height={38} fill={'#1D2452'} />

          {/* Email Input */}
          <View style={{ width: '100%', marginTop: 46, gap: 5 }}>
            <Text style={{ fontSize: 12, color: '#8E91A8', lineHeight: 16 }}>
              Email
            </Text>
            <View style={styles.emailInputContainer}>
              <LoginIcon
                width={20}
                height={20}
                stroke="#8E91A8"
                opacity={0.25}
                style={styles.emailIcon}
              />
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.emailInput}
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={{ width: '100%', marginTop: 12, gap: 5 }}>
            <Text style={{ fontSize: 12, color: '#8E91A8', lineHeight: 16 }}>
              Password
            </Text>

            <View style={styles.passwordInputContainer}>
              <PasswordIcon
                width={20}
                height={20}
                stroke="#8E91A8"
                opacity={0.25}
                style={styles.passwordIcon}
              />
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={styles.passwordInput}
              />

              {/* // TODO FIX ICON */}
              <Pressable
                style={styles.showPasswordButton}
                onPress={handleShowPassword}
              >
                {/* <EyeIcon /> */}
                <Text>{showPassword ? 'Hide' : 'Show'}</Text>
              </Pressable>
            </View>
          </View>

          {/* Log In Button */}
          <Pressable
            onPress={handleLogin}
            disabled={!email || !password}
            style={{
              marginTop: 20,
              backgroundColor: '#8B91C1',
              height: 34,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
          >
            <Text style={{ color: '#fff', fontFamily: 'inter-semibold' }}>
              Log In!
            </Text>
          </Pressable>

          {/* line OR line */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              height: 24,
            }}
          >
            <View style={styles.line} />
            <Text style={{ paddingHorizontal: 8, color: '#8E91A8' }}>or</Text>
            <View style={styles.line} />
          </View>

          {/* Google Sign In */}
          <Pressable
            onPress={handleUnavailableFeature}
            style={{
              flexDirection: 'row',
              marginTop: 20,
              backgroundColor: '#fff',
              height: 34,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              gap: 5,
            }}
          >
            <GoogleIcon />
            <Text style={{ color: '#1D2452', fontFamily: 'inter-semibold' }}>
              Sign In with Google
            </Text>
          </Pressable>

          {/* Signing Help */}
          <Pressable
            style={{ marginTop: 150 }}
            onPress={handleUnavailableFeature}
          >
            <Text
              style={{
                color: '#8E91A8',
                fontFamily: 'inter-semibold',
                lineHeight: 15,
              }}
            >
              Need help signing in?
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

// TODO FIX ALL STYLES

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#1D2452',
    opacity: 0.1,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 34,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  passwordIcon: {
    marginLeft: 8,
  },
  passwordInput: {
    flex: 1,
    paddingLeft: 5,
  },
  showPasswordButton: {
    position: 'absolute',
    right: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  emailInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 34,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  emailIcon: {
    marginLeft: 8,
  },
  emailInput: {
    flex: 1,
    paddingLeft: 5,
  },
});
