import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>My Home Screen!</Text>

      <Button
        color='#F5E5D5'
        title='Go to Components Demo'
        onPress={() => props.navigation.navigate('Components')}
      />

      <Button
        color='#E5F5C5'
        title='Go to List Demo'
        onPress={() => props.navigation.navigate('List')}
      />

      <Button
        color='#C5D5A5'
        title='Go to Image Demo'
        onPress={() => props.navigation.navigate('Image')}
      />

      <Button
        color='#F5E5A5'
        title='Go to Counter Demo'
        onPress={() => props.navigation.navigate('Counter')}
      />

      <Button
        color='#FFA544'
        title='Go to Colors Demo'
        onPress={() => props.navigation.navigate('Colors')}
      />

      <Button
        color='#2FD524'
        title='Go to Square Demo'
        onPress={() => props.navigation.navigate('Square')}
      />

      <Button
        color='#15CCEE'
        title='Go to Text Demo'
        onPress={() => props.navigation.navigate('Text')}
      />

      <Button
        color='#158920'
        title='Go to Box Demo'
        onPress={() => props.navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 5,
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#15DEF5'
  }
});

export default HomeScreen;
