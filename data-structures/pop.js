// pop() remove last and shift() remove first 
function popShift(arr) {
    let popped = arr.pop(); // removes last item 
    let shifted = arr.shift(); // remove first item 
    return [shifted, popped];
  }
  
  // do not change code below this line
  console.log(popShift(['challenge', 'is', 'not', 'complete']));