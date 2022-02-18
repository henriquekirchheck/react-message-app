import { useState } from 'react'
import { io } from 'socket.io-client'
import ChatStyles from './style.module.css'

const socket = io('ws://localhost:8000')

export function Messages() {

  const [messages, setMessages] = useState<string[]>([])
  socket.on('message', (message: string) => {
    setMessages([ ...messages, message])
  })

  return (
    <ul className={ChatStyles.messages}>
      {messages.map((message, index) => {
        return <li key={index}>{message}</li>
      })}
    </ul>
  )
}
