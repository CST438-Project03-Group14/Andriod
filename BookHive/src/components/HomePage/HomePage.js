import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './HomePageStyles'; // Import styles
import { useNavigation } from '@react-navigation/native';
import ScreenBackground from '../BackgroundImage/ScreenBackground'; // Import the background


const HomePage = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };

  const goToLibrary = () => {
    navigation.navigate('Library'); // Navigate to Library screen
  };

  return (

    <ScreenBackground>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to BookHive</Text>
          <View style={styles.navbar}>
            <TouchableOpacity onPress={handleLogout} style={styles.navButton}>
              <Text style={styles.navButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.featuredSection}>
            <Text style={styles.sectionTitle}>Featured Books</Text>
            <View style={styles.bookGrid}>
              {/* Featured Book 1 */}
              <View style={styles.bookCard}>
                <View style={styles.bookCover}></View>
                <Text style={styles.bookTitle}>The Great Gatsby</Text>
                <Text style={styles.bookAuthor}>F. Scott Fitzgerald</Text>
              </View>

              {/* Featured Book 2 */}
              <View style={styles.bookCard}>
                <View style={styles.bookCover}></View>
                <Text style={styles.bookTitle}>1984</Text>
                <Text style={styles.bookAuthor}>George Orwell</Text>
              </View>

              {/* Featured Book 3 */}
              <View style={styles.bookCard}>
                <View style={styles.bookCover}></View>
                <Text style={styles.bookTitle}>Pride and Prejudice</Text>
                <Text style={styles.bookAuthor}>Jane Austen</Text>
              </View>
            </View>
          </View>

          <View style={styles.quickActions}>
            <TouchableOpacity onPress={goToLibrary} style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Browse Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>My Reading List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenBackground>
  );
};

export default HomePage;
