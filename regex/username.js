let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i // Change this line

let result = userCheck.test(username);

// only numbers have to be at the end \d$ and there can be zero or more of them at the end * 
// usernames have to have at least two characters {2, } 
// teo letter username can only use alphabet letters ^[a-z] 

// simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true


// password with at least two numbers and 5 letters 
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);