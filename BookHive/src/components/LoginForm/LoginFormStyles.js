import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: 420, 
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 2,
    borderRadius: 12, 
    paddingVertical: 30,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15, 
    margin: 10,
  },
  title: {
    fontSize: 28, 
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
    color: '#2b86e2',
    letterSpacing: 1,
  },
  inputBox: {
    position: 'relative',
    width: '100%',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 2,
    borderRadius: 40,
    color: 'rgb(255, 255, 255)', // White text
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: 'rgba(79, 115, 241, 0.6)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.0, 
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease', 
  },
  placeholderTextColor: {
    color: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
  },
  iconPlaceholder: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -12 }],
    fontSize: 18,
    color: '#0b0b0b',
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#4f73f1',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginTop: 10,
    transition: 'background-color 0.3s ease', 
  },
  buttonText: {
    color: 'rgb(18, 16, 16)',
    fontWeight: '700',
    fontSize: 16,
  },
  registerLink: {
    fontSize: 14,
    textAlign: 'center',
    color: '#070707',
    marginTop: 20,
  },
  linkText: {
    color: 'rgb(255, 255, 255)',
    fontWeight: '600',
    textDecorationLine: 'underline', 
  },
  errorContainer: {
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  errorText: {
    color: '#721c24',
    marginBottom: 5,
  },
  testCredentials: {
    color: '#721c24',
    fontSize: 14,
  },
});

export default styles;
