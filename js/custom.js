Reveal.addEventListener( 'ready', function( event ) {
//
  Reveal.addEventListener( 'slidechanged', function( event ) {
    console.log(event);
  });

  document.querySelector('#synthesis1 button').onclick = function () {
    var txt = 'Hello Belfast J S',
        say = new SpeechSynthesisUtterance(txt);
    window.speechSynthesis.speak(say);
  };

  document.querySelector('#synthesis2 button').onclick = function () {
    var txt = 'Hello Belfast J S',
    say = new SpeechSynthesisUtterance(txt);
    say.lang = 'en-GB';
    say.pitch = 0.75;
    say.rate = 1.5;
    window.speechSynthesis.speak(say);
  };

  var synthesis3 = document.querySelector('#synthesis3 button');
  var syn3txt = 'Hello Belfast J.S. my name is Peter thank you for having me',
      syn3say = new SpeechSynthesisUtterance(syn3txt),
      syn3speak = window.speechSynthesis;

  synthesis3.onclick = function () {
    if (syn3speak.paused) {
      syn3speak.resume();
    } else if (syn3speak.speaking) {
      syn3speak.pause();
    } else {
      syn3speak.speak(syn3say);
    }
  };

//
});
