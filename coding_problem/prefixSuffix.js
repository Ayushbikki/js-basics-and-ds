 function common(st){
    let n =st.length;
    
    let p='';
    let s='';
    let ans;
    for(let i=0;i<n-1;i++){
        p=p.concat(st[i])
        console.log({p})
        s=st[n-1-i]+s
        //s=s.concat(st[n-1-i]).split('').reverse().join('')
        console.log({s})
        if(p===s){
        ans=p.length
        console.log({ans})
        
       // console.log({s})
        }
        
    }
    return ans;
    

 }
 console.log( 'ans is',common('abcab '))