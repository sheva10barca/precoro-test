import { FC, useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { StyleSheet, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export const FontLoader: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    try {
      await Font.loadAsync({
        'inter-medium': require('../assets/fonts/Inter-Medium.ttf'),
        'inter-semibold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'inter-bold': require('../assets/fonts/Inter-Bold.ttf'),
      });
    } catch (error) {
      console.warn('Error loading fonts:', error);
    } finally {
      setFontsLoaded(true);
    }
  };

  useEffect(() => {
    loadFontsAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
