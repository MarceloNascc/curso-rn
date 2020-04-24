import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import ImageDetail from '../Components/ImageDetail';

export default function ImageScreen() {
  return (
    <View style={styles.container}>
      <ImageDetail imageSrc={require('../../assets/forest.jpg')} title='Forest' score={15} />
      <ImageDetail imageSrc={require('../../assets/beach.jpg')} title='Beach' score={10} />
      <ImageDetail imageSrc={require('../../assets/mountain.jpg')} title='Mountain' score={12} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2F5C7',
    height: '100%'
  }
});