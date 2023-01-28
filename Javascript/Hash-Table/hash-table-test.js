class HashTable {
    constructor() {
      this.table = {};
    }
    set(key, value) {
      this.table[key] = value;
    }
    get(key) {
      return this.table[key];
    }
    remove(key) {
      delete this.table[key];
    }
    display() {
      for (let key in this.table) {
        console.log(`${key} : ${this.table[key]}`);
      }
    }
}
let myHashTable = new HashTable();
myHashTable.set('one', 1);
myHashTable.set('two', 2);
myHashTable.set('three', 3);
myHashTable.display();