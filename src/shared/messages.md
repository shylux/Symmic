# Socket Messages
All message types that are sent over the websocket.

## `Client` to `Server`

### Anonymous
 * login: {'username': string} (Password verification will be added later)


## `Server` ot `Client`

### Anonymous
 * list-games: Lobby[]
 
### Logged In
* setup-game: tbd

### In Game
* game-action: tbd
