 

 //need to practise at regular interval
 function insertion(arr){
     let n=arr.length;
     for(let i=1;i<=n-1;i++){
         var right_pos=arr[i];
         for(var j=i-1;arr[j]>right_pos&&j>=0;j--){
             arr[j+1]=arr[j]

         }
         arr[j+1]=right_pos
         
     }
    return arr;
 }
 console.log(insertion([5,6,3,2,11]))