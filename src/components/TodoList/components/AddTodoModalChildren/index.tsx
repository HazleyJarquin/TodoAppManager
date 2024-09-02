import { TodoInput } from '@/components/TodoInput'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const AddTodoModalChildren = () => {
  return (
    <View style={styles.container}>
      <TodoInput />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
})
