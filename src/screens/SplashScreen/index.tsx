import { useGetAllUsers } from '@/services/getAllUsers.service'
import { useUsersStore } from '@/store/useUsersStore'
import { RootStackParamList } from '@/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { shallow } from 'zustand/shallow'

const logo = require('../../../assets/TodoLogo.png')
export const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const { data: UsersData } = useGetAllUsers()
  const { setUsers } = useUsersStore(
    (state) => ({
      setUsers: state.setUsers,
    }),
    shallow
  )
  useEffect(() => {
    if (UsersData?.data) {
      setUsers(UsersData.data)
      navigation.navigate('Users')
    }
  }, [UsersData, setUsers, navigation])

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
