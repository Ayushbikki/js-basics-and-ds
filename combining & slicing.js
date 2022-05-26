const arr1=[1,3,5,7]
const arr2=[9,11,13,15];
const combined = arr1.concat(arr2)
console.log(combined)
const sliced= combined.slice(0)
//console.log(sliced) //copy of an array
const sliced2= combined.slice(2,5)
console.log(sliced2)
const arr3=[{id:1}]
const arr4=[2,7,11,14]
arr3[0].id=10;
const combined2= arr3.concat(arr4)
arr3[0].id=15;
console.log(combined2)