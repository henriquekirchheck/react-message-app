import minimist, { ParsedArgs } from 'minimist'

const argv: ParsedArgs = minimist(process.argv.slice(2))

const port = argv?.port || argv?.p || 8000
const hostname = argv?.hostname || argv?.h || 'localhost'

export { port, hostname, argv }