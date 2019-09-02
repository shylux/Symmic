import Player from './player';
import guid from '../shared/utils/guid';

export default class Lobby {
  id: string;
  name: string;
  ruleset: string;
  created: Date;
  players: Player[];
  started: Date; // not set on lobby

  constructor(name: string, ruleset: string, players: Player[]) {
    this.id = guid();
    this.created = new Date();
    this.name = name;
    this.ruleset = ruleset;
    this.players = players;
  }
}
