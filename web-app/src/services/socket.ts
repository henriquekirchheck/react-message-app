import { io } from 'socket.io-client'

const socket = io('ws://localhost:8000', { autoConnect: false })

export { socket }