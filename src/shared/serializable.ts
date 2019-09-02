
export default abstract class Serializable {
  // converts basic javascript object to a class
  static load<T extends Serializable>(data: Partial<T>): T {
    const obj: T = Object.create(this.prototype);
    Object.assign(obj, data);
    obj.loadChildren();
    return obj;
  }

  static loadAll<T extends Serializable>(dataArray: Array<Partial<T>>): Array<T> {
    const result = Array<T>();
    for (const data of dataArray) {
      result.push(this.load(data));
    }
    return result;
  }

  loadChildren(): void {}

}
