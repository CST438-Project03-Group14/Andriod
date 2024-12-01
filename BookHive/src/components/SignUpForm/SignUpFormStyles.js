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
    height: 50,
    marginVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  placeholderTextColor: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  icon: {
    position: 'absolute',
    right: 15,
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  button: {
    width: '80%',
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Same background for both buttons
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#4f73f1',
    fontWeight: '600',
    fontSize: 14,
  },
  error: {
    color: '#ff4444',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
  },
});

export default styles;
