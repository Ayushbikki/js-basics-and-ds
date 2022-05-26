//iterating
const no=[1,3,7,11]
//for of 
//for(let number of no)
 //console.log(number);
// forEach method
const no1=[1,4,8,11]
 //no1.forEach((num2,index)=>console.log(num2,index))


//join
const no2=[9,3,11,14]
const joined=no2.join(',')
//console.log(joined);
const message="this is a info"
const part= message.split(' ');
console.log(part)
const combined = part.join('-')
console.log(combined)

//sort primitive
const sort1=[7,5,11,9]
sort1.sort((a,b)=> a-b);
console.log(sort1)
sort1.reverse((a,b)=>{
  if(a>b) return 1
  if(a<b) return -1
  return 0
})
console.log(sort1)
const courses =[{
  id:1,name:'xyz'},
  {id:2,name:'nodejs'}
]
courses.sort((a,b)=>{
       if(a.name> b.name) return 1
        if(a.name<b.name) return -1;
  return 0
}  )
console.log(courses)