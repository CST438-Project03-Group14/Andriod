import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './FavoritesPageStyles'; // Import styles
import { useNavigation } from '@react-navigation/native';
import ScreenBackground from '../BackgroundImage/ScreenBackground'; // Import the background

const FavoritesPage = () => {
  const navigation = useNavigation(); 
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      dateAdded: '2024-01-15',
      notes: 'Beautiful prose, fascinating characters'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      genre: 'Science Fiction',
      dateAdded: '2024-02-01',
      notes: 'Dystopian masterpiece'
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      dateAdded: '2024-02-15',
      notes: 'Witty and charming'
    }
  ]);

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(book => book.id !== id));
  };

  const updateNotes = (id, newNotes) => {
    setFavorites(favorites.map(book =>
      book.id === id ? { ...book, notes: newNotes } : book
    ));
  };

  const getMostCommonGenre = () => {
    const genreCount = {};
    favorites.forEach(book => {
      genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
    });
    return Object.keys(genreCount).reduce((a, b) =>
      genreCount[a] > genreCount[b] ? a : b,
      ''
    );
  };

  const recentlyAdded = () =>
    favorites.length > 0 ? favorites[favorites.length - 1].title : 'None';

  return (
    <ScreenBackground>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Favorites</Text>
          <TouchableOpacity
            style={styles.backButton}
            text={styles.backButtonText}
            onPress={() => navigation.navigate('HomePage')}
          >
            <Text style={styles.backButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Total Favorites</Text>
            <Text style={styles.statValue}>{favorites.length}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Most Common Genre</Text>
            <Text style={styles.statValue}>{getMostCommonGenre()}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Recently Added</Text>
            <Text style={styles.statValue}>{recentlyAdded()}</Text>
          </View>
        </View>

        {/* Favorites List */}
        {favorites.map(book => (
          <View key={book.id} style={styles.favoriteCard}>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>By {book.author}</Text>
              <Text style={styles.genre}>{book.genre}</Text>
              <Text style={styles.dateAdded}>Added on: {book.dateAdded}</Text>
              <TextInput
                style={styles.notesArea}
                value={book.notes}
                onChangeText={(text) => updateNotes(book.id, text)}
                placeholder="Add your notes..."
                multiline
              />
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromFavorites(book.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.readButton}>
                  <Text style={styles.readButtonText}>Start Reading</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScreenBackground>
  );
};

export default FavoritesPage;
