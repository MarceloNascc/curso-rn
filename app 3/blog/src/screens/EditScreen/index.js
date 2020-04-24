import React, { useContext } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { Context as BlogContext } from '../../context/BlogContext';
import BlogPostForm from '../../Components/BlogPostForm';

export default function EditScreen({ navigation }) {
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return (
    <View style={styles.container}>
      <BlogPostForm
        initialValues={blogPost}
        onSubmit={(post) => {
          editBlogPost({ id: blogPost.id, ...post }, () => {
            navigation.goBack();
          });
        }}
      />
    </View>
  );
}