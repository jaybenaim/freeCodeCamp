//unshift puts in the begining of the array 
function mixedNumbers(arr) {
    // change code below this line
  arr.unshift('I', 2, 'three'); // unshift() adds to front 
  arr.push(7, 'VIII', 9); // push() adds to end 
    // change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));