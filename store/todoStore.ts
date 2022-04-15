import create from 'zustand'
import { Todo } from '../types/Todo'

export const todoStore = create<Todo>((set) => ({
  todos: [], //ここがstate
  addTodo: (text) =>
    set((state: any) => ({
      todos: [
        ...state.todos,
        {
          text: text,
          completed: false,
        },
      ],
    })),
  removeTodo: (id: string) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: any) => todo.id != id),
    })),
}))
