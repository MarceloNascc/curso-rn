import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ResultDetail({ result }) {
  return (
    <View style={styles.details}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.textBottom}>{result.rating} Star, {result.review_count} Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: '80%',
    borderRadius: 4
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textBottom: {
    color: '#AEAEAE'
  }
});