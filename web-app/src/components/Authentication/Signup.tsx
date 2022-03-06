import { FormEvent, useState } from 'react'
import AuthStyles from './style.module.css'
import { useAuth } from '../../hooks/useAuth'

export function Signup() {
  const { signUp } = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    setError(null)

    if (password !== confirmPassword)
      return setError('The passwords doesn\'t match')

    try {
      setLoading(true)
      setError(null)
      signUp(email, password)
    } catch {
      setError('Failed to Create Account')
    }
    setLoading(false)
  }

  return (
    <div className={AuthStyles.authBox}>
      <form action="" onSubmit={handleLogin} className={AuthStyles.authForm}>
        <h1 className={AuthStyles.title}>Sign Up to continue</h1>
        {error && <div className={AuthStyles.errorAlert}>{error}</div>}
        <div className={AuthStyles.inputFields}>
          <input
            type="email"
            autoComplete="on"
            required={true}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Email: email@example.com"
            className={AuthStyles.input}
          />
          <input
            type="password"
            autoComplete="new-password"
            required={true}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Password"
            className={`${AuthStyles.input} ${error ? AuthStyles.error : ''}`}
            minLength={8}
          />
          <input
            type="password"
            autoComplete="new-password"
            required={true}
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
            className={`${AuthStyles.input} ${error ? AuthStyles.error : ''}`}
            minLength={8}
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className={AuthStyles.submitButton}
        >
          Create Account
        </button>
      </form>
      <div className={AuthStyles.extraOption}>
        Already have a account? Login
      </div>
    </div>
  )
}
