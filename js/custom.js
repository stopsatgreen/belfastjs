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

  var syn3txt = 'Hello Belfast J.S. my name is Peter thank you for having me',
      syn3say = new SpeechSynthesisUtterance(syn3txt),
      syn3speak = window.speechSynthesis;

  document.querySelector('#synthesis3 button').onclick = function () {
    if (syn3speak.paused) {
      syn3speak.resume();
    } else if (syn3speak.speaking) {
      syn3speak.pause();
    } else {
      syn3speak.speak(syn3say);
    }
  };

  var syn4txt = 'Hello Belfast J.S. my name is Peter thank you for having me',
      syn4out = document.querySelector('#synthesis4 output'),
      syn4say = new SpeechSynthesisUtterance(syn4txt),
      syn4speak = window.speechSynthesis;

  syn4say.onstart = function () {
    syn4out.textContent = 'Start';
  };

  syn4say.onpause = function () {
    syn4out.textContent = 'Pause';
  };

  syn4say.onresume = function () {
    syn4out.textContent = 'Resume';
  };

  syn4say.onend = function () {
    syn4out.textContent = 'End';
  };

  document.querySelector('#synthesis4 button').onclick = function () {
    if (syn4speak.paused) {
      syn4speak.resume();
    } else if (syn4speak.speaking) {
      syn4speak.pause();
    } else {
      syn4speak.speak(syn4say);
    }
  };

  var rec1 = new webkitSpeechRecognition();
  rec1.onresult = function (result) {
    document.querySelector('#recognition1 output').textContent = result.results[0][0].transcript;
    rec1.stop();
  };
  document.querySelector('#recognition1 button').onclick = function () {
    rec1.start();
  };

  var rec2 = new webkitSpeechRecognition();
  rec2.onstart = function () {
    Reveal.nextFragment();
  };
  rec2.onaudiostart = function () {
    Reveal.nextFragment();
  };
  rec2.onsoundstart = function () {
    Reveal.nextFragment();
  };
  rec2.onspeechstart = function () {
    Reveal.nextFragment();
  };
  rec2.onspeechend = function () {
    Reveal.nextFragment();
  };
  rec2.onsoundend = function () {
    Reveal.nextFragment();
  };
  rec2.onaudioend = function () {
    Reveal.nextFragment();
  };
  rec2.onend = function () {
    Reveal.nextFragment();
  };
  document.querySelector('#recognition2 button').onclick = function () {
    rec2.start();
  };

//
});
