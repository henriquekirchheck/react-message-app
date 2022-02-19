import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: { origin: '*' },
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('message', (message) => {
    console.log(message)
    io.emit('message', message)
  })
})

export { httpServer, io }
