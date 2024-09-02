import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Todos: undefined
  SplashScreen: undefined
}

export type TodosProps = NativeStackScreenProps<RootStackParamList, 'Todos'>
