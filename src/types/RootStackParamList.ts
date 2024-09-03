import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Todos: undefined
  SplashScreen: undefined
  Users: undefined
}

export type TodosProps = NativeStackScreenProps<RootStackParamList, 'Todos'>
export type UsersProps = NativeStackScreenProps<RootStackParamList, 'Users'>
