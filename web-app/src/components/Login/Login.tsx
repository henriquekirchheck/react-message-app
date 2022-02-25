import { FormEvent, useState } from 'react'

export function Login() {
  const [ name, setName ] = useState('')

  function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (!name.trim()) return


    setName('')
  }

  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          autoComplete="off"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Put your name here"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
