import { Router } from 'express'
import { createGroup, getGroups } from './components/database'

const groupsRouter = Router()

groupsRouter.get('/', (req, res) => {
  const {name, id} = req.body
  getGroups(name, id)
    .then((groups) => {
      res.json(groups)
    })
    .catch((reason) => {
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
      res.json({
        reason,
      })
    })
})


export { groupsRouter }
