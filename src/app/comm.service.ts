import { Injectable } from '@angular/core';
import Lobby from '../shared/lobby';
import {BehaviorSubject, Observable} from 'rxjs';
import * as socketIo from 'socket.io-client';
import Player from '../shared/player';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  private socket: SocketIOClient.Socket;

  // This will be set when the user is logged in
  public username: string;

  private lobbysSubject: BehaviorSubject<Lobby[]> = new BehaviorSubject<Lobby[]>([]);
  public readonly lobbys: Observable<Lobby[]> = this.lobbysSubject.asObservable();

  constructor() {

    console.log('Connectiong to: :3000');
    this.socket = socketIo(':3000');

    this.socket.on('connect', (message) => {
      console.log('Connected to game server!');
    });

    this.socket.on('list-games', (data) => {
      this.lobbysSubject.next(Lobby.loadAll(data));
    });

    this.socket.on('login', (data) => {
      this.username = data;
    });
  }

  login(username: string) {
    this.socket.emit('login', username);
  }
  logout() {
    delete this.username;
  }

}
