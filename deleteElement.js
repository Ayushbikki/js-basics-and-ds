const num =[1,7,19,17,55,66,57,17]
//deleting from end
//console.log(num.pop()) //17
//console.log(num)

//from begin
console.log(num.shift()) //1
//console.log(num)
//from middle
//console.log(num.splice(2,2)) //first argumrnt from where and 2nd argument how many to delete
//console.log(num)


//Empty an array
//if don't have multiple refeence 
let number=[2,5,8,13]
let another=number
number= []
//console.log(number) //[]
//console.log(another) // 2 5 8 13

//truncate
let no1=[5,8,22,17]
let another1=no1
no1.length=0
//console.log(no1)
//console.log(another1)

//solution 3 using slice
let no2=[3,6,8,9]
no2.splice(0)
console.log(no2)
