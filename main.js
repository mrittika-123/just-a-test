var a=['img/abc1.jpg',
      'img/A2.jpg',
       'img/A3.jpg',
       'img/A4.jpg',
       'img/A5.jpg'];
       
   var c=0;
setInterval(slide,2300);
function slide(){ 
   document.getElementById('first').src=a[c];
  //setInterval count one index extra by default
 if(c<4){
    c=c+1;
  }
  else{
   c=0;
  }
}