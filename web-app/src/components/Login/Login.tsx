import { ChangeEvent, FormEvent, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export function Login() {
  const [name, setName] = useState('')
  const [image, setImage] = useState<File | undefined>(undefined)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0])
    },
  })

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
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the file here ...</p>
          ) : (
            <p>Drag 'n' drop a file here, or click to select a file</p>
          )}
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  )
}
