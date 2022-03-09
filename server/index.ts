import { httpServer } from './src/server'
import { port, hostname, argv, help } from './src/parseArguments'

argv?.help
  ? help()
  : httpServer.listen(port, hostname, () => {
    console.log(`Server Listening on http://${hostname}:${port}/`)
  })
