import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './assets/images/precoroLogo.svg';
import Google from './assets/images/auth-screen-icons/google.svg';
import Login from './assets/images/auth-screen-icons/login.svg';
import Password from './assets/images/auth-screen-icons/password.svg';
import FontLoader from './components/FontLoader';
import CustomLinearGradient from './components/CustomLinearGradient';

export default function App() {
  return (
    <FontLoader>
      <CustomLinearGradient>
        <View style={styles.container}>
          <Text style={{ fontFamily: 'inter-bold', fontSize: 24 }}>
            Hello World!!!
          </Text>
          <Logo width={220} height={140} fill={'#1D2452'} />
          <Google width={220} height={140} />
          <Login
            width={220}
            height={140}
            stroke="#1D2452"
            style={{ opacity: 0.25 }}
          />
          <Password
            width={220}
            height={140}
            stroke="#1D2452"
            style={{ opacity: 0.25 }}
          />
        </View>
      </CustomLinearGradient>
      <StatusBar style="auto" />
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
