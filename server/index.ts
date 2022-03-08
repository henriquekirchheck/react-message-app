import { httpServer } from './server'
import { port, hostname, argv, help } from './parseArguments'

argv?.help
  ? help()
  : httpServer.listen(port, hostname, () => {
    console.log(`Server Listening on http://${hostname}:${port}/`)
  })
