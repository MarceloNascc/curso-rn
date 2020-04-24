import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar(props) {
  return (
    <View style={styles.bar}>
      <TouchableOpacity onPress={() => props.termSubmitted}>
        <Feather name='search' style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        autoCapitalize='none'
        value={props.term}
        onChangeText={props.termChange}
        onEndEditing={props.termSubmitted}
        style={styles.input}
        placeholder='Search'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15
  },
  icon: {
    fontSize: 36,
    marginHorizontal: 5
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16
  }
});