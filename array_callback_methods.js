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

// The event director needs to have all the runners' first names in uppercase
// because the director BECAME DRUNK WITH POWER.
//Populate an array called `firstNamesAllCaps`.
//This array will contain just strings.

const runners = [
    {
        id: 1,
        first_name: "Charmain",
        last_name: "Seiler",
        email: "cseiler0@wired.com",
        shirt_size: "2XL",
        company_name: "Divanoodle",
        donation: 75,
    },
    {
        id: 2,
        first_name: "Whitaker",
        last_name: "Ierland",
        email: "wierland1@angelfire.com",
        shirt_size: "2XL",
        company_name: "Wordtune",
        donation: 148,
    },
    {
        id: 3,
        first_name: "Julieta",
        last_name: "McCloid",
        email: "jmccloid2@yahoo.com",
        shirt_size: "S",
        company_name: "Riffpedia",
        donation: 171,
    },
    {
        id: 4,
        first_name: "Martynne",
        last_name: "Paye",
        email: "mpaye3@sciencedaily.com",
        shirt_size: "XL",
        company_name: "Wordware",
        donation: 288,
    },
    {
        id: 5,
        first_name: "Gussy",
        last_name: "Raraty",
        email: "graraty4@ucoz.ru",
        shirt_size: "L",
        company_name: "Oozz",
        donation: 291,
    },
    {
        id: 6,
        first_name: "Yule",
        last_name: "Tommasetti",
        email: "ytommasetti5@state.gov",
        shirt_size: "S",
        company_name: "Yodo",
        donation: 27,
    },
    {
        id: 7,
        first_name: "Kathie",
        last_name: "Majury",
        email: "kmajury6@guardian.co.uk",
        shirt_size: "3XL",
        company_name: "Zoomcast",
        donation: 261,
    },
    {
        id: 8,
        first_name: "Tanner",
        last_name: "Branton",
        email: "tbranton7@tmall.com",
        shirt_size: "2XL",
        company_name: "Realmix",
        donation: 28,
    },
    {
        id: 9,
        first_name: "Sarina",
        last_name: "Lasham",
        email: "slasham8@toplist.cz",
        shirt_size: "XL",
        company_name: "Gigashots",
        donation: 110,
    },
    {
        id: 10,
        first_name: "Bertie",
        last_name: "Lonergan",
        email: "blonergan9@issuu.com",
        shirt_size: "3XL",
        company_name: "Skinte",
        donation: 62,
    },
];

let firstNamesAllCaps = runners.map((person) => person.last_name.toUpperCase());
console.log(firstNamesAllCaps);

// The large shirts won't be available for the event due to an ordering issue.
//We need a filtered version of the runners array,
//containing only those runners with large sized shirts
//so they can choose a different size. This will be an array of objects.

let runnersLargeSizeShirt = runners.filter(
    (person) => person.shirt_size === "XL"
);
console.log(runnersLargeSizeShirt);

// The donations need to be tallied up and reported for tax purposes.
//Add up all the donations and
//save the total into a ticketPriceTotal variable.

let ticketPriceTotal = runners.reduce(
    (total, curVal) => total + curVal.donation,
    0
);
console.log(ticketPriceTotal);

// The event director needs both the first and last names of each runner
//for their running bibs.
//Combine both the first and last names and populate a new array called `fullNames`.
//This array will contain just strings.

let fullName = [];
runners.forEach((person) =>
    fullName.push(`${person.first_name} ${person.last_name}`)
);
console.log(fullName);
