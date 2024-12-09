import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';

import styles from './SignUpFormStyles';

const SignupForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/users/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        Alert.alert('Error', data.message || 'Signup failed. Please try again.');
        return;
      }

      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login'); // Navigate to Login after successful signup
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
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

        <View style={styles.signupSection}>
          <Text style={styles.signupTitle}>Create Account</Text>
          <Text style={styles.signupMessage}>Sign up to start your journey</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#666"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#666"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.signupButtonText}>Back to Login</Text>
          </TouchableOpacity>

          <View style={styles.termsSection}>
            <Text style={styles.termsText}>By signing up, you agree to our</Text>
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

export default SignupForm;
