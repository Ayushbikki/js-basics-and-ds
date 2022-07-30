function Anagram(s1,s2){
    s1=s1.split('').sort()
    s2=s2.split('').sort()
    let n1=s1.length
    let n2=s2.length
    if(n1!==n2) return false
    for (let i = 0; i < n1; i++){
        if (s1[i] != s2[i])
            return false;
    }
   
    return true;
}
let max_ch=256
function Anagram1(s1,s2){
    s1=s1.split('')
    s2=s2.split('')
    let n1=s1.length;
    let n2=s2.length

    let count1= new Array(max_ch).fill(0)
   

    if(n1!==n2) return false;
    for(let i=0;i<n1;i++){
        count1[s1[i].charCodeAt(0)]++;

    }
    for(let j=0;j<n2;j++){
        count1[s2[j].charCodeAt(0)]--;
    }
    for(let k=0;k<max_ch;k++){
        if(count1[k]!==0) return false;
    }
    return true;


}
console.log(Anagram1('geeksforgeeks','forgeeksgeeks'))
console.log(Anagram1('geeksforgeeks','forgeeksgeiki'))
console.log(Anagram1('geeksforgeeks','forgeeksgeek'))