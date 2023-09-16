import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/barbie2009.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#F20089',
  },
  logo: {
    height: 225,
    width: 250,
  }
});
