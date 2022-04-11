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

//Find the missing element between two arrays

//Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.
//Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

//find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
//find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
//The first array will always have at least one element.

function findMissing(arr1, arr2) {
    // Your solution here
    let index;
    for (let i = 0; i < arr1.length; i++) {
        index = arr2.indexOf(arr1[i]);
        if (index > -1) {
            arr2.splice(index, 1);
        } else {
            return arr1[i];
        }
    }
}

//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Example:
//348597 => [7,9,5,8,4,3]
//0 => [0]

function digitize(n) {
    const nums = n.toString().split("").reverse();
    return nums.map((el) => +el);
}

//Difference of Volumes of Cuboids
///In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//Your function will be tested with pre-made examples as well as random ones.

//If you can, try writing it in one line of code.

function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

//Can we divide it?

//Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
//A few cases:

//(-12, 2, -6)  ->  true
//(-12, 2, -5)  ->  false

//(45, 1, 6)    ->  false
//(45, 5, 15)   ->  true

//(4, 1, 4)     ->  true
//(15, -5, 3)   ->  true

function isDivideBy(num, a, b) {
    if (num % a === 0 && num % b === 0) {
        return true;
    } else {
        return false;
    }
}

//Friend or Foe?

//Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

//i.e.

//friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
//Note: keep the original order of the names in the output.

function friend(friends) {
    let realFriends = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            realFriends.push(friends[i]);
        }
    }
    return realFriends;
}

//Find the first non-consecutive number
//By not consecutive we mean not exactly 1 larger than the previous element of the array.

//E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

//If the whole array is consecutive then return null2.

//The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        if (current + 1 !== next) {
            return next;
        }
    }
    return null;
}

//No oddities here
//Write a small function that returns the values of an array that are not odd.

//All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {
    return values.filter((val) => val % 2 === 0);
}

//Consonant value
//Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

//We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

//For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
//- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
//solve("zodiacs") = 26

//For the word "strength", solve("strength") = 57
//- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(str) {
    return Math.max(
        ...str
            .replace(/[aeiou]+/g, " ")
            .trim()
            .split(" ")
            .map(addUpSubstr)
    );
}

function charToValue(chr) {
    return chr.charCodeAt(0) - 96;
}

function addUpSubstr(substr) {
    return substr
        .split("")
        .map(charToValue)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
}
