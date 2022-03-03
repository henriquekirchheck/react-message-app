import { FormEvent, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import LoginStyles from './style.module.css'

export function Login() {
  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<File | undefined>(undefined)
  const [preview, setPreview] = useState<string>('')

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: 'image/*',
      multiple: false,
      onDrop: (acceptedFiles) => {
        URL.revokeObjectURL(preview)
        setImage(acceptedFiles[0])
        setPreview(URL.createObjectURL(acceptedFiles[0]))
      },
    })

  const dropzoneStyle = useMemo(() => {
    return `
    ${LoginStyles.imageInput} 
    ${isDragAccept && LoginStyles.imageAccept} 
    ${isDragReject && LoginStyles.imageReject}
    ${isDragReject && LoginStyles.errorAnimation}
    `
  }, [isDragAccept, isDragReject])

  function dropzoneText() {
    if (isDragAccept) {
      return <p>Drop the image here ...</p>
    } else if (isDragReject) {
      return <p>File type is not an image</p>
    } else {
      return <p>Drag 'n' drop a image here, or click to select a image</p>
    }
  }

  function thumbnail() {
    if (!image) return

    const getHumanReadableSize = () => {
      if (image.size < 1024) {
        return `${image.size} B`
      } else if (image.size < 1024**2) {
        return `${Math.round(image.size / 1024)} KB`
      } else if (image.size < 1024**3) {
        return `${Math.round(image.size / 1024**2)} MB`
      } else if (image.size > 1024**3) {
        return `${Math.round(image.size / 1024**3)} GB`
      }
    }

    return (
      <div className={LoginStyles.imagePreview}>
        <img src={preview} alt={image.name} className={LoginStyles.previewImage}/>
        <div className={LoginStyles.imageInfo}>
          <p className={LoginStyles.info}><strong>Name:</strong> {image.name}</p>
          <p className={LoginStyles.info}><strong>Size:</strong> {getHumanReadableSize()}</p>
        </div>
      </div>
    )
  }

  function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (!name.trim()) return
    URL.revokeObjectURL(preview)

    console.log(name, image)
  }

  return (
    <div className={LoginStyles.loginBox}>
      <form action="" onSubmit={handleLogin} className={LoginStyles.loginForm}>
        <h1 className={LoginStyles.title}>Login to continue</h1>
        <input
          type="text"
          autoComplete="off"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Put your name here"
          className={LoginStyles.nameInput}
        />
        <div {...getRootProps()} className={dropzoneStyle}>
          <input {...getInputProps()} />
          {image ? thumbnail() : dropzoneText()}
        </div>
        <button type="submit" className={LoginStyles.submitButton}>
          Login
        </button>
      </form>
    </div>
  )
}
