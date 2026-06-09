const { PeerServer } = require('peer')
const PORT = process.env.PORT || 9000
const server = PeerServer({
  port: PORT,
  path:  '/',
  allow_discovery: false,
  corsOptions: {
    origin: ['https://volleytrack.app', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
server.on('connection', client => console.log(`[+] Connected: ${client.getId()}`))
server.on('disconnect', client => console.log(`[-] Disconnected: ${client.getId()}`))
console.log(`PeerJS server running on port ${PORT}`)
