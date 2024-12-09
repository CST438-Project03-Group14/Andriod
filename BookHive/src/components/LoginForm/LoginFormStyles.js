import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 255)',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
  },
  brandSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  brandIcon: {
    fontSize: 48,
  },
  brandTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2b86e2',
  },
  brandTagline: {
    fontSize: 16,
    color: '#666',
  },
  loginSection: {
    width: '100%',
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2b86e2',
    marginBottom: 8,
  },
  loginMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#2b86e2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: '#FF0000',
    marginBottom: 16,
    textAlign: 'center',
  },
  termsSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  termsText: {
    fontSize: 12,
    color: '#666',
  },
  termsLinks: {
    flexDirection: 'row',
    marginTop: 5,
  },
  link: {
    color: '#2b86e2',
    textDecorationLine: 'underline',
  },
});

export default styles;
