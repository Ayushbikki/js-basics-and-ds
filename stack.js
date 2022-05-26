// LIFO
function CreateStack(maxSize = 10) {
    const _stack = [];
    let _top = -1;
  
    // Add on top
    function push(val) {
      if (_top >= maxSize - 1) {
        return "stack overflow";
      } else {
        _stack.push(val);
        _top++;
      }
    }
  
    // remove from top
    function pop() {
      if (_top > -1) {
        _top--;
        return _stack.pop();
      } else {
        return null;
      }
    }
  
    // get lenght
    function size() {
      return _top + 1;
    }
  
    // get the top value
    function peek() {
      if (_top > -1) {
        return _stack[_top];
      } else {
        return null;
      }
    }
  
    // print as string
    function print() {
      console.log(_stack);
    }
  
    // find value
    function search(val) {
      const temp = [];
      let found = null;
  
      while (_top > -1) {
        if (_stack[_top] === val) {
          found = _top;
          break;
        }
        temp.push(_stack.pop());
        _top--;
      }
  
      const templen = temp.length;
  
      for (let i = 0; i < templen; i++) {
        _stack.push(temp.pop());
      }
  
      return found;
    }
  
    // empty the stack 
    function empty() {
      while (_top > -1) {
        _stack.pop();
        _top--;
      }
    }
  
    return { push, print, pop, size, peek, search, empty };
  }
  
  const myStack = CreateStack(1000);
  
  myStack.push("hi");
  myStack.push("hello");
  console.log(typeof(myStack))
  myStack.pop();
  myStack.print();
  let arr=[1,2,5]
  //console.log(typeof(arr))
  