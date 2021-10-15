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
