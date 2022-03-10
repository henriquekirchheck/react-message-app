import cors from 'cors'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { groupsRouter } from './components/groups'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/groups', groupsRouter)

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: { origin: '*' },
})

io.on('connection', (socket) => {
  console.log(`Socket Connected: ${socket.id}`)

  socket.on('disconnect', () => {
    console.log(`Socket Disconnected: ${socket.id}`)
  })

  socket.on('message:create', (message) => {
    console.log(message)
    socket.broadcast.emit('message:read', message)
  })
})

export { httpServer, io }
