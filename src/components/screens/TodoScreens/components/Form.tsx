import { HtmlProps } from 'next/dist/shared/lib/html-context'
import { ChangeEvent, useState } from 'react'
import { useTodoScreenState } from './hooks'

export const Form = () => {
  const { name, onChangeForm } = useTodoScreenState()

  return (
    <div>
      <form>
        <input placeholder="タスク名" value={name} onChange={onChangeForm} />
      </form>
    </div>
  )
}
