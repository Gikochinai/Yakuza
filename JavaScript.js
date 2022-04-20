var course = document.querySelector('.course-dialogue');
var about = document.querySelector('.about-dialogue');
var images1 = ['Ann-dialogue1.png', 'Ann-dialogue2.png', 'Ann-dialogue3.png', 'Ann-dialogue4.png', 'Ann-dialogue5.png', 'Ann-dialogue6.png'];
var images = ['Ann-dialogue1.png', 'Ann-dialogue2.png', 'Ann-dialogue3.png', 'Ann-dialogue4.png', 'Ann-dialogue5.png', 'Ann-dialogue6.png', 'Ann-dialogue7.png'];
var i = 0;
var j = 0;


$("#next-dialogue").click(function(){
  if(i >= images.length-1) i = -1;
  i++;
  return setIMG();
});

function setIMG(){
  return course.setAttribute('src', 'persona 5 ann takamaki text box/Course/' + images[i]);
}

$("#next-dialogue1").click(function(){
  if(j >= images1.length-1) j = -1;
  j++;
  return setIMG1();
});

function setIMG1(){
  return about.setAttribute('src', 'persona 5 ann takamaki text box/About/' + images[j]);
}
