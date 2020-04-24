import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import ColorAdjuster from '../Components/ColorAdjuster';

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorAdjuster color='Red' changeColor={(value) => setRed(red + value)} />
      <ColorAdjuster color='Green' changeColor={(value) => setGreen(green + value)} />
      <ColorAdjuster color='Blue' changeColor={(value) => setBlue(blue + value)} />

      <View 
        style={{
          marginTop: 60,
          height: 150,
          width: '100%',
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});