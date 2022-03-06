import { Login, Signup } from './components/Authentication'
import { Home } from './components/Home'
import AppStyles from './style/App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'
import { Chat } from './components/Chat'

export function App() {
  return (
    <div className={`App ${AppStyles.appGlobal}`}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="chat" element={<Chat />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}
