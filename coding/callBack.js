
/*setTimeout(function(){
    console.log('timer')
},3000)

function x(y){
    console.log('x')
    y()
}
  
x(function y(){
    console.log('y')
})
*/
function attachEvent(){
    let count=0;
document.getElementById('clickMe').addEventListener('click',function xyz(){
    console.log("button clicked",++count)
})
}
attachEvent()
//var l=9