import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function SquareScreen() {
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={styles.label}>Insert your name here:</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newText) => setName(newText)}
      />

      <Text style={styles.text}>Your name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 12
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DD48CC',
    borderRadius: 6,
    height: 50,
    marginBottom: 50,
    marginHorizontal: 10,
    textAlign: 'center'
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    color: '#CE90DD'
  }
});