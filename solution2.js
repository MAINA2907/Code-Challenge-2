function Numbers(num1,num2) {   

    let newNum = [];            

    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {   
                                               
            newNum.push(i);                    
        }
    }else {
        for (let i = num1; i >= num2; i--) {  
                                              
            newNum.push(i);                  
        }
    }
    return newNum;                            
  }
  
  
  console.log(Numbers(4, 7));  
  console.log(Numbers(-4, 7)); 