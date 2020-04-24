import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';

import yelp from '../api/yelp';
import { LinearGradient } from 'expo-linear-gradient';

export default function ResultShowScreen({ navigation }) {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [load, setLoad] = useState(true);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    try {
      setLoad(true);

      const response = await yelp.get(`/${id}`);

      setResult(response.data);
    } catch (error) {
      setErrorMessage('Something went wrong');
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={['#d83129', '#F58577']}
        start={[0, 0]}
        end={[0.7, 1]}
      >
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        {
          load ? (
            <View style={styles.loading}>
              <ActivityIndicator size='large' color='#FFFFFF' />
            </View>
          ) : (
            <>
              <Text style={styles.name}>{result.name}</Text>

              <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.list}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item: photo }) => {
                  return <Image style={styles.image} source={{ uri: photo }} />
                }}
              />
            </>
          )
        }
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    justifyContent: 'center',
    height: '100%'
  },
  name: {
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    width: '95%'
  },
  gradient: {
    flex: 1,
    paddingBottom: 5
  },
  list: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    width: '95%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  image: {
    marginVertical: 10,
    alignSelf: 'center',
    height: 200,
    width: 300,
    borderRadius: 5
  }
});