const arr= [2,4,8,13,6,8,4]
console.log(arr.indexOf(4)); //1
console.log(arr.indexOf(101))  //-1
console.log(arr.lastIndexOf(4)) //6

console.log(arr.includes(8))//true
console.log(arr.includes(77))//false
//indexOf contain two argument
console.log(arr.indexOf(4,3));