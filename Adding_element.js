const no =[3,4];
//from end
no.push(5,6);
//console.log(no) // 3,4,5,6
//from brgin
no.unshift(1,11);
//console.log(no) //1,11,3,4,5,6
//splice add in between
//from between
no.splice(2,0,'a','b');
console.log(no) //1,11,a,b,3,4,5,6
