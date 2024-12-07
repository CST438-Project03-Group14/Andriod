import React, { useEffect, useState } from 'react';

import { View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './HomePageStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (err) {
        console.error('Failed to load user data:', err);
      }
    };

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'https://bookhive-90e4e8826675.herokuapp.com/api/books/'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }

        const data = await response.json();

        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setFeaturedBooks(shuffled.slice(0, 4));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getUser();
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../BackgroundImage/Library.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>
              Welcome back, {user?.username}!
            </Text>
            <Text style={styles.welcomeMessage}>
              Discover your next favorite book from our curated collection.
            </Text>
          </View>

          <View style={styles.featuredSection}>
            <Text style={styles.featuredTitle}>Featured Books</Text>
            <View style={styles.bookGrid}>
              {featuredBooks.map((book) => (
                <View key={book.book_id} style={styles.bookCard}>
                  {book.cover_image ? (
                    <Image
                      source={{ uri: book.cover_image }}
                      style={styles.bookCover}
                    />
                  ) : (
                    <View style={styles.defaultCover}>
                      <Text style={styles.defaultCoverText}>
                        {book.title[0]}
                      </Text>
                    </View>
                  )}
                  <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>{book.title}</Text>
                    <Text style={styles.bookAuthor}>by {book.author}</Text>
                    <Text style={styles.bookGenre}>{book.genre}</Text>
                    <Text style={styles.bookDescription}>
                      {book.description?.slice(0, 100)}...
                    </Text>
                    <TouchableOpacity
                      style={styles.viewButton}
                      onPress={() =>
                        navigation.navigate('BookDetails', {
                          bookId: book.book_id,
                        })
                      }
                    >
                      <Text style={styles.viewButtonText}>View Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default HomePage;
