import { FormEvent, useState } from 'react'
import AuthStyles from './style.module.css'

export function Signup() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (!email.trim()) return
    if (!password.trim()) return
    if (!confirmPassword.trim()) return
    if (password !== confirmPassword) return

    console.log(email, password)
  }

  return (
    <div className={AuthStyles.authBox}>
      <form
        action=""
        onSubmit={handleLogin}
        className={AuthStyles.authForm}
      >
        <h1 className={AuthStyles.title}>Sign Up to continue</h1>
        <div className={AuthStyles.inputFields}>
          <input
            type="text"
            autoComplete="off"
            required={true}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Email: email@example.com"
            className={AuthStyles.input}
          />
          <input
            type="text"
            autoComplete="off"
            required={true}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Password"
            className={AuthStyles.input}
          />
          <input
            type="text"
            autoComplete="off"
            required={true}
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
            className={AuthStyles.input}
          />
        </div>
        <button type="submit" className={AuthStyles.submitButton}>
          Create Account
        </button>
      </form>
      <div className={AuthStyles.extraOption}>
        Already have a account? Login
      </div>
    </div>
  )
}
