import { Text, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ fontSize: 40, fontFamily: 'inter-bold', color: '#1D2452' }}
      >
        Home Screen
      </Text>
    </View>
  );
};
