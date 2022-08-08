function getMultipleValues(){

    return 10;
    return 20;
}
console.log(getMultipleValues()) //10


function *getMultipleValues1(){
    yield 10;
    yield 20;
}
var result= getMultipleValues1()
console.log(result.next().value) //10
console.log(result.next().value) //20
console.log(result.next().value)// undefined
console.log(result.next())   //done true value undefined