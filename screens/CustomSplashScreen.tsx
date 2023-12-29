import { View, StyleSheet } from 'react-native';

import Logo from '../assets/images/precoroLogo.svg';
import CustomLinearGradient from '../components/CustomLinearGradient';

const CustomSplashScreen = () => (
  <CustomLinearGradient>
    <View style={styles.content}>
      <Logo width={210} height={38} fill={'#1D2452'} />
    </View>
  </CustomLinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomSplashScreen;
