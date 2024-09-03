import { RootStackParamList } from '@/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { styles } from './styles/styles'
import { Button } from 'react-native-paper'

const logo = require('../../../assets/TodoLogo.png')
export const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <View style={styles.logoAndTitleContainer}>
        <Image source={logo} />
        <Text style={styles.welcomeTitle}>Welcome to TodoApp</Text>
      </View>

      <View style={styles.cardNavigation}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Todos')}
        >
          <Text style={styles.buttonText}>Todos</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('SplashScreen')}
        >
          <Text style={styles.buttonText}>Users</Text>
        </Button>
      </View>
    </View>
  )
}
