import app from './express'
import http from 'http'

let server = http.createServer(app);
let port = 3000
server.listen(port, () => console.log("---------->server listen port " + port))