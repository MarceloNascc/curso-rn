import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ImageDetail(props) {
  return (
    <View style={styles.container}>
      <Image source={props.imageSrc} />
      
      <View style={styles.details}>
        <Text>{props.title}</Text>
        <Text>Image Score - {props.score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5
  }
});