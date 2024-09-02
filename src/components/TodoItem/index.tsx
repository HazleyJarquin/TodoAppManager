import { useTodoStore } from '@/store/useTodoStore'
import { ITodos } from '@/types'
import { StyleSheet, View } from 'react-native'
import { Checkbox, IconButton, Text } from 'react-native-paper'
import { shallow } from 'zustand/shallow'

interface TodoItemProps {
  todo: ITodos
  index: number
}

export const TodoItem = ({ index, todo }: TodoItemProps) => {
  const { removeTodo, completeTodo } = useTodoStore(
    (state) => ({
      removeTodo: state.removeTodo,
      completeTodo: state.completeTodo,
    }),
    shallow
  )
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`
    }
    return text
  }

  return (
    <View style={styles.card} key={index}>
      <View style={styles.rowCheckboxAndTitle}>
        <Checkbox
          uncheckedColor="#fff"
          color="#fff"
          status={todo.isCompleted ? 'checked' : 'unchecked'}
          onPress={() => {
            completeTodo(index)
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            textDecorationLine: todo.isCompleted ? 'line-through' : 'none',
          }}
        >
          {truncateText(todo.name, 15)}
        </Text>
      </View>

      <IconButton
        icon={'delete'}
        iconColor="white"
        onPress={() => removeTodo(index)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#201F1F',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circleCheckbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowCheckboxAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
})
