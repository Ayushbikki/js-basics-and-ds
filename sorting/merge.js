// recursion concept 
//merge funct: two  array ,in this we compare 1st of arr1 to 1st of arr2 & store 
//lower value in combined array && if there is remaining in any of arr , we just push all the ele in combined array

//mergeSort Func: divide the array into two & this divided array process continuosly ivoke till array size become 1 


function merge(arr1,arr2){
    let i=0;
    let j=0;
    let combined=[]

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            combined.push(arr1[i])
            i++;
        }
        else if(arr2[j]<arr1[i]){
        combined.push(arr2[j]);
        j++;
        }
    }
    while(i<arr1.length){
        combined.push(arr1[i])
        i++;
    }
    while(j<arr2.length){
        combined.push(arr2[j])
        j++;
    }
    return combined

}
function mergeSort(arr){
    if(arr.length===1) return arr;
    let mid= Math.floor(arr.length/2)
    let left=arr.slice(0,mid);
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
console.log(mergeSort([1,3,7,8,2,4,5,6]))