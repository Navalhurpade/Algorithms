let ArrayExercise = require('./ArrayExersise');

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  
  set(key, value) {
    // let hashedKey = this._hash(key);
    // // console.log("SET", this.data, hashedKey, key);
    // let keyIndex = this.data.findIndex(item => {
    //   if (item)
    //     return item[0] === hashedKey;
    // });
    // if (keyIndex !== -1) {
    //   this.data[keyIndex][1] = value;
    // } else {
    //   this.data.push([hashedKey, value]);
    // }
    
    let hashedIndex = this._hash(key);
    if (this.data[hashedIndex]) {
      console.log("Item already exists ", key);
    }
    this.data[hashedIndex] = [key, value];
  }
  
  get(key) {
    // let hashedKey = this._hash(key);
    // // console.log("GET", this.data,hashedKey,key);
    // return (this.data.find(item => {
    //   if (item) {
    //     return item[0] === hashedKey;
    //   }
    // }))[1];
    let hashedIndex = this._hash(key);
    return this.data[hashedIndex][1];
  }
  
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // hash = (hash + key.charCodeAt(i) * i);
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

//
// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 9);
// myHashTable.set('apples', 10);
// myHashTable.set('orange', 435);
// console.log("found grapes", myHashTable.get('grapes'));
// console.log("found apples", myHashTable.get('apples'));
// console.log("found orange", myHashTable.get('orange'));
// console.log("apple", myHashTable._hash('grapes'));
// console.log("apple", myHashTable._hash('grapes'));
// console.log("apple", myHashTable._hash('grapes'));
// console.log("apple", myHashTable._hash('grapes'));


ArrayExercise();