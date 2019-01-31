var box =  document.querySelector('.bouncebox');
var disp = document.querySelector('.display');

box.addEventListener('click', function(){
        box.classList.add('playing');
  });   

box.addEventListener('animationstart', onAnimationStart);
box.addEventListener('webkitAnimationStart', onAnimationStart);

box.addEventListener('animationiteration', onAnimationIteration);
box.addEventListener('webkitAnimationIteration', onAnimationIteration);

box.addEventListener('animationend', onAnimationEnd);
box.addEventListener('webkitAnimationEnd', onAnimationEnd);

function onAnimationStart(e) {
  disp.textContent += "Drilboren en heipalen overstemmen mijn ademhaling. " + "\n";
}

function onAnimationIteration(e) {
   disp.textContent += "Een delegatie Japanse toeristen moet er langs. " + "\n"; 
}

function onAnimationEnd(e) {
  box.classList.remove('playing');  
  disp.textContent += " Ze hebben allemaal van die driehoekige posterdozen"+"\n" ;
}








