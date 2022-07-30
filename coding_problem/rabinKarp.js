/*
let d= 256
function search(pat,text,q){

    let n1=pat.length
    let n2= text.length
    let p=0;  // rolling value for pattern
    let t=0 // rolling value for text
    let h=1;
//rolling hash .i.e it can be 26 but for more significant interger
    for(let i=0;i<n1;i++){
        h=(h*d)%q

    }
    //calculate the hash value of patterb and first window text
    for(let i=0;i<n1;i++){
        p=(d*p+(pat[i]*h)%q)
        t=(d*t+(text[i]*h)%q)
    }

    for(let i=0;i<n2-n1;i++){
        // Check the hash values of current window of text 
		// and pattern. If the hash values match then only 
		// check for characters on by one 
        if(p===t){
            for(let j=0;j<n1;j++){
            if(text[i+j]!==pat[j])
                break;
            }
            if(j===n1){
                console.log('patten found at',i)
            }
        }
        if(i<n1-n2){
            t=(d(t-text[i].charCodeAt()*h)+text[i+n2].charCodeAt())%q
        }
        // for handling negative value of t
        if (t < 0) 
			t = (t + q); 
    }
}

let text = "GEEKS FOR GEEKS"; 
	let pat = "GEEK"; 
	let q = 101; // A prime number 
	console.log(search(pat, text, q))
*/
    let d = 256; 
  
/* pat -> pattern 
    txt -> text 
    q -> A prime number 
*/
function search(pat, txt, q) 
{ 
    let M = pat.length; 
    let N = txt.length; 
    let i, j; 
      
    // Hash value for pattern 
    let p = 0; 
      
    // Hash value for txt 
    let t = 0; 
    let h = 1; 
  
    // The value of h would be "pow(d, M-1)%q" 
    for(i = 0; i < M - 1; i++) 
        h = (h * d) ; 
  
    // Calculate the hash value of pattern and 
    // first window of text 
    for(i = 0; i < M; i++) 
    { 
        p = (d * p + pat[i].charCodeAt()) ; 
        t = (d * t + txt[i].charCodeAt()) ; 
    } 
  
    // Slide the pattern over text one by one 
    for(i = 0; i <= N - M; i++) 
    { 
  
        // Check the hash values of current
        // window of text and pattern. If the
        // hash values match then only 
        // check for characters one by one 
        if (p == t) 
        { 
              
            /* Check for characters one by one */
            for(j = 0; j < M; j++) 
            { 
                if (txt[i+j] != pat[j]) 
                    break; 
            } 
  
            // if p == t and pat[0...M-1] = 
            // txt[i, i+1, ...i+M-1] 
            if (j == M) 
                 document.write("Pattern found at index " + 
                                i + "<br/>"); 
        } 
  
        // Calculate hash value for next window 
        // of text: Remove leading digit, add 
        // trailing digit 
        if (i < N - M) 
        { 
            t = (d * (t - txt[i].charCodeAt() * h) + 
                      txt[i + M].charCodeAt()) ; 
  
            // We might get negative value of t, 
            // converting it to positive 
            if (t < 0) 
                t = (t + q); 
        } 
    } 
} 
  
// Driver code
let txt = "GEEKS FOR GEEKS";
let pat = "GEEK";
  
// A prime number
let q = 101; 
  
// Function Call
search(pat, txt, q);