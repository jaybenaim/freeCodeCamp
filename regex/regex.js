let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); //  returns true if myString contains myRegex 
console.log(result); // Change this line

let waldoIsHiding = "Somewhere waldo is hiding in this text. asdaSdasdasdaASaadGvsdvdcWaldofasdasdasfas";
let waldoRegex = /Waldo/; // Change this line
let results = waldoRegex.test(waldoIsHiding);
console.log(results);

// using multiple regexes 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);


// matching a range of characters 
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// searching for numbers and letters 
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myMixedRegex = /[h-s2-6]/ig; // Change this line
let res = quoteSample.match(myMixedRegex); // Change this line

// negated characters (the ones you dont want) 
let quoteSample = "3 blind mice.......";
let myRegex = /[^a-z0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// \w is the same as [^a-zA-Z0-9_] including _ and upper and lower case 
// finding consecutive characters // to show 1 or more times 
// \w shortcut for the above 
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// \W to search for everything other that characters [A-za-z0-9] 
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// \d shortcut to find how numbers in a string 
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;

// \D find characters that aren't numbers 
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;

// \s see how many characters are im the string in row 
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

// to show zero or more times 
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);
"Hello, World!".match(/Hello/);
// Returns ["Hello"]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // i flag makes all appreances lower and uppercase // g is to show all occurences 
let result = twinkleStar.match(starRegex); // .match() returns the result 

// . wildcard characters 
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

// lazy matching with wildcards 
let text = "<h1>Winter is coming</h1>";
let myRegex = /.h1./; // Change this line
let result = text.match(myRegex);
console.log(result); 

// matching regexs to the begining on strings 
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
// will return true because its in the beginining of the string 

// match ending strings 
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
//returns true 

// match whitespace 
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

// everything except white space 
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

// find from {2, 6} 2 - 6 times 
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/ // Change this line
let result = ohRegex.test(ohStr);

// return if more than 4 z's 
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

// only 4 m's 
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

// check for all or none 
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

// positive and negative lookahead 
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

// password with at least two numbers and 5 letters 
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

//repeated only 3 times with a space inbetween 
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

//remove white space without using trim() 
let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log(result); 

