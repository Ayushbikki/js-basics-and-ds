//map,filter,reduce polyfills

let arr=[1,2,3,4]
let arr1=[1,2,3]
let res=arr.map((ele,i,arr)=>ele*3)
//console.log(res)
//Array.map((currarr,i,arr)=>{

//})
Array.prototype.myMap= function(cb){
    let temp=[]
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}
let res1=arr.myMap((ele,i)=> ele*3)
console.log(res1)
Array.prototype.myFilter = function(cb){
    let temp1=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp1.push(this[i])
        }
    }
    return temp1
}
let res2= arr.myFilter((ele,i)=>ele>2)
console.log(res2)


//arr.reduce((acc,curr,i,arr)=>{},initialValue)
Array.prototype.myReduce= function(cb,initialValue){
    var acc=initialValue
    for(let i=0;i<this.length;i++){
        acc=acc?cb(acc,this[i],i,this):this[i]
    }
    return acc;

}