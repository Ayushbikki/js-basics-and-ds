let counter=0;
const loggerFunc = ()=>{
    console.log("window resize",++counter, "times")
}
const throtttle = function(fun,limit){
    let flag = true
    return function(){
        let context = this;
    let args = arguments;
        if(flag){
            fun.apply(context,args)
            flag=false;
            setTimeout(()=>{

                flag=true;
            },limit)
        }

    }
    
    
}


const betterLoggerFunc =throtttle(loggerFunc,300)