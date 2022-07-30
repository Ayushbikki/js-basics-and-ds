let prom1=  new Promise(function(resolve,reject){
    if(true){
        resolve('success')
    }
    else{
        reject('error')
    }

})
let prom3=500
let prom2= function(a,b){
    return new Promise( function (resolve,reject) {
        if(a,b){
            resolve('valid no')
        }
        else{
            reject('error')
        }

    })

    
}
//prom1(true)
prom2(2,1).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})
prom1.then((res)=>{console.log(res)})
Promise.all([prom2(2,1),prom1,prom3]).then((res)=>{
    console.log(res)
})