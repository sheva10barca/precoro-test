import { FC, useEffect, useState } from 'react';
import * as Font from 'expo-font';

import CustomSplashScreen from '../screens/CustomSplashScreen';

const FontLoader: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    try {
      await Font.loadAsync({
        'inter-medium': require('../assets/fonts/Inter-Medium.ttf'),
        'inter-semibold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'inter-bold': require('../assets/fonts/Inter-Bold.ttf'),
      });

      setFontsLoaded(true);
    } catch (error) {
      console.error('Error loading fonts:', error);
    }
  };

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return <CustomSplashScreen />;
  }

  return <>{children}</>;
};

export default FontLoader;
