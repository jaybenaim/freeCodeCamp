function factorialize(num) {
    if (num < 0) { 
      return -1; 
    } else if (num === 0) { 
      return 1; 
    } else { 
      return (num * factorialize(num - 1)); 
    }
    }
    console.log(factorialize(5)); 
    

    function FirstFactorial(num) { 
  
      return num ? num * FirstFactorial(num - 1) : 1;
   
     
  } 
  
     