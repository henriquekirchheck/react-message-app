import { Router } from 'express'
import { getUsers } from './database'


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