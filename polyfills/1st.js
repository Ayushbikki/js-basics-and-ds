let Name ={
    firstName: "Ayush",
    lastName : "Kumar",
  
}
let printName=  function(hometown,state){
    console.log(`full name is ${this.firstName} ${this.lastName} ${hometown} ${state} `)
}
//printName()
let printMyName= printName.bind(Name,"Mdb")
printMyName("Bih")

//every function has access to bind method by Function.Prototype
//how to make our mybind fun
Function.prototype.mybind=function(...args){
    let obj=this
    params=args.slice(1) //return array after deleting first ele
    return function(...args2){
        //params is an array so apply apply
        params=[...params,...args2]
        obj.apply(args[0],params)

    }
}
let printMyName2=printName.mybind(Name,"Mdb")
//at the time calling if giv arg,then that arg recive in return func argu
    printMyName2("Bih")
    