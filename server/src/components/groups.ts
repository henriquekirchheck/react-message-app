import { Router } from 'express'
import { createGroup, deleteGroup, getGroups } from './database'

const groupsRouter = Router()

groupsRouter.get('/', (req, res) => {
  const { name, id } = req.body
  getGroups(name, id)
    .then((groups) => {
      res.json(groups)
    })
    .catch((reason) => {
      res.status(400)
      res.json(reason)
    })
})

groupsRouter.post('/add', (req, res) => {
  const { name } = req.body
  createGroup(name)
    .then((group) => {
      res.json(group)
    })
    .catch((reason) => {
      res.status(400)
      res.json({
        reason,
      })
    })
})

groupsRouter.delete('/delete', (req, res) => {
  const { id } = req.body
  deleteGroup(id)
    .then((group) => {
      res.json(group)
    })
    .catch((reason) => {
      res.status(400)
      res.json(reason)
    })
})

export { groupsRouter }
