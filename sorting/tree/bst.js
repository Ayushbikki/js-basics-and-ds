class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    } 
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root=== null){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value===temp.value) return undefined;
             if(newNode.value<temp.value){
                 if(temp.left===null){
                temp.left= newNode
                return this;
            }
            temp=temp.left;
        }
          else{
              if(temp.right === null){
                temp.right = newNode
                return this
            }
            temp = temp.right
        }

        }

    }
    contains(value){
        //base cond'n
        if(this.root===null) return false;
        let temp = this.root;
        while(temp){
            if(value<temp.value){
                temp= temp.left
            }
            else if(value>temp.value){
                temp = temp.right;
            }
            else{
                return true;
            }
        }
        return false
    }
    minValue(currentValue){
        currentValue=this.root
       while(currentValue.left!==null){
           currentValue = currentValue.left
       }
       return currentValue;
    }
    bfs(){
        let CurrentNode=this.root
        let queue=[]
        let desired =[]
        queue.push(CurrentNode)
        while(queue.length){
        CurrentNode = queue.shift();
        desired.push(CurrentNode.value)
        if(CurrentNode.left){queue.push(CurrentNode.left)}
        if(CurrentNode.right){queue.push(CurrentNode.right)}
        }
        return desired;
    }
    /*
    DFSPreOrder(){
        let results = []
       //console.log(this)
       //const self= this;

       //let currentNode = this.root
       var Node=this.root
       //console.log(currentNode)
            
    let traverse = (Node) =>{
            //console.log(this)
            //console.log(self)
            //let currentNode;
         
           
           
            results.push(Node.value)
           
            //console.log(results)
            if(Node.left) traverse(Node.left)
            if(Node.right) traverse(Node.right)
            }
        traverse(Node)
        return results;
        
    }*/
    DFSPreOrder(){
        let results = []
        const traverse = (currentNode) =>{
            results.push(currentNode.value)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)

        }
        traverse(this.root)
        return results
    }

    //remember
    postOrder(){
        let results =[]
        let current = this.root
        const traverse= (Node) =>{
            if(Node.left) traverse(Node.left)
            if(Node.right) traverse(Node.right)
            results.push(Node.value)
        }
        traverse(current)
        return results

    }
    inorder(){
        let results = [] 
        let current= this.root
      let traverse = (node) =>{
            if(node.left) traverse(node.left)
            results.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return results

    }
}



let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)
console.log(myTree)
console.log(myTree.contains(17))
console.log(myTree.contains(18))
console.log(myTree.minValue())
console.log(myTree.bfs())
console.log(myTree.DFSPreOrder())
console.log(myTree.postOrder())
console.log(myTree.inorder())
