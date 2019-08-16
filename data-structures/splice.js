// splice() removes any consecutive elements from anywhere in an array 
// first parameter is index 
// second parameter is how many elements to remove 

function sumOfTen(arr) {

   arr.splice(0, 1); //remove 2 
   arr.splice(1, 1);   //remove 1 
   arr.splice(2, 2); // remove 2 and 1 
   
    return arr.reduce((a, b) => a + b);
  }
  
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

  // third parameter adds elements 
  
  function htmlColorNames(arr) {
    
    arr.splice(0, 1, 'DarkSalmon'); // changing first value to third parameter 
    arr.splice(0,1, 'BlanchedAlmond'); // changing second value to third parameter 
    // change code above this line
    return arr;
  } 
   
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));