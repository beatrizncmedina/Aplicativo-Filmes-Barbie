import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/barbie2023';
import Barbie2 from './components/barbie2011';
import Barbie3 from './components/barbie2009';
import SaibaMais from './components/saibaMais';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <Text style={styles.bia}>
       3C - Beatriz Medina
      </Text>
      <Text style={styles.paragraph}>
       Melhores filmes da Barbie
      </Text>
      <Card>
        <AssetExample />
        <Barbie2 />
        <Barbie3 />
        <SaibaMais />
      </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F20089',
    padding: 8,
  },
  paragraph: {
    width: 250,
    margin: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffedf2',
  },

  bia: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    fontSize: 20,
  }
});
