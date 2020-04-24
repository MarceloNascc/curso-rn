import React, { useContext } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { Context as BlogContext } from '../../context/BlogContext';
import BlogPostForm from '../../Components/BlogPostForm';

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <BlogPostForm
        onSubmit={(blogPost) => {
          addBlogPost(blogPost, () => {
            navigation.goBack();
          });
        }}
      />
    </View>
  );
}