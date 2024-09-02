import { createWithEqualityFn } from 'zustand/traditional'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type TodoState = {
  todos: string[]
  addTodo: (todo: string) => void
  removeTodo: (index: number) => void
}

export const useTodoStore = createWithEqualityFn(
  persist<TodoState>(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (index) =>
        set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
    }),
    {
      name: 'todos-store',
      getStorage: () => AsyncStorage,
    }
  )
)
