function print() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

print();

//Filter out the geese
//Description:
//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
//The geese are any strings in the following array, which is pre-populated in your solution:
//["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//For example, if this array were passed as an argument:
//["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//Your function would return the following array:
//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    return birds.filter((item) => !geese.includes(item));

    // return an array containing all of the strings in the input array except those that match strings in geese
}

//Replace With Alphabet Position
//Welcome.
//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

//"a" = 1, "b" = 2, etc.

//Example
//alphabetPosition("The sunset sets at twelve o' clock.")
//Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCaseStr = str.toLowerCase();
    const result = [];

    for (let i = 0; i < lowerCaseStr.length; i++) {
        let index = alphabet.indexOf(lowerCaseStr[i]);
        if (index === -1) {
            continue;
        } else {
            result.push(index + 1);
        }
    }
    return result.join(" ");
}

//Find the smallest integer in the array

//Given an array of integers your solution should find the smallest integer.
//For example:
//Given [34, 15, 88, 2] your solution will return 2
//Given [34, -345, -1, 100] your solution will return -345
//You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let currentMin = args[0];
        for (let i = 1; i < args.length; i++) {
            if (args[i] < currentMin) currentMin = args[i];
        }
        return currentMin;
    }
}

//Get the mean of an array
//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
   return Math.floor(marks.reduce(
    (previousValue, currentValue) => previousValue + currentValue)/marks.length);
  }