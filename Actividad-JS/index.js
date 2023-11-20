console.log(undefined == null) //true
console.log(NaN == NaN) //false
console.log(null == false) //false
console.log(0 == false) //true
console.log("" == false) //true

console.log([1, 2, 3] + [4, 5, 6]) //1,2,34,5,6
console.log(!![]) //true
console.log([] == true) //false
console.log([10,1,3].sort()) //1,10,3
console.log([] == 0) //true

function f1(x) {
    var baz = 3;
    return function (y) {
        console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11); //19
bar(11); //20

function greatestNumber(array) {
    for (let i of array) {
      let isIValTheGreatest = true;
      for (let j of array) {
        if (j > i) {
          isIValTheGreatest = false;
        }
      }
      if (isIValTheGreatest) {
        return i;
      }
    }
}
console.log(greatestNumber([1,2,3,4,5,6,7,8,9,10])); //10

function containsX(string) {
    foundX = false;
    for(let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
       foundX = true;
       }
    }
    return foundX;
}
console.log(containsX("Hello World")); //false
console.log(containsX("Hello WorldX")); //true

function findFirstNotDuplicate(word) {
    let hash = {};
    for (let i = 0; i < word.length; i++) {
      if (hash[word[i]]) {
        hash[word[i]]++;
      } else {
        hash[word[i]] = 1;
      }
    }
    for (let i = 0; i < word.length; i++) {
      if (hash[word[i]] === 1) {
        return word[i];
      }
    }
}
console.log(findFirstNotDuplicate("HHello World")); //e

class Pokemon {
    constructor(hp, attack, defense) {
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.movement = "";
      this.level = 1;
      this.type = "";
    }
    fight(){
      if(this.move == ""){
        throw "No move selected";
      }
    }
    canFly(){
      if(this.type == ""){
        throw "No type selected";
      }
      if(this.type == "Flying"){
        return true;
      }
      return false;
    }
}

class Charizard extends Pokemon {
  constructor(hp, attack, defense,movement) {
    super(hp, attack, defense);
    this.move = "Shoot";
    this.type = "Flying";
  }
  fight(){
    if(this.move == ""){
      throw "No move selected";
    }
    return "Charizard used " + this.move;
  }
}
let charizard = new Charizard(100, 50, 30);
console.log(charizard.fight()); //Charizard used Shoot
