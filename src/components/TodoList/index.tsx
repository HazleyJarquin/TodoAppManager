import { ScrollView, StyleSheet, View } from 'react-native'
import { TodoItem } from '../TodoItem'
import { useTodoStore } from '@/store/useTodoStore'
import { FloatingActionButton } from '../FloatingActionButton'
import { Modal } from '../Modal'
import { Icon, Text } from 'react-native-paper'
import { AddTodoModalChildren } from './components/AddTodoModalChildren'
import { useModalStore } from '@/store/useShowModalStore'
import { shallow } from 'zustand/shallow'

export const TodoList = () => {
  const { showModal, setShowModal } = useModalStore(
    (state) => ({
      showModal: state.showModal,
      setShowModal: state.setShowModal,
    }),
    shallow
  )

  const { todos } = useTodoStore((state) => ({ todos: state.todos }), shallow)

  return (
    <View style={styles.container}>
      {showModal && (
        <Modal
          contentSytle={styles.modalContainer}
          open={showModal}
          onClose={() => setShowModal(false)}
          children={<AddTodoModalChildren />}
        />
      )}

      {todos.length === 0 ? (
        <View style={styles.noTodosContainer}>
          <Icon source="emoticon-sad-outline" size={100} color="white" />
          <Text style={{ color: 'white', fontSize: 20 }}>
            No todos yet, add some todos
          </Text>
        </View>
      ) : (
        <ScrollView
          style={{
            width: '100%',
            height: '50%',
            padding: 20,
          }}
        >
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} />
          ))}
        </ScrollView>
      )}

      <FloatingActionButton
        tooltipText="Add Todo"
        iconColor="black"
        onPress={() => setShowModal(true)}
        icon="plus"
        iconButtonSize={40}
        buttonBackground="#0AB6AB"
      />
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
  modalContainer: {
    width: '100%',
    backgroundColor: '#0AB6AB',
    margin: 'auto',
    borderRadius: 10,
  },

  noTodosContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
