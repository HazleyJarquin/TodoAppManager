import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TodoList } from '@/components/TodoList'
import { styles } from './styles/styles'
import { ScreenWrapper } from '@/components/ScreenWrapper'
import { TodosProps } from '@/types'

export const Todos = ({ navigation }: TodosProps) => {
  return (
    <View style={styles.container}>
      <ScreenWrapper
        appBarHeaderStyle={style.appBarStyle}
        backIconColor="black"
        titleColor="black"
        title="Todo List"
        goBack={navigation.goBack}
      >
        <StatusBar style="light" />
        <TodoList />
      </ScreenWrapper>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  appBarStyle: {
    backgroundColor: '#7A7777',
  },
})
