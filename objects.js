// https://zellwk.com/blog/looping-through-js-objects/
// add bananas grapes and strawberries with values to food object using bracket notation 
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // change code below this line
  foods['bananas'] =  13, 
  foods['grapes'] = 35, 
  foods['strawberries'] = 27
  
  // change code above this line
  
  console.log(foods);

  // returning an abjects value through a function 
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // do not change code above this line
  
  function checkInventory(scannedItem) {
      return foods[scannedItem];
  }
  
  console.log(checkInventory("apples"));

  // remove an objects key 
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  delete foods.oranges; 
  delete foods.plums; 
  delete foods.strawberries; 
  
  console.log(foods);

  // check if an object has a property 
  users.hasOwnProperty('Alan');
'Alan' in users;
// both return true


// examples continue 
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  
  if (obj in users === true) { 
    return true; 
  } else if (obj in users === false) { 
    return false; 
  }
   
  // change code above this line
}

console.log(isEveryoneHere('Jeff')); // checks if each student is there by changing name in console.log 

// checks if all students are here 

function isEveryoneHere(obj) {
  // change code below this line
  
  if (users.hasOwnProperty('Alan', 'Jeff', 'Sarah' , 'Ryan' ) ) { 
    return true; 
  } else { 
    return false; 
  }
   
  // change code above this line
}

console.log(isEveryoneHere(users));

// or 
function isEveryoneHere(obj) {
  return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false;
}

// EXAMPLE END

// forloops to go through object keys ( for...in statment )
