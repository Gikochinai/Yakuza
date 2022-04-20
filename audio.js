var container = document.getElementById('Audio')
var audio = document.getElementById('Persona5');

$(container).click(function(){
   if(audio.paused){
       audio.play();
      container.src="backgroundimg/pausebtn.png";
   }else{
     audio.pause();
     container.src="backgroundimg/Playbtn.png";
   }

});
