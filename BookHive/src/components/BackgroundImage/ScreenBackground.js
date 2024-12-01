import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

const backgroundImage = require('./Library.jpg');

const ScreenBackground = ({ children }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay} /> {/* Semi-transparent overlay */}
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    flex: 1,
  },
});

export default ScreenBackground;
