import Serializable from './serializable';

export default class Player extends Serializable {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
