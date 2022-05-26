const vid = {
    title: 'abcd',
    play(){
        console.log(this)
    }
    
}
vid.stop = function(){
  console.log(this)
}
//function
function play1(){
  console.log(this)
}
//constructor function
 function Video(title){
   this.title=title;
   console.log(this)
 }
  

//vid.play()
//vid.stop();
//play1()
//Video('a')
//const v = new Video('a') //{}
// using higher order func in object, this refer to object,its properties
/*const music={
  title: 'a',
  tags: ['a','b','c'],
  showTags(){
   this.tags.forEach((ele)=>{
          console.log(this,ele);
  });
  }

};*/
// for normal function
const music ={
  title:'a',
  tags: ['a','b','c'],
  showTags(){
    this.tags.forEach(function(tags){
      console.log(this.title,tags)
    },this)
  }
}

music.showTags();