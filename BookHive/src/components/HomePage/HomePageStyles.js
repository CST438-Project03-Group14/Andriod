import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxWidth: 1200,
    marginHorizontal: 'auto',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  title: {
    fontSize: 32,
    color: 'black',
    flex: 1,
    marginRight: 10,
    textAlign: 'left',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 'auto', 
    paddingHorizontal: 0,
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: 'center',
    marginHorizontal: 5, 
  },
  navButtonText: {
    color: 'black',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  featuredSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24, 
    marginBottom: 20,
    color: 'black',
  },
  bookGrid: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  bookCard: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  bookCardHover: {
    transform: [{ translateY: -5 }],
  },
  bookCover: {
    width: 120,
    height: 180,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 15,
    borderRadius: 5,
  },
  bookTitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  bookAuthor: {
    color: 'rgba(13, 11, 11, 0.8)',
    margin: 0,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20, 
  },
  actionButton: {
    backgroundColor: 'rgba(4, 4, 4, 0.9)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    transform: [{ scale: 1 }],
  },
  actionButtonText: {
    color: 'rgb(217, 27, 27)'
},
  actionButtonHover: {
    backgroundColor: 'rgb(3, 3, 3)',
    transform: [{ translateY: -2 }],
  },
});

export default styles;
