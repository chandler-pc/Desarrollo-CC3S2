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
      if(this.movement == ""){
        throw "No movement selected";
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
    this.movement = "Shoot";
    this.type = "Flying";
  }
  fight(){
    if(this.movement == ""){
      throw "No move selected";
    }
    return "Charizard used " + this.movement;
  }
}
let charizard = new Charizard(100, 50, 30);
console.log(charizard.fight());