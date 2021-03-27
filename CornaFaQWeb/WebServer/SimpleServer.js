const http = require('http')
const hostname = '192.168.179.22'
const port = 3003
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<!DOCTYPE html><html><head></head><body><h1>Mensch super das geht!</h1></body></html>')
})

server.listen(port, hostname, () => {
  console.log('Server laeuft unter http://' + hostname + ':' + port)
})
