const numbers = [2, 4, 6, 7, 9];

let numDetail = numbers.map((num) => {
    return {
        value: num,
        isEven: num % 2 === 0,
    };
});

console.log(numDetail);

const words = ["byob", "asap", "rsvp", "diy"];

let abbrevs = words.map((word) => word.toUpperCase().split("").join("."));
console.log(abbrevs);

const nums = [1, 2, 3, 4, 5, 6, 7, 9];

let parityList = nums.map((num) => (num % 2 === 0 ? "even" : "odd"));
console.log(parityList);
