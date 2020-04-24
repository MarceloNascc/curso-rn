import React, { useState } from 'react';
import { ScrollView, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [results, errorMessage, load, searchApi] = useResults();

  const priceSmaller = [], priceMid = [], priceBigger = [], priceNone = [];

  const filterByPrice = () => {
    results.forEach((result => {
      switch (result.price) {
        case '$':
          priceSmaller.push(result);
          break;

        case '$$':
          priceMid.push(result);
          break;

        case '$$$':
          priceBigger.push(result);
          break;

        default:
          priceNone.push(result);
      }
    }));
  };
  filterByPrice();

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={['#d83129', '#F58577']}
        start={[0, 0]}
        end={[0.7, 1]}
      >
        <SearchBar
          term={term}
          termChange={setTerm}
          termSubmitted={() => searchApi(term)}
        />

        {errorMessage ? <Text>{errorMessage}</Text> : null}

        {
          load ? (
            <View style={styles.loading}>
              <ActivityIndicator size='large' color='#FFFFFF' />
            </View>
          ) : (
            <>
              <ResultsList title='Cost Effective' results={priceSmaller} />
              <ResultsList title='Bit Pricier' results={priceMid} />
              <ResultsList title='Big Spender' results={priceBigger} />
              <ResultsList title='Without Informatiom' results={priceNone} />
            </>
          )
        }
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    height: 600, //armengo :(
    justifyContent: 'center'
  },
  gradient: {
    flex: 1
  },
});