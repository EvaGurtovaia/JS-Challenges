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
