function add(a){
    return function(b){
        return function(){
            return a+b;
        }
    }
}
console.log(add(4)(5)())
// if we pass one more variable i.e one more add  function then 
// we need to return one more return function
//infinite currying

function infiniteCurrying(a){
     return function(b){
        if(b) return infiniteCurrying(a+b)
            return a;
     }
}
console.log(infiniteCurrying(4)(5)(6)())