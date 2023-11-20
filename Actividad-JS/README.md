# Preguntas Conceptuales

* En JavaScript, todas las operaciones de red son asíncronas ¿Porque es esto importante?  
Con esto podemos evitar que el hilo principal se bloquee y pueda seguir corriendo.  

* En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?  
Este paradigma es el asíncrono, ya que nos permite correr callbacks o promesas luego de completar una operación de red.  

* ¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?  
JavaScript proporciona soporte para la herencia a través del mecanismo de prototipos.  

* ¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?  
El DOM es una interfaz de programación para documentos web, jQuery es una biblioteca que nos ayuda a manipular el DOM usando JavaScript.  

# Booleano
Haciendo comparaciones entre los distintos tipos de "Falsy" obtenemos los siguientes resultados  
```js
console.log(undefined == null) //true
console.log(NaN == NaN) //false
console.log(null == false) //false
console.log(0 == false) //true
console.log("" == false) //true
```

# Arrays
Ahora las operaciones con arrays que estamos haciendo también son algo raras.  
```js
console.log([1, 2, 3] + [4, 5, 6]) //1,2,34,5,6
console.log(!![]) //true
console.log([] == true) //false
console.log([10,1,3].sort()) //1,10,3
console.log([] == 0) //true
```
En el primer caso la operación + convierte el array en una cadena, así que la operación que haría es `"1,2,3" + "4,5,6"`, así que las concatena.  
En el segundo caso como el array vacío [] es un objeto, este no es nulo así que es verdadero, entonces [] como booleano es verdadero, ![] es falso y si lo volvemos a negar nos queda true.  
En el tercer caso JavaScript trata de convertir el array vacio y el booleano a enteros, el array en entero equivale a 0 y el true a 1, por la tanto la comparación es falso.  
En el cuarto caso, el sort por defecto los va a ordenar por caracteres, haciendo que 1 y 10 esten primeros, ya que lexicograficamente ese es el orden.
Como en el tercer caso, JavaScript convierte el array vacio [] a 0 asi que como lo compara con otro 0, la comparación resulta en true.  

# Clausuras
```js
function f1(x) {
    var baz = 3;
    return function (y) {
        console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11); //19
bar(11) //20
```
La función `f1` es un ejemplo de clausura en JavaScript. Devuelve una nueva función que tiene acceso a las variables `x` y `baz` del ámbito de cierre de `f1`. Cuando se llama a `f1(5)`, se devuelve una función que recuerda los valores de `x` y `baz` en ese momento. Luego, cuando se llama a `bar(11)`, se suma `x`, `y` y `baz`, y se incrementa `baz`, así que si volvemos a llamar a `bar` como `baz` aumentó nos devolverá el valor anterior sumado en uno.

# Algoritmos
Aquí se explican algunos algoritmos.  
```js
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
```
En este algoritmo buscaremos el mayor valor en un array.  
```js
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
```
Este algoritmo nos sirve para verificar si en un string se encuentra el carácter `"X"`
```js
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
```
La función `findFirstNotDuplicate` busca el primer carácter en una cadena de texto que no se repite. Crea un objeto `hash` para contar las ocurrencias de cada carácter. Luego, recorre la cadena de texto de nuevo y devuelve el primer carácter que no se repite. La complejidad temporal de esta función es O(n), donde n es la longitud de la cadena de texto.

# Clases

```js
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
```

El código define dos clases, `Pokemon` y `Charizard`. `Charizard` es una subclase de `Pokemon` y hereda todas sus propiedades y métodos. `Pokemon` tiene un constructor y dos métodos, `fight` y `canFly`. `Charizard` tiene su propio constructor y sobrescribe el método `fight` de `Pokemon`. Se crea una nueva instancia de `Charizard` y se llama al método `fight`, que registra "Charizard used Shoot".