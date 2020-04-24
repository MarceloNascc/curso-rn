import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function TrackListScreen({ navigation }) {
  return (
    <View>
      <Text> Track List </Text>
      <Button title='Go to Track Detail' onPress={() => navigation.navigate('TrackDetail')} />
    </View>
  );
}
