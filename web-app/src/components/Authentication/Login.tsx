import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import AuthStyles from './style.module.css'

export function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)


  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    setError(null)

    try {
      setLoading(true)
      setError(null)
      await login(email, password)
      navigate('/chat', {replace: true})
    } catch {
      setError('Failed to Login')
    }
    setLoading(false)
  }

  return (
    <div className={AuthStyles.authBox}>
      <form action="" onSubmit={handleLogin} className={AuthStyles.authForm}>
        <h1 className={AuthStyles.title}>Login to continue</h1>
        {error && <div className={AuthStyles.errorAlert}>{error}</div>}
        <div className={AuthStyles.inputFields}>
          <input
            type="email"
            autoComplete="on"
            required={true}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Put your Email here"
            className={`${AuthStyles.input} ${error ? `${AuthStyles.error} ${AuthStyles.errorAnimation}` : ''}`}
          />
          <input
            type="password"
            autoComplete="current-password"
            required={true}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Put your Password here"
            className={`${AuthStyles.input} ${error ? `${AuthStyles.error} ${AuthStyles.errorAnimation}` : ''}`}
            minLength={8}
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className={AuthStyles.submitButton}
        >
          Login
        </button>
      </form>
      <div className={AuthStyles.extraOption}>
        Don't have a account?{' '}
        <Link to="/signup" className={AuthStyles.link}>
          Sign Up
        </Link>
      </div>
    </div>
  )
}
