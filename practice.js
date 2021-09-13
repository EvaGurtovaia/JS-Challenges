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
