/* 
  Problem 1: Justice League
  Remove the side kick 'Robin' from the front of this List.
  Add a super hero `Green Lantern` to the end of this List.
  Add a super hero `Superman` to the front of this List.
  Your final array should look like this:
  [ 'Superman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman', 'Green Lantern' ]
*/

const justiceLeague = ["Robin", "Batman", "Wonder Woman", "Flash", "Aquaman"];

justiceLeague.shift();
console.log(justiceLeague);
justiceLeague.push("Green Lantern");
console.log(justiceLeague);
justiceLeague.unshift("Superman");
console.log(justiceLeague);

/* 
  Problem 2: Middle Earth
  In our list of Characters from Middle Earth remove sauraman. He's a traitor.
*/

const middleEarth = ["Frodo", "Samwise", "Gandalf", "Sauraman", "Treebeard"];
middleEarth.splice(3, 1);
console.log(middleEarth);
