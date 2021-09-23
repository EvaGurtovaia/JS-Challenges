function isValid(username, password) {
    if (
        password.length < 8 ||
        password.indexOf(" ") !== -1 ||
        password.indexOf(username) !== -1
    ) {
        return false;
    }
    return true;
}

console.log(isValid("Eva", "Istanbul1987"));

function average(nums) {
    let ave = 0;
    for (let num of nums) {
        ave += num;
    }
    return ave / nums.length;
}

console.log(average([1, 2, 4, 6]));

function isPangram(str) {
    let lowerCased = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let char of alphabet) {
        if (lowerCased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("the quick brown fox jumps over  the lazy dog"));
