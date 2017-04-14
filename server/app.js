require('babel-register');
import app from './express'
import http from 'http'

let server = http.createServer(app);

server.listen(3000, () => console.log("---------->server listen port 3000"))