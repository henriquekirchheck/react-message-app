import { createContext, ReactNode, useState } from 'react'

type User = {
  id: string
  name: string
  avatar_url: string
}

type AuthContextData = {
  user: User | undefined
}

type AuthProvider = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider(props: AuthProvider) {
  const [ user, setUser ] = useState<User | undefined>(undefined)


  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}