import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logoAndTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    height: '50%',
  },
  welcomeTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  cardNavigation: {
    width: '100%',
    height: '50%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#8875FF',
    padding: 15,
    width: '100%',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
})
