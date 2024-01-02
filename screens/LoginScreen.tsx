import { useContext, useState } from 'react';
import {
  Alert,
  Keyboard,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { AuthContext } from '../providers/AuthProvider';
import { login } from '../api/api';

import { AuthInput } from '../components/AuthInput';
import CustomLinearGradient from '../components/CustomLinearGradient';

import PrecoroLogo from '../assets/images/precoroLogo.svg';
import GoogleIcon from '../assets/images/auth-screen-icons/google.svg';
import LoginBackground from '../assets/images/auth-screen-icons/loginBackground.svg';

const HELP_URL =
  'https://github.com/sheva10barca/precoro-test?tab=readme-ov-file#additional-instructions';

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
      Alert.alert('Wrong login or password');
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleUnavailableFeature = () => {
    Alert.alert('We are sorry, but this feature is not implemented yet');
  };

  const isLoginBtnDisabled = !email || !password;

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  const handlePressHelp = async () => {
    const supported = await Linking.canOpenURL(HELP_URL);

    if (supported) {
      await Linking.openURL(HELP_URL);
    } else {
      Alert.alert("Couldn't open the URL:", HELP_URL);
    }
  };

  return (
    <CustomLinearGradient>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={handleScreenPress}>
          <View style={styles.container}>
            <LoginBackground style={styles.backgroundIcon} />
            <PrecoroLogo
              width={210}
              height={38}
              fill={'#1D2452'}
              style={styles.precoroLogo}
            />

            <>
              <AuthInput
                label="Email"
                inputValue={email}
                onChangeText={setEmail}
              />

              <AuthInput
                label="Password"
                inputValue={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                showPassword={showPassword}
                handleShowPassword={handleShowPassword}
              />

              <Pressable
                onPress={handleLogin}
                disabled={isLoginBtnDisabled}
                style={({ pressed }) => [
                  { opacity: pressed || isLoginBtnDisabled ? 0.6 : 1 },
                  styles.loginButton,
                ]}
              >
                <Text style={styles.loginButtonText}>Log In!</Text>
              </Pressable>
            </>

            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>

            <Pressable
              onPress={handleUnavailableFeature}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                styles.googleButton,
              ]}
            >
              <GoogleIcon />
              <Text style={styles.googleButtonText}>Sign In with Google</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                styles.signingHelpButton,
              ]}
              onPress={handlePressHelp}
            >
              <Text style={styles.signingHelpButtonText}>
                Need help signing in?
              </Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  precoroLogo: { marginBottom: 46 },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#1D2452',
    opacity: 0.1,
  },
  backgroundIcon: {
    zIndex: -11,
    position: 'absolute',
    left: 8,
    top: -50
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#8B91C1',
    height: 34,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginButtonText: { color: '#fff', fontFamily: 'inter-semibold' },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    height: 24,
  },
  orText: { paddingHorizontal: 8, color: '#8E91A8' },
  googleButton: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#fff',
    height: 34,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    gap: 5,
  },
  googleButtonText: { color: '#1D2452', fontFamily: 'inter-semibold' },
  signingHelpButton: { marginTop: 150 },
  signingHelpButtonText: {
    color: '#8E91A8',
    fontFamily: 'inter-semibold',
    lineHeight: 15,
  },
});
