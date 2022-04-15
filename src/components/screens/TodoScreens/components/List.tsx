import React from 'react'
import { todoStore } from '../../../../../store/todoStore'
import { Todo } from '../../../../../types/Todo'

export const List = () => {
  const { todos } = todoStore()
  return (
    <div>
      {todos.map((e: any) => {
        return (
          <div key={e.id}>
            <div>{e.text}</div>
            <div>{e.completed! ? '完了' : '未完了'}</div>
            <button>削除</button>
          </div>
        )
      })}
    </div>
  )
}
