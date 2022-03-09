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

export { help }
