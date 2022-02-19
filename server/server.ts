import cors from 'cors'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

app.use(cors({ origin: '*' }))

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })

  socket.on('message', (message) => {
    socket.broadcast.emit('message', message)
  })
})

export { httpServer, io }
