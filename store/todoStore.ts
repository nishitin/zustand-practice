import create from 'zustand/react'
import { Todo } from '../types/Todo'

export const todoStore = create<Todo>((set) => ({
  todos: [],
  addTodo: () =>
    set((state: any) => ({
      todos: [...state.todos, {}],
    })),
  removeTodo: (id: string) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: any) => todo.id != id),
    })),
}))
