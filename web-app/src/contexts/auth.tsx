import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { auth } from '../services/firebase'

type AuthContextData = {
  user: User | null
  signUp: (email: string, password: string) => void
}

type AuthProvider = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))

    return unsubscribe
  }, [])

  const value: AuthContextData = {
    user: user,
    signUp,
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
