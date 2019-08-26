import guid from '../shared/utils/guid';
import {Socket} from 'socket.io';

export default class Session {
  guid: string;
  socket: Socket;
  username: string;

  constructor(socket: Socket) {
    this.socket = socket;
    this.guid = guid();
  }
}
