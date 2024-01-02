import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PRECORO_DEMO_URL = 'https://precoro.com/get-a-demo';

export const HomeScreen = () => {
  const handlePressDemo = async () => {
    const supported = await Linking.canOpenURL(PRECORO_DEMO_URL);

    if (supported) {
      await Linking.openURL(PRECORO_DEMO_URL);
    } else {
      Alert.alert("Couldn't open the URL:", PRECORO_DEMO_URL);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Precoro helps companies spend smarter</Text>
      <Text style={styles.subtitle}>
        Request. Approve. Order. Control. Bring transparency and predictability
        to your company's spending workflows.
      </Text>
      <TouchableOpacity onPress={handlePressDemo} style={styles.button}>
        <Text style={styles.buttonText}>Book a Demo</Text>
        <Ionicons
          name="arrow-forward-outline"
          style={styles.arrow}
          size={20}
          color={'#fff'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'inter-bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#1D2452',
  },
  subtitle: {
    textAlign: 'center',
    color: '#565B7D',
    marginTop: 14,
  },
  button: {
    backgroundColor: '#4545F5',
    marginTop: 40,
    height: 40,
    width: 170,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
  },
  arrow: { 
    position: 'absolute', 
    top: 10, 
    right: 12 
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'inter-bold',
    fontSize: 16,
  },
});
