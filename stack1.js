//lifo
class CreateStack{
    constructor(){
        this.lists=[]
    }
   add(val){
        return this.lists.push(val)
   }
   delete(){
       if(this.lists.length>0){
           return this.lists.pop()
       }
   }
   peek(){
       if(this.lists.length>=0){
           console.log(this.lists[this.lists.length-1])
       }
   }
   print(){
       console.log(this.lists.toString())
   }
}
const myStack=  new CreateStack();
myStack.add(20);
myStack.add(44)
//myStack.print()
//myStack.peek()
console.log(myStack.lists)