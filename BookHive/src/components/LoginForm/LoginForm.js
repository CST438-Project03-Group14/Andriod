import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginFormStyles'; // Import styles
import ScreenBackground from '../BackgroundImage/ScreenBackground'; // Import the background


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  // Mock credentials
  const mockUsers = [
    { email: 'test@test.com', password: 'test123' }
  ];

  const handleLogin = () => {
    const user = mockUsers.find(
      user => user.email === email && user.password === password
    );

    if (user) {
      setError('');
      navigation.navigate('HomePage');
    } else {
      setError('Invalid credentials. Try one of these test accounts:');
    }
  };

  return (
    <ScreenBackground>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputBox}>
          <Text style={styles.iconPlaceholder}>📧</Text> {/* Replace envelope icon with emoji */}
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            placeholderTextColor={styles.placeholderTextColor.color}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.iconPlaceholder}>🔒</Text> {/* Replace lock icon with emoji */}
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={styles.placeholderTextColor.color}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
            {mockUsers.map((user, index) => (
              <Text key={index} style={styles.testCredentials}>
                Email: {user.email} | Password: {user.password}
              </Text>
            ))}
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.registerLink}>
          <Text>
            Don't have an account?{' '}
            <Text style={styles.linkText} onPress={() => navigation.navigate('Signup')}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </ScreenBackground>

  );
};

export default LoginForm;
