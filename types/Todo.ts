export type Todo = {
  todos: string[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}
