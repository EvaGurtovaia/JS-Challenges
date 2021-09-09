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
