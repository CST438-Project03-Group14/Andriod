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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2b86e2',
    textAlign: 'center',
    marginBottom: 16,
  },
  statusFilters: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2b86e2',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
  },
  filterButtonText: {
    color: '#2b86e2',
    fontWeight: '600',
  },
  activeFilterButton: {
    backgroundColor: '#2b86e2',
  },
  activeFilterButtonText: {
    color: '#FFFFFF',
  },
  booksGrid: {
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
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  cardActions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  viewButton: {
    flex: 1,
    backgroundColor: '#2b86e2',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  viewButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  removeButton: {
    flex: 1,
    backgroundColor: '#FF4444',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});

export default styles;
