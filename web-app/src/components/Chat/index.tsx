import { socket } from '../../services/socket'
import { Messaging } from './Messaging'

export function Chat() {
  socket.connect()

  return (
    <>
      <Messaging />
    </>
  )
}