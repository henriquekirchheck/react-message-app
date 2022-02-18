import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import ChatStyles from './style.module.css'

const socket = io('ws://localhost:8000')
const messageList: string[] = []
socket.on('message', (message: string) => {
  messageList.push(message)
  console.log(message)
})

export function Messages() {
  const [messages, setMessages] = useState<string[]>([])
  
  useEffect(() => {
    setMessages(messageList)
  }, [])

  return (
    <ul className={ChatStyles.messages}>
      {messages?.map((message, index) => {
        return <li key={index}>{message}</li>
      })}
    </ul>
  )
}
