function callB(n1,n2,fn){
    let s=n1+n2;
    fn(s)
    
}
function display(n){
    console.log('sum is ',n)
    
}

callB(5,6,display)


//sum is  11