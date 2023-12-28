import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './assets/images/precoroLogo.svg';
import Google from './assets/images/auth-screen-icons/google.svg';
import Login from './assets/images/auth-screen-icons/login.svg';
import Password from './assets/images/auth-screen-icons/password.svg';
import Home from './assets/images/bot-nav-icons/home.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <Logo width={220} height={140} />
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
      <Home width={220} height={140} fill={'#415ADA'} />
      <Home width={220} height={140} fill={'red'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
