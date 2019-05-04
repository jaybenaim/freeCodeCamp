let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); //  returns true if myString contains myRegex 
console.log(result); // Change this line

let waldoIsHiding = "Somewhere waldo is hiding in this text. asdaSdasdasdaASaadGvsdvdcWaldofasdasdasfas";
let waldoRegex = /Waldo/; // Change this line
let results = waldoRegex.test(waldoIsHiding);
console.log(results);