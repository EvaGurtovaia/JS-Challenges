//map

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

const diffWords = ["dog", "bin", "sin", "cat", "lid", "set"];

//every & some

let allThreeLet = diffWords.every((word) => word.length === 3);
console.log(allThreeLet);

const someBegWithS = diffWords.some((word) => word[0] === "c");
console.log(someBegWithS);

//sort

const differNum = [7, 99, 86, 4, 5, 2, 26];

const ascSort = differNum.slice().sort((a, b) => a - b);
console.log(ascSort);
const descSort = differNum.slice().sort((x, y) => y - x);
console.log(descSort);

let books = [
    {
        title: "The Way of Kings",
        authors: ["Brandon Sanderson"],
        rating: 4.65,
        genres: ["fantasy", "epic"],
    },
    {
        title: "Lord of the flies",
        authors: ["William Golding"],
        rating: 3.67,
        genres: ["fiction"],
    },
    {
        title: "A Gentelman in Moscow",
        authors: ["Amor Towels"],
        rating: 4.0,
        genres: ["novel"],
    },
    {
        title: "Good Omens",
        authors: ["Terry Pratchett", "Neil Gaiman"],
        rating: 4.25,
        genres: ["fiction", "fantasy"],
    },
    {
        title: "Changing My Mind",
        authors: ["Zadie Smith"],
        rating: 3.83,
        genres: ["nonfiction", "essays"],
    },
];

let rating = books.sort((a, b) => a.rating - b.rating);
console.log(rating);

//reduce

console.log(
    [3, 5, 7, 9, 11].reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
    })
);

let result = [3, 4, 5, 6, 7].reduce((total, currentVal) => {
    return total * currentVal;
});
console.log(result);

const grades = [87, 67, 93, 82, 77, 95, 61];

const maxGrades = grades.reduce((max, currVal) => {
    if (currVal > max) {
        return currVal;
    }
    return max;
});

console.log(maxGrades);

const maxGradesTwo = grades.reduce((max, currVal) => {
    return Math.max(max, currVal);
});

console.log(maxGradesTwo);

const minGrades = grades.reduce((min, currVal) => Math.min(min, currVal));

console.log(minGrades);

const votes = ["y", "n", "y", "y", "y", "n", "n", "y"];

const votesResult = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++;
    } else {
        tally[val] = 1;
    }
    return tally;
}, {});

const votesResultTwo = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});

console.log(votesResult);
console.log(votesResultTwo);

const groupedByRatings = books.reduce((groupedBooks, book) => {
    let key = Math.floor(book.rating);
    if (!groupedBooks[key]) {
        groupedBooks[key] = [];
    }
    groupedBooks[key].push(book);
    return groupedBooks;
}, {});

console.log(groupedByRatings);
