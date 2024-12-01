import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SignUpFormStyles'; // Import styles
import ScreenBackground from '../BackgroundImage/ScreenBackground'; // Import the background

const SignupForm = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    navigation.navigate('Login'); // Navigate back to the Login screen
  };

  return (
    <ScreenBackground>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Create Account</Text>

        {/* Email Input */}
        <View style={styles.inputBox}>
          <TextInput
            style={[
              styles.input,
              focusedInput === 'email' && styles.inputFocus,
            ]}
            placeholder="Email"
            placeholderTextColor={styles.placeholderTextColor.color}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
          />
          <Text style={styles.icon}>📧</Text>
        </View>

        {/* Password Input */}
        <View style={styles.inputBox}>
          <TextInput
            style={[
              styles.input,
              focusedInput === 'password' && styles.inputFocus,
            ]}
            placeholder="Password"
            placeholderTextColor={styles.placeholderTextColor.color}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
          />
          <Text style={styles.icon}>🔒</Text>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputBox}>
          <TextInput
            style={[
              styles.input,
              focusedInput === 'confirmPassword' && styles.inputFocus,
            ]}
            placeholder="Confirm Password"
            placeholderTextColor={styles.placeholderTextColor.color}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onFocus={() => setFocusedInput('confirmPassword')}
            onBlur={() => setFocusedInput(null)}
          />
          <Text style={styles.icon}>🔒</Text>
        </View>

        {/* Error Message */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Buttons */}
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
};

export default SignupForm;
