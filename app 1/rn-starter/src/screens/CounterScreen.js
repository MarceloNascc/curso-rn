import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function reducer(state, action) {
  return { count: action.payload };
}

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: 'change count', payload: state.count + 1 })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'change count', payload: state.count - 1 })} />

      <Text style={styles.text}>Current count: {state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 15,
    color: '#50205C'
  }
});