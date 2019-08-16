// two dimensional arrays 

   
    


     const repeatNumbers = function(data) {
        function getCol(matrix, col){
            var column = [];
            for(var i=0; i<matrix.length; i++){
               column.push(matrix[i][col]);
            }
            return column;
         }
         var arr = getCol(data, 0); 
         var arg = getCol(data, 1); 
         var a = JSON.stringify(arr); 
         function rep(a, b){ 
             a = arr; 
             b = arg; 
            add = a.repeat(b); 
            return add; 
         }
         return rep(); 
         

} 
  
  
  
  console.log(repeatNumbers([ [2, 10] ] ));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
