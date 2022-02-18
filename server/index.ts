import { httpServer } from './server'

const port = 8000

httpServer.listen(port, () => console.log(`Server Listening on port: ${port}`))