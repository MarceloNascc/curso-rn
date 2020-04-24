import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import styles from './styles';
import { Context as BlogContext } from '../../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title + String(blogPost.id)}
        renderItem={({ item: blogPost }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: blogPost.id })}>
              <View style={styles.post}>
                <Text style={styles.title}>{blogPost.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(blogPost.id)}>
                  <MaterialIcons name='delete' style={styles.iconTrash} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <AntDesign name='pluscircle' style={styles.iconPlus} />
      </TouchableOpacity>
    )
  };
};

export default IndexScreen;