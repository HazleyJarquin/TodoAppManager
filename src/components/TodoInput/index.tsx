import { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles/styles'
import { useTodoStore } from '@/store/useTodoStore'
import { Button, Text, TextInput } from 'react-native-paper'
import { useModalStore } from '@/store/useShowModalStore'
import { shallow } from 'zustand/shallow'
export const TodoInput = () => {
  const [text, setText] = useState('')
  const setShowModal = useModalStore((state) => state.setShowModal, shallow)
  const { addTodo } = useTodoStore(
    (state) => ({ addTodo: state.addTodo }),
    shallow
  )
  const handlePress = () => {
    addTodo({ name: text, isCompleted: false })
    setText('')
    setShowModal(false)
  }

  const handleChangeText = (newText: string) => {
    setText(newText)
  }
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        value={text}
        style={styles.input}
        label={'Add Todo'}
        onSubmitEditing={handlePress}
        activeOutlineColor="#201F1F"
        outlineColor="#fff"
        textColor="black"
        onChangeText={handleChangeText}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={text.trim() === '' ? styles.buttonDisabled : styles.addButton}
          onPress={handlePress}
          disabled={text.trim() === ''}
        >
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Add Todo
          </Text>
        </Button>
      </View>
    </View>
  )
}
