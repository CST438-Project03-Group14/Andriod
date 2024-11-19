import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/components/LoginForm/LoginForm'; 
import HomePage from './src/components/HomePage/HomePage';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
