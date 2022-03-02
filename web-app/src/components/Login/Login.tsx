import { FormEvent, useState } from 'react'

export function Login() {
  const [name, setName] = useState('')
  const [image, setImage] = useState()

  function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (!name.trim()) return
    if (!image) return

    console.log(name, image)
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
        <input
          type="file"
          // TODO: Fix type of event
          onChange={(event) => setImage(event.target.files[0])}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
