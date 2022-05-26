//https://opendsa-server.cs.vt.edu/embed/bubblesortAV for understanding

// in bubble sort the most largest ele is put at the last and this process continue
function bubbleSort(arr){
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i;j++){
            if(arr[j]>arr[j+1]){
               /* let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp;*/
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
    //console.log(arr)

}
console.log(bubbleSort([9,7,5,11,15]))
//bubbleSort([9,11,15,3,2])