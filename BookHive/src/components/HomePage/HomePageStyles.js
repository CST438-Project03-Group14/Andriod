import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    width: '90%', 
    maxWidth: 1200, 
    alignSelf: 'center',
    backgroundColor: '#FFFFFF', 
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  scrollContent: {
    paddingBottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    color: '#FF0000',
    textAlign: 'center',
  },
  welcomeSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#4f73f1',
    borderRadius: 15,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 8,
  },
  welcomeMessage: {
    fontSize: 16,
    color: '#EEE',
    opacity: 0.9,
    textAlign: 'center',
  },
  featuredSection: {
    marginTop: 16,
  },
  featuredTitle: {
    fontSize: 20,
    color: '#2b86e2',
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  bookGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    width: '48%', 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  bookCover: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  defaultCover: {
    width: '100%',
    height: 150,
    backgroundColor: '#2b86e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultCoverText: {
    fontSize: 36,
    color: '#FFF',
  },
  bookInfo: {
    padding: 12,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  bookGenre: {
    fontSize: 12,
    color: '#2b86e2',
    marginBottom: 8,
  },
  bookDescription: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },
  viewButton: {
    backgroundColor: '#2b86e2',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;
