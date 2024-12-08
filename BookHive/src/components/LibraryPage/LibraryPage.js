import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView,} from 'react-native';
import styles from './LibraryPageStyles';

const Library = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      setSelectedGenre(null); 
      const response = await fetch(
        'https://bookhive-90e4e8826675.herokuapp.com/api/books/'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleGenreSelect = async (genre) => {
    setLoading(true);
    setSelectedGenre(genre);
    try {
      const response = await fetch(
        `https://bookhive-90e4e8826675.herokuapp.com/api/books/search/?q=${genre}`
      );
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
        setError(null);
      } else {
        throw new Error('Failed to fetch books for the selected genre');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
        <View style={styles.header}>
          <Text style={styles.title}>Library Collection</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.genreButtonsContainer}
          >
            <TouchableOpacity
              style={[
                styles.genreButton,
                selectedGenre === null && styles.activeGenreButton,
              ]}
              onPress={fetchAllBooks}
            >
              <Text style={styles.genreButtonText}>All Books</Text>
            </TouchableOpacity>
            {['Classic', 'Non-Fiction', 'Fantasy'].map(
              (genre) => (
                <TouchableOpacity
                  key={genre}
                  style={[
                    styles.genreButton,
                    selectedGenre === genre && styles.activeGenreButton,
                  ]}
                  onPress={() => handleGenreSelect(genre)}
                >
                  <Text style={styles.genreButtonText}>{genre}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>

        <FlatList
          data={books}
          keyExtractor={(item) => item.book_id.toString()}
          renderItem={({ item }) => (
            <View style={styles.bookCard}>
              <View style={styles.bookCover}>
                {item.cover_image ? (
                  <Image
                    source={{ uri: item.cover_image }}
                    style={styles.coverImage}
                  />
                ) : (
                  <View style={styles.defaultCover}>
                    <Text style={styles.defaultCoverText}>
                      {item.title[0]}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>by {item.author}</Text>
                <Text style={styles.bookGenre}>{item.genre}</Text>
                <Text style={styles.bookDescription}>
                  {item.description?.substring(0, 100)}...
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

export default Library;
