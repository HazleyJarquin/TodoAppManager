import { useTodoStore } from '@/store/useTodoStore'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
interface TodoItemProps {
  todo: string
  index: number
}

export const TodoItem = ({ index, todo }: TodoItemProps) => {
  const { removeTodo } = useTodoStore()
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`
    }
    return text
  }
  return (
    <View style={styles.card} key={index}>
      <Text style={{ color: '#fff', fontSize: 20 }}>
        {truncateText(todo, 20)}
      </Text>
      <TouchableHighlight
        style={styles.removeButton}
        onPress={() => removeTodo(index)}
      >
        <Ionicons name="trash" color={'#fff'} size={24} />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#483248',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
})
