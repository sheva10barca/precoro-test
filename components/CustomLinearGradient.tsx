import { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CustomLinearGradient: FC<{ children: ReactNode }> = ({ children }) => (
  <LinearGradient
    colors={['#F9FAFF', '#DFE1EF']}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    {children}
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomLinearGradient;
