function isValid(username, password) {
    if (
        password.length < 8 ||
        password.indexOf(" ") !== -1 ||
        password.indexOf(username) !== -1
    ) {
        return false;
    }
    return true;
}

console.log(isValid("Eva", "Istanbul1987"));

function average(nums) {
    let ave = 0;
    for (let num of nums) {
        ave += num;
    }
    return ave / nums.length;
}

console.log(average([1, 2, 4, 6]));

function isPangram(str) {
    let lowerCased = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let char of alphabet) {
        if (lowerCased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("the quick brown fox jumps over  the lazy dog"));

function pick(arr) {
    //return random element for array
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ];

    const suits = ["clubs", "spades", "hearts", "diamonds"];
    return {
        suit: pick(suits),
        value: pick(values),
    };
}

function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

const triple = multiplyBy(3);

console.log(triple(5));

function makeBetween(x, y){
    return function(num) {
      return num >= x && num <=y;
    }
  }
  
  const result = makeBetween(0, 18);
  console.log(result(5));