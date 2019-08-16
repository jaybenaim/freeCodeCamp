
  function myFunction(data){ 
    

    for(var i = 0; i < data.length; i++) {
        a = data[i][i]; 
        for(var j = 0; j < data[i].length; j++) {
            b = data[i][j];
        }
        a = JSON.stringify(a) + ""; 
        b = Number(b); 
        return a * b; 
    }
  }
console.log(myFunction([ [2, 10] ] ));
console.log(myFunction([[1, 2], [2, 3]]));
console.log(myFunction([[10, 4], [34, 6], [92, 2]]));
/*
function addString(a, b) { 
    
    add = a.repeat(b); 
    return add; 
}
console.log(addString("hello", 2)); 
*/ 