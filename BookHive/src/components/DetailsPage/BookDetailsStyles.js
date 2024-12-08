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
  bookSection: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  coverContainer: {
    width: 120,
    height: 180,
    marginRight: 16,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  defaultCover: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b86e2',
    borderRadius: 8,
  },
  defaultCoverText: {
    fontSize: 32,
    color: '#fff',
  },
  bookInfo: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  genre: {
    backgroundColor: '#dbe9ff',
    color: '#2b86e2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  datePublished: {
    color: '#1',
    fontSize: 14,
  },
  favoriteButton: {
    backgroundColor: '#2b86e2',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  favoriteButtonText: {
    color: '#fff',
    fontSize: 15,
  },
  reviewsSection: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  reviewForm: {
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  noReviews: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default styles;
