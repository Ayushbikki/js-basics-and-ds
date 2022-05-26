/*const first = new Map([['ayush','bikki'],['mdb','bihar']])
first.set(3,6)
first.set('a',6)
first.set(0,1)
first.set('a','b')
first.delete('a')
//console.log(first.keys(6))
console.log(first.keys())
console.log(first.has(1))  // check key

console.log(first.get(3)) //give value to key
console.log(first.values())  // return value
//console.log(first.entries())
//first.clear()
console.log(first)

/*first.forEach((key,value)=>{
    console.log(`key is ${key},value is ${value}`)
})*/
//console.log(first)
/*for(let value of first){
    console.log(`value is ${value[1]}, type is ${typeof(value)}`)
}
*/

// set
//no duplicate value

const second= new Set([2,3,4,4])
second.add({key:20,value:22})
//second.Set()
console.log(second.has(Object))
console.log(second)
