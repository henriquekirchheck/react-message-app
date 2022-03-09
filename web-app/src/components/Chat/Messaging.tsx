import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { socket } from '../../services/socket'
import MessagingStyles from './style.module.css'

export function Messaging() {
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<string[]>([])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!message.trim()) return

    socket.emit('message:create', message)
    setMessages([...messages, message])
    setMessage('')
  }

  useEffect(() => {
    const messagesAdd = (message: string) => {
      setMessages([...messages, message])
    }
    socket.on('message:read', messagesAdd)

    return () => {
      socket.off('message:read', messagesAdd)
    }
  }, [messages])

  return (
    <div className={MessagingStyles.page}>
      <ul className={MessagingStyles.messageList}>
        {messages.map((message, index) => {
          return (
            <li key={index} className={MessagingStyles.messages}>
              {message}
            </li>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit} className={MessagingStyles.form}>
        <input
          type="text"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          autoComplete="off"
          className={MessagingStyles.inputForm}
        />
        <button type="submit" className={MessagingStyles.buttonForm}>
          Send
        </button>
      </form>
    </div>
  )
}
