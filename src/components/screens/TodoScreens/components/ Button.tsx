import React from 'react'
import { todoStore } from '../../../../../store/todoStore'

type Props = {
  text: string
}

export const Button: React.VFC<Props> = (props) => {
  const { text } = props // メモメモ
  const { addTodo } = todoStore((state) => state)

  const onSubmit = () => {
    if (text === '') return

    addTodo(text)
  }
  return <button onClick={onSubmit}>作成</button>
}
