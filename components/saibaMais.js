import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Botao() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: '#F20089',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
    width: 300,
  },
  buttonText: {
    color: '#F20089',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
