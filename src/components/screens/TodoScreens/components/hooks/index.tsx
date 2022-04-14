import { ChangeEvent, useState } from 'react'

export const useTodoScreenState = () => {
  const [name, setName] = useState('')

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return {
    name,
    onChangeForm,
  }
}
