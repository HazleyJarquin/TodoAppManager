import { RootStackParamList } from '@/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View } from 'react-native'

const logo = require('../../../assets/TodoLogo.png')
export const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  setTimeout(() => {
    navigation.navigate('Home')
  }, 5000)
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.title}>Todo App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
})
