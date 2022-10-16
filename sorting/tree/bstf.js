/*function bst(){
    
    function TreeNode(val){
    this.val=val;
    this.left=this.right=null;
    
}
    this.root = null;
    
    this.root = null;
    
    //This method accepts a value argument and creates a new node from it.
    this.addNode = function(value) {
        
        //creates new node
        let node = new TreeNode(value);
        
        //if root is null, set it to the first new node.
        if (!this.root) {
            this.root = node;
        } else { //else, use the insertNode helper function by passing in the current node, which is the root, and the new node.
            insertNode(this.root, node);
        }
    }
    function insertNode(root,val){
    let current=root
    while(current.val!==val){
        if(current.val<val){
            if(!current.val<val){
                current.right=new TreeNode(val)
            }
            else{
                current=current.right;
            }
        }
        else{
             if(!current.left){
                current.left=new TreeNode(val)
            }
            else{
                current=current.left;
            
        }
        
    }
}
return root;

}
}

let myTree = new bst()
myTree.addNode(47)
myTree.addNode(21)
myTree.addNode(76)
myTree.addNode(18)
myTree.addNode(27)
myTree.addNode(52)
myTree.addNode(82)
console.log(myTree)
*/

function BinarySearchTree() {

    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    this.root = null;

    this.addNode = function(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            insertNode(this.root, node);
        }
    }

    function insertNode(currentNode, newNode) {

        /*let current=root
    while(current.val!==val){
        if(current.val<val){
            if(!current.val<val){
                current.right=new TreeNode(val)
            }
            else{
                current=current.right;
            }
        }
        else{
             if(!current.left){
                current.left=new TreeNode(val)
            }
            else{
                current=current.left;
            
        }
        
    }
}
return root;

}
*/
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                insertNode(currentNode.left, newNode);
               // currentNode=currentNode.left
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                insertNode(currentNode.right, newNode);
              // currentNode=currentNode.right
            }
        }
    }

    //This method takes a callback function as an argument, which will be used on the nodes while traversing the tree
    this.inOrderTraversal = function(callback) {
        //We are passing the root node into the traversal helper function and the callback to start the traversal!
        inOrderTraversalHelper(this.root, callback);
    }
    
    //This helper function will be used recursively to go search the depths of the tree.
    function inOrderTraversalHelper(node, callback) {
        //Checking if the node exists. This check will return false and then stop when there are no more nodes to traverse.
        if (node) {
            //Check and prioritize all the left subtrees and children
            inOrderTraversalHelper(node.left, callback);
            //Perform the callback on the node
            callback(node.value);
            //Then prioritize and traverse the right subtrees and children
            inOrderTraversalHelper(node.right, callback);
        }
    }

}

let tree = new BinarySearchTree();
tree.addNode(47);
tree.addNode(21);
tree.addNode(76);
tree.addNode(18);
tree.addNode(27);
tree.addNode(52);
tree.addNode(82)
console.log(tree)
