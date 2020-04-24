import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SquareScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textFill}>Child #1</Text>
      <Text style={styles.textBig}>Child #2</Text>
      <Text style={styles.textAbsoluteRight}>Child #3</Text>
      <Text style={styles.textAbsoluteLeft}>Child #4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 300
  },
  textBig: {
    borderWidth: 1,
    borderColor: '#FF0000',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 60,
    flex: 0.5,
    alignSelf: 'stretch'
  },
  textAbsoluteLeft: {
    borderWidth: 1,
    borderColor: '#FF0000',
    padding: 10,
    position: 'absolute',
    left: 10
  },
  textAbsoluteRight: {
    borderWidth: 1,
    borderColor: '#FF0000',
    padding: 10,
    position: 'absolute',
    right: 10
  },
  textFill: {
    borderWidth: 1,
    borderColor: '#FF0000',
    padding: 10,
    ...StyleSheet.absoluteFillObject
    // position: 'absolute',
    // top: 2,
    // bottom: 2,
    // left: 2,
    // right: 2
  }
});