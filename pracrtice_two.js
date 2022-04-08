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

function getAverage(marks) {
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(
        marks.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        ) / marks.length
    );
}

//Reversed sequence

//Build a function that returns an array of integers from n to 1 where n>0.
//Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
    const result = [];
    for (let i = n; i > 0; i--) {
        result.push(i);
    }
    return result;
};

//Student's Final Grade

//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//This function should return a number (final grade). There are four types of final grades:
//100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//0, in other cases

function finalGrade(g, p) {
    if (g > 90 || p > 10) {
        return 100;
    }
    if (g > 75 && p >= 5) {
        return 90;
    }
    if (g > 50 && p >= 2) {
        return 75;
    }
    return 0;
}

//Print a Rectangle Using Asterisks

//Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.
//The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).
//For example, the following call: getRectangleString(3, 3);
//Should return the following string:
//***
//* *
//***

function getRectangleString(width, height) {
    const rn = "\r\n";
    const tb = "*".repeat(width) + rn;
    const center =
        width > 1
            ? ("*" + " ".repeat(width - 2) + "*" + rn).repeat(height - 2)
            : "";
    return height > 1 ? tb + center + tb : tb.repeat(height);
}

//Convert To Binary

//Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
//to_binary(1)  /* should return 1 */
//to_binary(5)  /* should return 101 */
//to_binary(11) /* should return 1011 */

function toBinary(n) {
    return +n.toString(2);
}
