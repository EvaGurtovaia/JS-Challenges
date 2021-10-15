callbacks.js;
const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

function firstItem(arr, cb) {
    // firstItem passes the first item of the array into the callback.
    return cb(arr[0]);
}

const test1 = firstItem(items, (item) => `I love my ${item}!`);
console.log(test1);

function getLength(arr, cb) {
    return cb(arr.length);
    // getLength passes the length of the array into the callback.
}

const test2 = getLength(items, (len) => `The array length is ${len}!`);
console.log(test2);

function last(arr, cb) {
    // last passes the last item of the array into the callback.
    return cb(arr[arr.length - 1]);
}

const test3 = last(items, (lastItem) => `I don't like ${lastItem}!`);
console.log(test3);

function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x + y);
}

const test4 = sumNums(4, 5, (sum) => `The sum is ${sum}!`);
console.log(test4);

function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x * y);
}

const test5 = multiplyNums(4, 5, (mult) => `The result is ${mult}!`);
console.log(test5);

function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    return cb(list.includes(item));
}

const test6 = contains(
    "dog",
    ["cat", "parrot", "fish"],
    (ifthere) => `The result is ${ifthere}!`
);
console.log(test6);

function removeDuplicates(arr, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.

    return cb(Array.from(new Set(arr)));
}
const test7 = removeDuplicates(
    [5, 6, 5, 7, 5, 6, 5, 8],
    (ifthere) => `The result is ${ifthere}!`
);
console.log(test7);
