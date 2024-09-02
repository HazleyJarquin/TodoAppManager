import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { TextInput, TouchableHighlight, View } from 'react-native'
import { styles } from './styles/styles'
import { useTodoStore } from '@/store/useTodoStore'

export const TodoInput = () => {
  const [text, setText] = useState('')
  const { addTodo } = useTodoStore()
  const handlePress = () => {
    addTodo(text)
    setText('')
  }

  const handleChangeText = (newText: string) => {
    setText(newText)
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="Add Todo"
        onSubmitEditing={handlePress}
        onChangeText={handleChangeText}
      />

      <TouchableHighlight
        style={text.trim() === '' ? styles.addButtonDisabled : styles.addButton}
        onPress={handlePress}
        disabled={text.trim() === ''}
      >
        <Ionicons name="add" size={20} color={'white'} />
      </TouchableHighlight>
    </View>
  )
}
