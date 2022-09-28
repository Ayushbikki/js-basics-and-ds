  class Graph{
    constructor(){
        this.adjacencyList={ }
    }
    addVerterx(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
            return true;
        }
        return false;
    }
    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]&& this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]&& this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter((v)=>v!==vertex2)
            this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter((v)=>v!==vertex1)
            return true;
        }
        return false;
    }

  }
  let myGraph= new Graph()
  console.log(myGraph.addVerterx('A'))
  console.log(myGraph.addVerterx('B'))
  myGraph.addVerterx('C')
  myGraph.addEdge("A","B")
  myGraph.addEdge("A","C")
  myGraph.addEdge("B","C")
  myGraph.removeEdge("A","C")
  console.log(myGraph.removeEdge("A","D"))
  console.log(myGraph)