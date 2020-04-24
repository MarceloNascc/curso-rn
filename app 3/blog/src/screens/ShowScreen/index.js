import React, { useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import { Context as BlogContext } from '../../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{blogPost.id}</Text>

        <Text style={styles.label}>TITLE:</Text>
        <Text style={styles.value}>{blogPost.title}</Text>

        <Text style={styles.label}>CONTENT:</Text>
        <Text style={styles.value}>{blogPost.content}</Text>
      </View>
    </ScrollView>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <FontAwesome name='pencil-square' style={styles.iconPlus} />
      </TouchableOpacity>
    )
  };
};

export default ShowScreen;