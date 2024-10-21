import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (val) => {
    if (val === '=') {
      try {
        const res = eval(input); // CUIDADO: eval pode ser perigoso, use com cuidado
        setResult(res.toString());
      } catch (error) {
        setResult('Erro');
      }
    } else if (val === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + val);
    }
  };

  const createButton = (val) => (
    <TouchableOpacity onPress={() => handlePress(val)} style={styles.button}>
      <Text style={styles.buttonText}>{val}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{input || '0'}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {createButton('7')}
          {createButton('8')}
          {createButton('9')}
          {createButton('/')}
        </View>
        <View style={styles.row}>
          {createButton('4')}
          {createButton('5')}
          {createButton('6')}
          {createButton('*')}
        </View>
        <View style={styles.row}>
          {createButton('1')}
          {createButton('2')}
          {createButton('3')}
          {createButton('-')}
        </View>
        <View style={styles.row}>
          {createButton('0')}
          {createButton('.')}
          {createButton('=')}
          {createButton('+')}
        </View>
        <View style={styles.row}>
          {createButton('C')}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  resultText: {
    fontSize: 40,
    color: '#000',
  },
  buttonsContainer: {
    flex: 3,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});
