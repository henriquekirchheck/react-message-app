import { Signup } from './components/Authentication'
import AppStyles from './style/App.module.css'

export function App() {
  return (
    <div className={`App ${AppStyles.appGlobal}`}>
      <Signup />
    </div>
  )
}
