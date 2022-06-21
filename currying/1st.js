//currying using closure

/*function multiply(x){
     function ab(y){
        return(y*x)
    }
    return ab
}
*/
function multiply(x){
    return function (y){
       console.log(x*y)
   }
}
  

let multiplyBy2 = multiply(2)
//console.log(multiplyBy2)
//multiplyBy2(7)
  
//using bind
let multi= function(x,y){
    console.log(x*y)
}
let multiBy2= multi.bind(this,2) //here 2 refer to x first argu //this create copy of method multi
//same as this fun
/*
let multi= function(y){
    let x=2
    console.log(x*y)
}
*/

multiBy2(5)
let multiBy3= multi.bind(this,3,6)
multiBy3(5) //it will ignore 5 argu if we pass 2 argu at first
let multibygiven=multi.bind(this)
multibygiven(5,6)  //30