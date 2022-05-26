 //in selection sort refer to geeksfor geeks
 // basic thing smallest number comes first in each iteration
 function selection(arr){

    let n= arr.length;
    for(let i=0;i<n-1;i++){
       var min=i;
        for( let j=i+1;j<n;j++){
            if(arr[j]<arr[i]){
                min=j;
            }

        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr;


 }
 console.log(selection([3,2,11,7,8]))