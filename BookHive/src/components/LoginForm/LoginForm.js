import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import styles from './LoginFormStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch(
        'https://bookhive-90e4e8826675.herokuapp.com/api/users/login/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Login failed. Please try again.');
        return;
      }

      const data = await response.json();

      // Save user data to AsyncStorage
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          user_id: data.user.user_id,
          username: data.user.username,
          is_librarian: data.user.is_librarian,
          email: data.user.email,
        })
      );

      // Navigate to the HomePage
      navigation.navigate('HomePage');
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <ImageBackground
      source={require('../BackgroundImage/Library.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.wrapper}>
        <View style={styles.brandSection}>
          <Text style={styles.brandIcon}>📘</Text>
          <Text style={styles.brandTitle}>BookHive</Text>
          <Text style={styles.brandTagline}>Your Digital Library Companion</Text>
        </View>

        <View style={styles.loginSection}>
          <Text style={styles.loginTitle}>Welcome Back</Text>
          <Text style={styles.loginMessage}>Sign in to continue to your library</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignupForm')}>
            <Text style={styles.loginButtonText}>Create Account!</Text>
          </TouchableOpacity>


          <View style={styles.termsSection}>
            <Text style={styles.termsText}>By signing in, you agree to our</Text>
            <View style={styles.termsLinks}>
              <Text style={styles.link}>Terms of Service</Text>
              <Text> and </Text>
              <Text style={styles.link}>Privacy Policy</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginForm;
