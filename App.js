import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('');

  const verificarNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10
    if (parseInt(numero) === numeroAleatorio) {
      Alert.alert("Resultado", "Você acertou!");
    } else {
      Alert.alert("Resultado", `Você errou! O número era ${numeroAleatorio}.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivinhe o Número!</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite um número de 0 a 10"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Verificar" onPress={verificarNumero} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 5,
    textAlign: 'center',
  },
});
