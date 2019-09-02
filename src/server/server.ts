import GameServer from './gameserver';

// import WebSocket from 'ws';

// import * as SocketIO from 'socket.io';
// import {createServer, Server} from 'http';
// const cors = require('cors');

const port = 3000;

const app = require('express')();
// app.use(cors());
// app.options('*', cors());

// const server = app.listen(port);
const http = require('http').createServer(app);
const io = require('socket.io')(http, {serveClient: false});

// const server: Server = createServer(app);
// import SocketIOServer = require('socket.io')(server, { serveClient: false });
// const io: SocketIO.Server = SocketIOServer(server);
// io.listen(port);
//

// const wss = new WebSocket.Server({ port });

const gameserver: GameServer = new GameServer(io);
http.listen(port, () => console.log('server started'));
