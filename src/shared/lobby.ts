import Player from './player';
import guid from '../shared/utils/guid';
import Serializable from './serializable';

export default class Lobby extends Serializable {
  id: string;
  name: string;
  ruleset: string;
  created: Date;
  players: Player[];
  started: Date; // not set on lobby

  constructor(name: string, ruleset: string, players: Player[]) {
    super();
    this.id = guid();
    this.created = new Date();
    this.name = name;
    this.ruleset = ruleset;
    this.players = players;
  }
}
