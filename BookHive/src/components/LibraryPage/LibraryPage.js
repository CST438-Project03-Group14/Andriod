import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import styles from './LibraryPageStyles'; // Import styles
import ScreenBackground from '../BackgroundImage/ScreenBackground'; // Import the background


const LibraryPage = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
  ];

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScreenBackground>
      <View style={styles.wrapper}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Library Catalog</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomePage')}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholderTextColor={styles.placeholderTextColor.color}
            placeholder="Search books by title or author..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Book List */}
        <FlatList
          data={filteredBooks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.bookCard}>
              <View style={styles.bookCover} />
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>By {item.author}</Text>
                <Text style={styles.genre}>{item.genre}</Text>
                <TouchableOpacity style={styles.detailsButton}>
                  <Text style={styles.detailsButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.bookList}
        />
      </View>
    </ScreenBackground>
  );
};

export default LibraryPage;
