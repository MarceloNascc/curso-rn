import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ColorAdjuster(props){
  return (
    <View>
      <Text>{props.color}</Text>

      <Button title={`Increase ${props.color}`} onPress={() => props.changeColor(10)} />
      <Button title={`Decrease ${props.color}`} onPress={() => props.changeColor(-3)} />
    </View>
  );
}