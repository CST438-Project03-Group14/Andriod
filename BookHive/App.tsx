import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/components/LoginForm/LoginForm';
import HomePage from './src/components/HomePage/HomePage';
import SignupForm from './src/components/SignUpForm/SignUpForm';
import LibraryPage from './src/components/LibraryPage/LibraryPage';
import FavoritesPage from './src/components/Favorites/FavoritesPage';

// Custom Header Component
const CustomHeader = ({ navigation }: { navigation: any }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch email from AsyncStorage
    const fetchUserEmail = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        setEmail(user.email);
      }
    };
    fetchUserEmail();
  }, []);

  const handleLogout = async () => {
    // Clear AsyncStorage and navigate to login screen
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.navbar}>
      {/* Logo */}
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Text style={styles.logoIcon}>📘</Text>
        <Text style={styles.logoText}>BookHive</Text>
      </TouchableOpacity>

      {/* Navigation Links */}
      <View style={styles.navLinks}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LibraryPage')}
        >
          <Text style={styles.navLinkText}>📖 Library</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('FavoritesPage')}
        >
          <Text style={styles.navLinkText}>❤️ Favorites</Text>
        </TouchableOpacity>

        {/* User Dropdown */}
        <View style={styles.userMenuContainer}>
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.userAvatar}>👤</Text>
          </TouchableOpacity>

          {showDropdown && (
            <Modal
              transparent={true}
              animationType="fade"
              visible={showDropdown}
              onRequestClose={() => setShowDropdown(false)}
            >
              <TouchableOpacity
                style={styles.dropdownOverlay}
                onPress={() => setShowDropdown(false)}
              >
                <View style={styles.dropdown}>
                  <View style={styles.userInfo}>
                    <Text style={styles.email}>{email || 'No email available'}</Text>
                  </View>
                  <View style={styles.divider} />
                  <TouchableOpacity
                    style={styles.dropdownButton}
                    onPress={handleLogout}
                  >
                    <Text style={styles.logoutText}>🚪 Sign Out</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Modal>
          )}
        </View>
      </View>
    </View>
  );
};

// Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginForm} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Welcome to BookHive' }} 
        />
        <Stack.Screen
          name="SignupForm"
          component={SignupForm}
          options={{ title: 'Create Account' }} 
        />
        <Stack.Screen
          name="LibraryPage"
          component={LibraryPage}
          options={{ title: 'Library Catalog' }} 
        />
        <Stack.Screen
          name="FavoritesPage"
          component={FavoritesPage}
          options={{ title: 'Favorites' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 20,
    color: '#2b86e2',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2b86e2',
    marginLeft: 8,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButton: {
    marginLeft: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  navLinkText: {
    fontSize: 16,
    color: '#666',
  },
  userMenuContainer: {
    position: 'relative',
  },
  userButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(43, 134, 226, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    fontSize: 20,
    color: '#2b86e2',
  },
  dropdownOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 20,
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 12,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 8,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 68, 68, 0.1)',
  },
  logoutText: {
    fontSize: 16,
    color: '#FF4444',
    fontWeight: 'bold',
  },
});
