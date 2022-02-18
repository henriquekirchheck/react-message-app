import { io } from 'socket.io-client'

const webSocket = io('ws://localhost:8000')

export { webSocket }