import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(value) => setTitle(value)} />

      <Text style={styles.label}>Content:</Text>
      <TextInput
        multiline={true}
        numberOfLines={8}
        style={[styles.input, styles.textArea]}
        value={content}
        onChangeText={(value) => setContent(value)}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          onSubmit({ title, content });
        }}
      >
        <Text style={styles.button}>Save Blog Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

export default BlogPostForm;