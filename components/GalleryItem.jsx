import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const GalleryItem = ({ imageSource, title }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={imageSource} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GalleryItem;
