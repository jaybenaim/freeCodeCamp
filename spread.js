function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
  
  newArr.push([...arr]);
  
  
      // change code above this line
      num--;
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([1, 2,3 ], 5));
  


  //
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
  arr.slice(...arr) * num; 
  newArr.push(arr);
  
  
      // change code above this line
      num--;
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([1, 2,3 ], 5));

  // inserting using spread 
  let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

// example b 
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'] // change this line
    return sentence;
  }
  
  // do not change code below this line
  console.log(spreadOut());