import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation'

import ResultDetail from './ResultDetail';

function ResultsList(props) {
  if(!props.results.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item: result }) => {
          return (
            <TouchableOpacity onPress={ () => props.navigation.navigate('ResultShow', { id: result.id }) }>
              <ResultDetail result={result} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 235,
    width:  '95%',
    alignSelf: 'center',
    marginBottom: 10,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default withNavigation(ResultsList);