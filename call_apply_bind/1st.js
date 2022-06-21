let Name ={
    firstName: "Ayush",
    lastName : "Kumar",
   // printName : function (){
        //console.log(`full name is ${this.firstName} ${this.lastName} `)
   // }
}
let printName =function (hometown,state){
    console.log(`full name is ${this.firstName} ${this.lastName}  ${hometown} ${state}`)
}
//Name.printName()
printName.call(Name,'mdb','bihar')
let Name2={
    firstName:"Amit",
    lastName:"Sah"
}
// in order to display full Name 
//function borrowing
 printName.call(Name2,'guj','ahm') // Name2 argument .. whw=ere r this to be pointed
//apply
//the only diff is argument passed as a array
printName.apply(Name,['kol','wb'])

//bind ..e it directly don't call method rather than it return mrthod which can be called
//bind method return copy of that method
let printByBind= printName.bind(Name,"pat","bih")
//console.log(printByBind) // return method
printByBind()