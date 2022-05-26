// fifo
class queue{
    constructor(){
        this.lists=[]
    }
    //adding ele in queue
    enqueue(ele){
          return  this.lists.push(ele)
    }
    dequeue(){
        return this.lists.shift()
    }
    print(){
        console.log(this.lists.toString())
    }



}
const myQueue = new queue()
myQueue.enqueue(33)
myQueue.enqueue(3)
myQueue.enqueue(11)
myQueue.dequeue()
myQueue.print()
console.log(myQueue.lists)
