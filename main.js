var a=['abc1.jpg',
      'A2.jpg',
       'A3.jpg',
       'A4.jpg',
       'A5.jpg'];
       
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
