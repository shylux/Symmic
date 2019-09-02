// import {RULE_SETS} from "./game_types/rulesets";
import Player from '../shared/player';
import Lobby from '../shared/lobby';
import Session from './session';
import {Server, Socket} from 'socket.io';
// import Game from "./game";

// server side
export default class GameServer {
  sessions: Session[];
  lobbys: Lobby[];
  io: Server;

  constructor(server: Server) {
    this.io = server;
    this.lobbys = [new Lobby('Server Game', 'chess', [new Player('root')])];
    this.sessions = [];

    this.io.on('connection', (socket: Socket) => {
      this.connect(socket);
    });
  }

  connect(socket: Socket) {
    const session = new Session(socket);
    this.sessions.push(session);

    console.log('Client connected!');
    socket.emit('list-games', this.lobbys);

    socket.on('login', (username: string) => {
      session.username = username;
      console.log(username + ' logged in');
      // TODO: authenticate user
      socket.emit('login', username);
    });
  }
}

