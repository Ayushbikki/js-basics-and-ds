let num1=6;
let num2=num1;
//it means num2 value is 6
//num2=6  }   //two differe location
//num1=6  }
num1=10;
console.log(num1)   //10
console.log(num2)  // still 6 only value get copied 
let obj1={
    value:11
};
let obj2=obj1 //obj2 and obj1 point to same location so whenever change in obj1 
// value  therewill be change in obj2 value
obj1.value=13;
console.log(obj1)  //13
console.log(obj2) //13