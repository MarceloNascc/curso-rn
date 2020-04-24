import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

export default function ListScreen() {
  const friends = [
    { name: 'Friend #0', age: 20 },
    { name: 'Friend #1', age: 21 },
    { name: 'Friend #2', age: 19 },
    { name: 'Friend #3', age: 26 },
    { name: 'Friend #4', age: 18 },
    { name: 'Friend #5', age: 21 },
    { name: 'Friend #6', age: 23 },
    { name: 'Friend #7', age: 19 },
    { name: 'Friend #8', age: 25 },
    { name: 'Friend #9', age: 21 }
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item: friend }) => {
        return <Text style={styles.textStyle}>{friend.name} - Age {friend.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    padding: 40,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF'
  }
});