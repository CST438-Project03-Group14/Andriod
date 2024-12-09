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
  header: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2b86e2',
    textAlign: 'center',
    marginBottom: 16,
  },
  genreButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  genreButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#2b86e2',
    borderRadius: 8,
    backgroundColor: 'transparent',
    marginRight: 8,
  },
  genreButtonText: {
    color: '#2b86e2',
    fontWeight: 'bold',
  },
  activeGenreButton: {
    backgroundColor: '#E6F3FF',
    borderColor: '#2b86e2',
  },
  booksGrid: {
    paddingBottom: 16,
  },
  bookCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  bookCover: {
    height: 150,
    backgroundColor: '#eee',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  defaultCover: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b86e2',
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
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    marginBottom: 4,
  },
  bookGenre: {
    fontSize: 12,
    color: '#2b86e2',
    marginBottom: 8,
  },
  bookDescription: {
    fontSize: 12,
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
});

export default styles;
