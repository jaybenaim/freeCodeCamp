// checks if item exists and if it does the index will return 
// if no item is matched -1 will be returned 

function quickCheck(arr, elem) {

    // check if the elem exists
  if (arr.indexOf(elem) >= 0  ) { 
    return true; // return true if elem is in arr 
  } else { 
    return false; 
  }
   return; 
    // change code above this line
  }
  
  // change code here to test different cases:
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));