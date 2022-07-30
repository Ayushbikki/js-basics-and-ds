 /*function factorial(n){
    return (n <= 1) ? 1 : n * factorial(n - 1)
    

}
//let s='string'
const MAX_CHAR =256
var count= new Array(MAX_CHAR).fill(0)



function updateCount(s,count){
    for(let i=s.charCodeAt(0);i<MAX_CHAR;i++){

        --count[i];
    }

}
function rank(s){
    let n= s.length;
    let mul=factorial(n)
    //populateAndIncreaseCount(count, s);
    function populateAndIncreaseCount(count,s)
        {
    let i;
   
        for (i = 0; i < s.length; ++i)
            ++count[s[i].charCodeAt(0)];
   
        for (i = 1; i < MAX_CHAR; ++i)
            count[i] += count[i - 1];
        }

    let res=0;



    for(let i=0;i<n;i++){
        mul = Math.floor(mul/(n - i));
        res= res+count[s[i].charCodeAt(0)-1]*mul
        updateCount(s[i],count)

    }
    return res;
    


}
let str='string'.split('')
console.log(rank('str'))*/
let MAX_CHAR = 256;
var count = new Array(MAX_CHAR).fill(0)
         
  
 // A utility function to find factorial of n
function fact(n)
{
    return (n <= 1) ? 1 : n * fact(n - 1);
}
  
// Construct a count array where value at every index
    // contains count of smaller characters in whole string
function populateAndIncreaseCount(count,str)
{
    let i;
   
        for (i = 0; i < str.length; ++i)
            ++count[str[i].charCodeAt(0)];
   
        for (i = 1; i < MAX_CHAR; ++i)
            count[i] += count[i - 1];
}
  
// Removes a character ch from count[] array
    // constructed by populateAndIncreaseCount()
function updatecount(count,ch)
{
    let i;
        for (i = ch.charCodeAt(0); i < MAX_CHAR; ++i)
            --count[i];
}
  
// A function to find rank of a string in all permutations
    // of characters
function findRank(str)
{
    let len = str.length;
        let mul = fact(len);
        let rank = 1, i;
   
        // all elements of count[] are initialized with 0
       
          
        // Populate the count array such that count[i]
        // contains count of characters which are present
        // in str and are smaller than i
        populateAndIncreaseCount(count, str);
   
        for (i = 0; i < len; ++i) {
            mul = Math.floor(mul/(len - i));
   
            // count number of chars smaller than str[i]
            // from str[i+1] to str[len-1]
            rank += count[str[i].charCodeAt(0) - 1] * mul;
   
            // Reduce count of characters greater than str[i]
            updatecount(count, str[i]);
        }
   
        return rank;
}
  
// Driver code
//let str= "string".split("");
console.log(findRank("tseb"))

