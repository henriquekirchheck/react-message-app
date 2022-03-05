import { FormEvent, useState } from 'react'
import LoginStyles from './style.module.css'

export function Login() {
  const [email, setEmail] = useState<string>('')

  function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (!email.trim()) return

    console.log(email)
  }

  return (
    <div className={LoginStyles.loginBox}>
      <form action="" onSubmit={handleLogin} className={LoginStyles.loginForm}>
        <h1 className={LoginStyles.title}>Login to continue</h1>
        <div className={LoginStyles.inputFields}>
          <input
            type="text"
            autoComplete="off"
            required={true}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Put your Email here"
            className={LoginStyles.input}
          />
          <input
            type="text"
            autoComplete="off"
            required={true}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Put your Password here"
            className={LoginStyles.input}
          />
        </div>
        <button type="submit" className={LoginStyles.submitButton}>
          Login
        </button>
      </form>
    </div>
  )
}
