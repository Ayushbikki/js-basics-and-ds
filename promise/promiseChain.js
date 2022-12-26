function add(a,b){
    let c=a+b;
    return new Promise((resolve, reject) => {
        if(c>5){
            resolve(c)
        }
        else{
            reject('enter greater no;')
        }
            
        })
}


function divide(a,b){
    let c=a/b;
    return new Promise((resolve, reject) => {
        if(c!==Infinity){
            resolve(c)
        }
        else{
            reject(`can't divide by zero`)
        }
            
        })
}
//1st way  same function
/*
add(5,7).then((res)=>{
    console.log(`ans is ${res}`)
    add(res,7).then((res2)=>{
        console.log(`ans is ${res2}`)
    })
    .catch((err2)=>{
        console.log(err2)
    })
})
.catch((err)=>{
    console.log(err)
})
*/
// 1st way diff fuc
/*add(5,3).then((res)=>{
    console.log(`add is ${res}`)
    divide(res,4).then((res2)=>{
        console.log(`div is ${res2}`)
    })
    .catch((err)=>{
        console.log(`divide error ${err}`)
    })
})
.catch((err)=>{
    console.log(`add  error ${err}`)
})
*/



//2nd way   same function

/*add(5,4).then((res)=>{
    console.log(`ans is ${res}`);
    return add(res,10)
}).then((res2)=>{
    console.log(`ans is ${res2}`)
})
.catch((err)=>{
    console.log(err)
})
*/

//2nd way differnt function
add(5,4).then((res)=>{
    console.log(`add is ${res}`);
    return divide(res,3)
}).then((res2)=>{
    console.log(`div is ${res2}`)
})
.catch((err)=>{
    console.log(err)
})




// by geeksforgeek
/*
let promise = new Promise((resolve, reject) => {
    let a=2;
    let b=20;
    let c=a+b;
    if(c>10){
        resolve(c);
    }
    else{
        reject('enter larger no')
    }
   
    });
     
    promise
    .then( function (result1){
        console.log(result1);
        return new Promise((resolve,reject) =>{
            let d=2;
            let e=Math.floor(result1/d);
            if(e!==Infinity){
                resolve(`division is ${e}`)
            }
            else{
                reject(`can't divide by zero`)
            }
        })
    })
    .then((result2) => {
        console.log(result2);
    })
    .catch((e)=>{
        console.log(e)
    })
    */