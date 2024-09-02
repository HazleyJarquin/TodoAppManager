import { RootStackParamList } from '@/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { styles } from './styles/styles'

const logo = require('../../../assets/TodoLogo.png')
export const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <View style={styles.logoAndTitleContainer}>
        <Image source={logo} />
        <Text style={styles.welcomeTitle}>Welcome to TodoAPP</Text>
      </View>

      <View style={styles.cardNavigation}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Todos')}
        >
          <Text style={styles.buttonText}>TODOS</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
