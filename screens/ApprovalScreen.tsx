import { StyleSheet, Text, View } from 'react-native';

export const ApprovalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Approval Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'inter-bold',
    fontSize: 24,
  },
});
