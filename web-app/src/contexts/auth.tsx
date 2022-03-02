import { createContext, ReactNode, useState } from 'react'

type User = {
  id: string
  name: string
  avatar_url: string
}

type AuthContextData = {
  user: User | null
  signOut: () => void
}

type AuthProvider = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider(props: AuthProvider) {
  const [ user, setUser ] = useState<User | null>(null)

  function signOut() {
    setUser(null)
    localStorage.removeItem('@react-message:user')
  }

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}