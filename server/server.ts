import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: { origin: '*'}
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
