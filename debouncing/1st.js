let counter=0;
const getdata = ()=>{
   
    console.log("fetching data",++counter)
}
const debounce = function(getdata,d){
    let timer
  
    return function(){
        //let context =this,
        //args=arguments
    clearTimeout(timer)
   timer= setTimeout(()=>{
        getdata.apply()
    },d)
}



}

const betterFunction =debounce(getdata,300)