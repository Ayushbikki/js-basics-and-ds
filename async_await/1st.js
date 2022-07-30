//async function test() {
    let test= async function() {//can be written in this way also
   return "testing"
}
//test() //if we don't return from async func then it will treated as normal func

//console.log(test())
//test().then((res)=> console.log(res))
//know await
/*async function hello(){
    console.log('1')
    await console.log('2')
    console.log('3')

}
hello()
console.log('4')
console.log('5')
//out   1,2,4,5,3 // after await statem it will wait,until then other statement will exexute*/
async function getData(){
    console.log('processing')
    //console.log('a')
  const res= await fetch("/json/1st.json")
  console.log('b')
  let stu=  await res.json()
   return stu
}
console.log("1")
console.log(getData())
console.log('2')
console.log('3')
//console.log(data)
console.log('last')