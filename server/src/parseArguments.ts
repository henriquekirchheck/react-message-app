import minimist, { ParsedArgs } from 'minimist'

const argv: ParsedArgs = minimist(process.argv.slice(2))

function help() {
  console.log(`
Usage:
  index.ts [options]

Options:
  --help                    Show this page
  -p, --port [port]         Change the port in which the server will be listening. Default: "8000"
  -h, --hostname [hostname] Change the hostname of the server. Default: "localhost"
  `)
}

const port = argv?.port || argv?.p || 8000
const hostname = argv?.hostname || argv?.h || 'localhost'

export { port, hostname, argv, help }