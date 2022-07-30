 function lenOfLongSubarr(arr,k){
        
    //code here
  /*  let sum=0
    let map = new Map()
    let res=0;
   map.set(0,1)
    let n1= arr.length
    for(let i=0;i<n1;i++){
        sum=sum+arr[i]
        if(sum===k) res=i+1
        if(!map.has(sum)) map.set(sum,i)
         if(map.has(sum-k)){
             res=Math.max(res,i-map.get(sum-k))
          
        }
        
    }
    return res;
    */
    var um = new Map();
   // um.set(0,1)
var sum = 0, maxLen = 0;
let n= arr.length;

// traverse the given array
for (var i = 0; i < n; i++) {

    // accumulate sum
    sum += arr[i];

    // when subarray starts from index '0'
     if (sum == k) maxLen = i + 1;
        

    // make an entry for 'sum' if it is
    // not present in 'um'
    if (!um.has(sum))
        um.set(sum, i);

    // check if 'sum-k' is present in 'um'
    // or not
    if (um.has(sum - k)) {

        // update maxLength
        if (maxLen < (i - um.get(sum - k)))
            maxLen = i - um.get(sum - k);
    }
}

// required maximum length
return maxLen;
}
let b=lenOfLongSubarr([-5, 8, -14, 2, 4, 12],-5)
console.log(b)