import React, { useState, useEffect } from 'react';
import {View, Text, Image, TextInput, Button, ScrollView, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import styles from './BookDetailsStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookDetails = ({ route, navigation }) => {
  const { bookId } = route.params;
  const [bookData, setBookData] = useState({ book: null, reviews: [] });
  const [newReview, setNewReview] = useState({ rating: 5, review_text: '' });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };

    const fetchBookData = async () => {
      try {
        const response = await fetch(`https://bookhive-90e4e8826675.herokuapp.com/api/books/${bookId}/`);
        if (response.ok) {
          const data = await response.json();
          setBookData(data);
        }
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchUser();
    fetchBookData();
  }, [bookId]);

  const handleReviewSubmit = async () => {
    try {
      const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/reviews/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user?.user_id,
          book_id: bookId,
          rating: newReview.rating,
          review_text: newReview.review_text,
        }),
      });

      if (response.ok) {
        const updatedData = await fetch(`https://bookhive-90e4e8826675.herokuapp.com/api/books/${bookId}/`);
        const newData = await updatedData.json();
        setBookData(newData);
        setNewReview({ rating: 5, review_text: '' });
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const addToFavorites = async () => {
    try {
      const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/favorites/add/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user?.user_id, 
          book_id: bookId, 
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Added to Favorites!');
      } else {
        Alert.alert('Error', 'Failed to add to favorites.');
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  if (!bookData.book) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { book, reviews } = bookData;

  return (
    <ImageBackground
      source={require('../BackgroundImage/Library.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.bookSection}>
            <View style={styles.coverContainer}>
              {book.cover_image ? (
                <Image source={{ uri: book.cover_image }} style={styles.coverImage} />
              ) : (
                <View style={styles.defaultCover}>
                  <Text style={styles.defaultCoverText}>{book.title[0]}</Text>
                </View>
              )}
            </View>

            <View style={styles.bookInfo}>
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.author}>by {book.author}</Text>
              <Text style={styles.genre}>{book.genre}</Text>
              <Text style={styles.description}>{book.description}</Text>
              <Text style={styles.datePublished}>Published: {new Date(book.published_date).toLocaleDateString()}</Text>
              <TouchableOpacity style={styles.favoriteButton} onPress={addToFavorites}>
                <Text style={styles.favoriteButtonText}>❤️ Add to Favorites</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.reviewsSection}>
            <Text style={styles.sectionTitle}>Reviews</Text>

            <View style={styles.reviewForm}>
              <TextInput
                placeholder="Write your review..."
                style={styles.textInput}
                value={newReview.review_text}
                onChangeText={(text) => setNewReview({ ...newReview, review_text: text })}
              />
              <Button title="Submit Review" onPress={handleReviewSubmit} />
            </View>

            {reviews.length === 0 ? (
              <Text style={styles.noReviews}>No reviews yet. Be the first to review!</Text>
            ) : (
              reviews.map((review) => (
                <View key={review.review_id} style={styles.review}>
                  <Text style={styles.reviewRating}>
                    {'⭐'.repeat(review.rating)}
                  </Text>
                  <Text style={styles.reviewText}>{review.review_text}</Text>
                  <Text style={styles.reviewDate}>{new Date(review.created_at).toLocaleDateString()}</Text>
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default BookDetails;
