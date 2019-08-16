// slice copies to a new elemnet to an array 
// first parameter is the index to begin extraction 
// second parameter is when to stop the extraction but not including that element at that index 

function forecast(arr) {
   
    var a = arr.slice(2, 4); // selects warm and sunny and creates new array 
    return a;
  }
  
  // do not change code below this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));