import React from 'react'
import { todoStore } from '../../../../../store/todoStore'

export const List = () => {
  const { todos, removeTodo } = todoStore((state) => state)
  return (
    <div>
      {todos.map((e: any) => {
        return (
          <div key={e.id}>
            <div>{e.text}</div>
            <div>{e.completed! ? '完了' : '未完了'}</div>
            <button onClick={() => removeTodo(e.id)}>削除</button>
          </div>
        )
      })}
    </div>
  )
}
