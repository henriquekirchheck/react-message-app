import { httpServer } from './server'

const port = 8000
const hostname = 'localhost'

httpServer.listen(port, hostname, () => console.log(`Server Listening on port: ${port}`))