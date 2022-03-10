import { Router } from 'express'
import { createGroup } from './components/database'

const groupsRouter = Router()

groupsRouter.post('/add', (req, res) => {
  const { name } = req.body
  createGroup(name)
    .then((group) => {
      res.json(group)
    })
    .catch((reason) => {
      res.json({
        reason,
      })
    })
})

export { groupsRouter }
