import { FormEvent, useState } from 'react'
import AuthStyles from './style.module.css'

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (!email.trim()) return
    if (!password.trim()) return

    console.log(email)
  }

  return (
    <div className={AuthStyles.authBox}>
      <form action="" onSubmit={handleLogin} className={AuthStyles.authForm}>
        <h1 className={AuthStyles.title}>Login to continue</h1>
        <div className={AuthStyles.inputFields}>
          <input
            type="text"
            autoComplete="on"
            required={true}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Put your Email here"
            className={AuthStyles.input}
          />
          <input
            type="password"
            autoComplete="current-password"
            required={true}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Put your Password here"
            className={AuthStyles.input}
            minLength={8}
          />
        </div>
        <button type="submit" className={AuthStyles.submitButton}>
          Login
        </button>
      </form>
      <div className={AuthStyles.extraOption}>
        Don't have a account? Sign Up
      </div>
    </div>
  )
}
