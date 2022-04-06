//Javascript String Get word middle character

//If the word's length is odd, return the middle character.
//If the word's length is even, return the middle 2 characters.

//Examples:
//getMiddle("test") should return "es"
//getMiddle("testing") should return "t"
//getMiddle("middle") should return "dd"
//getMiddle("A") should return "A"

function getMiddle(s) {
    let i = Math.floor(s.length / 2);
    let result = s[i];
    if (s.length % 2 === 0 && i > 0) {
        result = s[i - 1] + result;
    }
    return result;
}

//In this kata you will create a function that takes a list of
//non-negative integers and strings
//and returns a new list with the strings filtered out.

//Examples:
//filter_list([1,2,'a','b']) == [1,2]
//filter_list([1,'a','b',0,15]) == [1,0,15]
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    return l.filter((c) => typeof c === "number");
}

//ATM machines allow 4 or 6 digit PIN codes
//and PIN codes cannot contain anything
//but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string,
//return true, else return false.

//Examples:
//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false

function validatePIN(pin) {
    if ((pin.length === 4 || pin.length === 6) && Number.isInteger(+pin)) {
        return true;
    } else {
        return false;
    }
}

//Ben has a very simple idea to make some profit:
//he buys something and sells it again.
//Of course, this wouldn't give him any profit at all if he was simply to buy
//and sell it at the same price.
//Instead, he's going to buy it for the lowest possible price
//and sell it at the highest.

//Task
//Write a function that returns both the minimum and
//maximum number of the given list/array.

//Examples

//minMax([1,2,3,4,5])   == [1,5]
//minMax([2334454,5])   == [5, 2334454]
//minMax([1])           == [1, 1]

function minMax(arr) {
    let returnArr = [];
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    returnArr.push(min);
    returnArr.push(max);

    return returnArr;
}

//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

//Examples
//[7] should return 7, because it occurs 1 time (which is odd).
//[0] should return 0, because it occurs 1 time (which is odd).
//[1,1,2] should return 2, because it occurs 1 time (which is odd).
//[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    var count = 0;
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length; j++) {
            if (A[i] == A[j]) {
                count++;
            }
        }
        if (count % 2 != 0) {
            return A[i];
        }
    }
}
//another implementation
function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        if (A.filter((el) => el === A[i]).length % 2 != 0) {
            return A[i];
        }
    }
}

console.log(findOdd([1, 3, 1, 3, 1]));

function findUniq(arr) {
    let strayEl = arr[0];
    if (strayEl !== arr[1] && strayEl !== arr[2]) {
        return strayEl;
    }
    for (let i = 0; i < arr.length; i++) {
        if (strayEl !== arr[i]) {
            return arr[i];
        }
    }
}

//There is an array with some numbers.
//All numbers are equal except for one. Try to find it!

//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr) {
    let strayEl = arr[0];
    if (strayEl !== arr[1] && strayEl !== arr[2]) {
        return strayEl;
    }
    for (let i = 0; i < arr.length; i++) {
        if (strayEl !== arr[i]) {
            return arr[i];
        }
    }
}

//Task
//In this simple Kata your task is to create
// a function that turns a string into a Mexican Wave.
//You will be passed a string and you must return
//that string in an array where an uppercase letter is a person standing up.

//Rules
//1.  The input string will always be lower case but maybe empty.
//2.  If the character in the string is whitespace then pass over it as
//if it was an empty seat

//Example
//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
    let mexicanWave = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (str[i] === " ") {
            continue;
        } else {
            mexicanWave.push(
                str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1)
            );
        }
    }
    return mexicanWave;
}

//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                   
    return vowelsCount;
}

//The main idea is to count all the occurring characters in a string.
//If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.

function count(str) {
    const result = {};
    for (const char of str) {
        if (result.hasOwnProperty(char)) {
            result[char] += 1;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

//Write a function that takes an array of strings
//as an argument and returns a sorted array containing the same strings,
//ordered from shortest to longest.

//For example, if this array were passed as an argument:
//["Telescopes", "Glasses", "Eyes", "Monocles"]

//Your function would return the following array:

//["Eyes", "Glasses", "Monocles", "Telescopes"]

//All of the strings in the array passed to your function will be different lengths,
//so you will not have to decide how to order multiple strings of the same length.

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

function print (nums) {
    for (let i = 1;  i < nums.lenght; i++;) {
    console.log(nums[i])
    if (nums[i] % 3 === 0 && nums[i] % 5 === 0){
      console.log("FizzBuzz");
    }
    if (nums[i] % 3 === 0){
      console.log("Fizz");
    if (nums[i] % 5 === 0){
      console.log("Buzz");
    else {console.log(nums[i]);}
  })
  }
  
  
   console.log(print([1,2,3,4,5,6,7,8,9,10]));
