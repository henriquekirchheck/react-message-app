import { Messages } from './Messages'
import { SendMessage } from './SendMessage'
import ChatStyles from './style.module.css'




export function Chat() {
  
  return (
    <div className={ChatStyles.chat}>
      <Messages/>
      <SendMessage/>
    </div>
  )
}
