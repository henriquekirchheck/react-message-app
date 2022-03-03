// import { Chat } from './components/Chat/Chat'
import { Login } from './components/Login/Login'
import AppStyles from './App.module.css'

export function App() {
  return (
    <div className={`App ${AppStyles.darkTheme} ${AppStyles.appGlobal}`}>
      <Login></Login>
      {/* <Chat></Chat> */}
    </div>
  )
}
