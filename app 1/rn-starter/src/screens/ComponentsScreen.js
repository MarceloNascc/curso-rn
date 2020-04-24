import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ComponentsScreen() {
  const name = 'Marcelo';

  return (
    <View>
      <Text style={styles.textOne}>Getting started with react native!</Text>
      <Text style={styles.textTwo}>My name is { name }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textOne: {
    fontSize: 45
  },
  textTwo: {
    fontSize: 20
  }
});