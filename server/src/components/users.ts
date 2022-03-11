import { Router } from 'express'
import { createUser, getUsers } from './database'

const usersRouter = Router()

usersRouter.get('/', (req, res) => {
  const { username, id } = req.body
  getUsers(username, id)
    .then((users) => {
      res.json(users)
    })
    .catch((reason) => {
      res.status(400)
      res.json(reason)
    })
})

usersRouter.post('/add', (req, res) => {
  const { username, avatar_url } = req.body
  createUser(username, avatar_url)
    .then((user) => {
      res.json(user)
    })
    .catch((reason) => {
      res.status(400) 
      res.json(reason)
    })
})

export { usersRouter }