export const fourthTask = {
  map: {},
  set(key, value){
    fourthTask.map[key] = value;
  },
  get(key) {
    if (Object.keys(fourthTask.map).includes(`${key}`) === false) return undefined;
    else return fourthTask.map[key];
  },
  has(key) {
    return Object.keys(fourthTask.map).includes(`${key}`);
  },
  delete(key){
    delete fourthTask.map[key];
  },
  clear() {
    for (let keys in this.map) {
      delete fourthTask.map[keys];
    }
  },
  size() {
    return Object.keys(fourthTask.map).length;
  },
  keys(){
    return Object.keys(fourthTask.map);
  },
  values() {
    return Object.values(fourthTask.map);
  },
  entries() {
    return Object.entries(fourthTask.map);
  }
}
