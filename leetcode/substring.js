var lengthOfLongestSubstring = function(s) {
    let n = s.length
     var res=0;
     var visited = new Array(264).fill(-1)
     console.log("visited is",visited)
     var i=0
     
     
      for(var j=0;j<n;j++){
          //let ans=0
          i=Math.max(i,(visited[s[j]]+1))
          //console.log("visited for",visited)
             var ans=j-i+1;
          res=Math.max(res,ans)
          visited[s[j]]=j;
         
          }
         return res;
        
    
};  
let a=lengthOfLongestSubstring('abcabcbb')
console.log(a)

var lengthOfLongestSubstring = function(s) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen;  
};