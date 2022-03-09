import { httpServer } from './src/server'
import { port, hostname, argv } from './src/parseArguments'
import { help } from './src/help'

argv?.help
  ? help()
  : httpServer.listen(port, hostname, () => {
    console.log(`Server Listening on http://${hostname}:${port}/`)
  })
