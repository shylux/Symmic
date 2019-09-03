import Serializable from './serializable';
import Lobby from './lobby';

export default abstract class Ruleset extends Serializable {
  static gamename: string;
  playerCount: number;

  // checks if a lobby is ready to start the game
  // this checks currently if there are enough players
  // it can support ready checks and manual startable games in the future
  abstract isStartable(lobby: Lobby): boolean;
}

class ChessRuleset extends Ruleset {
  gamename = 'Chess';
  playerCount = 2;

  isStartable(lobby: Lobby): boolean {
    return lobby.players.length === 2;
  }

}
