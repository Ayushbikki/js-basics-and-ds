var x=function b(){
    console.log("xxxyy")
}
//x()
var c= function (par1){
    console.log(par1)
}
//pass funct as argu
c(function(){
    console.log('y')
})
var f=c('a')
//console.log(f)  // will return undefined if 
//console.log(c('a')) //this will act as a normal var,if it called(),then after it act as a fun
//return fun  from fun
var d= function (){
    return function xyz(){

    }

}
var g=d()
console.log(g)
console.log(d())