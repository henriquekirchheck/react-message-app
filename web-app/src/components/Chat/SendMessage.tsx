import { FormEvent, useState } from 'react'
import { io } from 'socket.io-client'
import ChatStyles from './style.module.css'

const socket = io('ws://localhost:8000')

export function SendMessage() {
  const [message, setMessage] = useState('')  

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault()

    if (!message.trim()) return

    await socket.emit('message', message.trim())
    setMessage('')
  }

  return (
    <form action="" className={ChatStyles.form} onSubmit={handleSendMessage}>
      <input
        type="text"
        className={ChatStyles.input}
        autoComplete="off"
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <button type="submit">Send</button>
    </form>
  )
}
