
const courses =[
  {id:1,name:'a'},
  {id:2,name:'b'} 
  ]

console.log(courses.includes({id:1,name:'a'}))// flase object in the array is located in two different memory
//find method
console.log(courses.find((course) => {return course.name ==='a'}))
//console.log(course);
//finding index
console.log(courses.findIndex((course) => {return course.name ==='b'}))
