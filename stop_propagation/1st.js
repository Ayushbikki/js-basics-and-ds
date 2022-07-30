function div1(e){
    this.style.backgroundColor='red'
    e.stopPropagation()
}
function div2(e){
    this.style.backgroundColor='black'
    
    e.stopPropagation()
}
function div3(e){
    this.style.backgroundColor='white'
    e.stopPropagation()
}
var divOne= document.getElementById('one')
var divTwo= document.getElementById('two')
var divThree= document.getElementById('three')
divOne.addEventListener("click",div1,false)
divTwo.addEventListener("click",div2,false)
divThree.addEventListener("click",div3,false)