import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NewsItem = ({ title, date, text, imageUrl, onPress }) => {

    const newsImage = {
        uri: imageUrl,
        width: 150,
        height: 150
    }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image 
          source={newsImage}
          style={styles.image} 
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.text} numberOfLines={3}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    width: '150px',
    height: '150px',
    minHeight: 120,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#444',
  },
});

export default NewsItem;
