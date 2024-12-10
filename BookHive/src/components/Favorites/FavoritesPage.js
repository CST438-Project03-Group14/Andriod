import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './FavoritesPageStyles';

const Favorites = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeStatus, setActiveStatus] = useState('ALL');
  const [user, setUser] = useState(null);

  const readingStatuses = {
    ALL: 'All Books',
    WANT_TO_READ: 'Want to Read',
    CURRENTLY_READING: 'Currently Reading',
    ALREADY_READ: 'Already Read',
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setError('You must log in to access this page.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    }
  }, [user, activeStatus]);

  const fetchFavorites = async () => {
    try {
      setLoading(true);

      let url = `https://bookhive-90e4e8826675.herokuapp.com/api/users/${user.user_id}/favorites/`;

      if (activeStatus !== 'ALL') {
        url = `https://bookhive-90e4e8826675.herokuapp.com/api/users/${user.user_id}/reading/${activeStatus}/`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch favorites');

      const data = await response.json();
      // console.log(data);
      setFavorites(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2b86e2" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        {!user && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>Go to Login</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../BackgroundImage/Library.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>My Favorites</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.genreButtonsContainer}
          >
            {Object.entries(readingStatuses).map(([status, label]) => (
              <TouchableOpacity
                key={status}
                style={[
                  styles.genreButton,
                  activeStatus === status && styles.activeGenreButton,
                ]}
                onPress={() => setActiveStatus(status)}
              >
                <Text
                  style={[
                    styles.genreButtonText,
                    activeStatus === status && styles.activeGenreButtonText,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <FlatList
          data={favorites}
          keyExtractor={(item) => item.favorite_id.toString()}
          renderItem={({ item }) => (
            <View style={styles.bookCard}>
              <View style={styles.bookCover}>
                {item.book_details.cover_image ? (
                  <Image
                    source={{ uri: item.book_details.cover_image }}
                    style={styles.coverImage}
                  />
                ) : (
                  <View style={styles.defaultCover}>
                    <Text style={styles.defaultCoverText}>
                      {item.book_details.title[0]}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{item.book_details.title}</Text>
                <Text style={styles.bookAuthor}>
                  by {item.book_details.author}
                </Text>
                <Text style={styles.bookGenre}>{item.book_details.genre}</Text>
                <Text style={styles.bookDescription}>
                  {item.book_details.description?.substring(0, 100)}...
                </Text>
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() =>
                    navigation.navigate('BookDetails', {
                      bookId: item.book_id,
                    })
                  }
                >
                  <Text style={styles.viewButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.booksGrid}
        />
      </View>
    </ImageBackground>
  );
};

export default Favorites;
