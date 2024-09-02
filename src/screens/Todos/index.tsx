import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TodoList } from '@/components/TodoList'
import { styles } from './styles/styles'

export const Todos = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <TodoList />
    </View>
  )
}
