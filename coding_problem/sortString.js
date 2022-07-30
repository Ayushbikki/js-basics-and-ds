let s='this is good';
console.log(s.split(''))
console.log(s.split('').sort().join('')) // ['t', 'h', 'i', 's', ' ', 'i', 's', ' ', 'g', 'o', 'o', 'd']
let t=s.replaceAll(' ','').split('').sort().join('-')
console.log({t})
let w= s.split(' ').sort()
console.log({w,s})
let s2='good'
console.log(s2.split('').sort()) //['d', 'g', 'o', 'o']
console.log(s2.split('').sort().join('')) // dgoo


//revise
/*

let st='abcd'
let n=st.length
for(let i=0;i<n;i++){
    console.log(st[i]) // a b c d
    console.log(st.charAt(i)) //  a b c d
}*/