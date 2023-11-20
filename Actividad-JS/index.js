console.log(undefined == null)
console.log(NaN == NaN)
console.log(null == false)
console.log(0 == false)
console.log("" == false)

console.log([1, 2, 3] + [4, 5, 6])
console.log(!![])
console.log([] == true)
console.log([10,1,3].sort())
console.log([] == 0)

function f1(x) {
    var baz = 3;
    return function (y) {
        console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11);

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
console.log(greatestNumber([1,2,3,4,5,6,7,8,9,10]));

function containsX(string) {
    foundX = false;
    for(let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
       foundX = true;
       }
    }
    return foundX;
}
console.log(containsX("Hello World"));
console.log(containsX("Hello WorldX"));

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
console.log(findFirstNotDuplicate("HHello World"));
