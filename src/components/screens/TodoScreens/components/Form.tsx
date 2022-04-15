import { ChangeEvent, useState } from 'react'
import { Button } from './ Button'

export const Form = () => {
  const [text, setText] = useState<string>('')

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <form>
        <input placeholder="タスク名" value={text} onChange={onChangeForm} />
      </form>
      <Button text={text} />
    </div>
  )
}
