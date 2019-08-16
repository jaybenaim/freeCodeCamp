"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // i flag makes all appreances lower and uppercase // g is to show all occurences 
let result = twinkleStar.match(starRegex); // .match() returns the result 

// wildcard characters 
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let results = unRegex.test(exampleStr);

//example a 
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // specifies which characters to search for 
let result = quoteSample.match(vowelRegex); // searches quoteSample for vowelRegex 

// example b 
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null 

// matching a range of characters 
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line