import { ChangeEvent, FormEvent, useState } from 'react'

export function Login() {
  const [name, setName] = useState('')
  const [image, setImage] = useState<File | undefined>(undefined)

  function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (!name.trim()) return

    console.log(name, image)
  }

  return (
    <>
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
          accept="image/*"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setImage(event.target.files?.[0])}
        />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
