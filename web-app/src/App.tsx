import { Login, Signup } from './components/Authentication'
import { Home } from './components/Home'
import AppStyles from './style/App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Chat } from './components/Chat'
import { PrivateRoute } from './components/PrivateRoute'
import { useAuth } from './hooks/useAuth'

export function App() {
  const { user } = useAuth()

  return (
    <div className={`App ${AppStyles.appGlobal}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            element={<PrivateRoute redirectPath="/login" isAllowed={!!user} />}
          >
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
