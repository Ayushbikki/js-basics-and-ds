let person={
    name: 'ayu',
    age: 30
}
//let objtoArray = [...person] 
//console.log(objtoArray)
//console.log(Object.keys(person)[1])
console.log(Object.entries(person)) //gives multidimensional array
//console.log(person.length) // undefined
let len=Object.keys(person).length
//let result= new Array(person.length)    //undefined
//for(let i=0;i<obj)
let key=Object.keys(person)
let value=Object.values(person)
let result=new Array(len)
for(let i=0;i<len;i++){
    result[i]=[Object.keys(person)[i],Object.values(person)[i]]
}


console.log(result)
let result1=[Object.keys(person),Object.values(person)]
console.log(result1)
 const getArrayFromObj = (obj)=>{
    const objKey=Object.keys(person)
    const res=objKey.map((key)=>{
        const value=obj[key]
        return [key,value]
    })
    return res

 }
 console.log(getArrayFromObj(person))
//console.log(result)
window.aterror