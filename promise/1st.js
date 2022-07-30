/* 
let prom1= new Promise()
let prom2 = new Promise(function(){

})
let prom3= new Promise(function(resolve,reject){
    if(cond){
        resolve()
    }
    else{
        reject()
    }

}) 
//1st approach
let comp=true;
let prom = new Promise(function(resolve,reject){
    if(comp){
        resolve("success")
    }
    else{
        reject("error,fail")
    }
})
console.log(prom)*/
function prom(comp){
    console.log("fetching the data")
    return  new Promise(function(resolve,reject){
       setTimeout(()=>{
        if(comp){
            resolve("success")
        }
        else{
            reject("error,fail")
        }
       },1000)
    })
}
function prom1(a,b){
    console.log("fetching the num")
    return  new Promise(function(resolve,reject){
        var c= a/b
       setTimeout(()=>{
        if(a,b){
            resolve(`answer is ${c}`)
        }
        else{
            reject("cann't divide by zero")
        }
       },1000)
    })
}
/*let onSucess =(res)=>{
    console.log(res)
}
let onReject= (err)=>{
    console.log(err)
}*/
/*prom(true).then(onSucess)
prom(true).catch(onReject)*/
//chaining
//prom(false).then(onSucess).catch(onReject)
//writing func in then
prom(false).then((result)=>{ console.log(result)})
.catch((err)=>{
    console.log(err)
})
prom1(4,0).then((result)=>{ console.log(result)})
.catch((err)=>{
    console.log(err)
})
//console.log(prom(true))
