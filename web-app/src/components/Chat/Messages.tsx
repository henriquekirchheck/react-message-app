import { useState } from 'react'
import { webSocket } from '../../services/webSocket'
import ChatStyles from './style.module.css'

export function Messages() {

  const [messages, setMessages] = useState<string[]>([])
  webSocket.on('message', (message: string) => {
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
