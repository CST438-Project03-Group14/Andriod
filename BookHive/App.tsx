import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/components/LoginForm/LoginForm'; 
import HomePage from './src/components/HomePage/HomePage';
import SignupForm from './src/components/SignUpForm/SignUpForm';
import LibraryPage from './src/components/LibraryPage/LibraryPage';
import FavoritesPage from './src/components/Favorites/FavoritesPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={LoginForm} 
        options={{ title: 'Login' }} 
        />
        <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: 'Welcome to BookHive'}} 
        />
        <Stack.Screen
        name="SignupForm"
        component={SignupForm}
        options={{ title: 'Create Account'}} 
        />
         <Stack.Screen
        name="LibraryPage"
        component={LibraryPage}
        options={{ title: 'Library Catalog'}} 
        />
         <Stack.Screen
        name="FavoritesPage"
        component={FavoritesPage}
        options={{ title: 'Favorites'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
