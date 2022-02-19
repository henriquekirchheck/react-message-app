import { httpServer } from './server'
import { port, hostname, argv, help } from './parseArguments'

argv?.h || argv?.help
  ? console.log(help())
  : httpServer.listen(port, hostname, () => {
    console.log(`Server Listening on http://${hostname}:${port}/`)
  })
