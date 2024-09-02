import { ScrollView, StyleSheet, View } from 'react-native'
import { TodoInput } from '../TodoInput'
import { TodoItem } from '../TodoItem'
import { useTodoStore } from '@/store/useTodoStore'

export const TodoList = () => {
  const { todos } = useTodoStore()
  return (
    <View style={styles.container}>
      <TodoInput />
      <ScrollView style={{ width: '100%', height: '50%', padding: 20 }}>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
})
