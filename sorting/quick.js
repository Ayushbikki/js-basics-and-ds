// remember from udemy



function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right)
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr;
}
function pivot(arr,pivotIndex,lastIndex){
    //pivotIndex=0, lastIndex=arr.length-1
    let swapIndex=pivotIndex;
    for(let i=pivotIndex+1;i<=lastIndex;i++){
        if(arr[i]<arr[pivotIndex]){
            swapIndex++;
            swap(arr,swapIndex,i)
        }
    }
    swap(arr,pivotIndex,swapIndex)
    return swapIndex;

}
function swap(arr,first,second){
    [arr[first],arr[second]]=[arr[second],arr[first]]

}
let arr1=[4,6,1,7,3,2,5]
console.log(quickSort(arr1));