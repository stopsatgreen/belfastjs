Reveal.addEventListener( 'ready', function( event ) {
//

  document.querySelector('#synthesis1 button').onclick = function () {
    var txt = 'Hello Belfast J.S.',
        say = new SpeechSynthesisUtterance(txt);
    window.speechSynthesis.speak(say);
  };

  document.querySelector('#synthesis2 button').onclick = function () {
    var txt = 'Hello Belfast J.S.',
    say = new SpeechSynthesisUtterance(txt);
    say.lang = 'en-GB';
    say.pitch = 0.75;
    say.rate = 1.5;
    window.speechSynthesis.speak(say);
  };

  var syn3txt = 'Hello Belfast J.S. my name is Peter. Thank you for having me.',
      syn3say = new SpeechSynthesisUtterance(syn3txt),
      syn3speak = window.speechSynthesis;
  syn3say.lang = 'en-GB';

  document.querySelector('#synthesis3 button').onclick = function () {
    if (syn3speak.paused) {
      syn3speak.resume();
    } else if (syn3speak.speaking) {
      syn3speak.pause();
    } else {
      syn3speak.speak(syn3say);
    }
  };

  var syn4txt = 'Hello Belfast J.S. my name is Peter. Thank you for having me!',
      syn4out = document.querySelector('#synthesis4 output'),
      syn4say = new SpeechSynthesisUtterance(syn4txt),
      syn4speak = window.speechSynthesis;
  syn4say.lang = 'en-GB';

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
  document.querySelector('#recognition1 .trigger').onclick = function () {
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
  document.querySelector('#recognition2 .trigger').onclick = function () {
    rec2.start();
  };

  var rec3 = new webkitSpeechRecognition();
  rec3.interimResults = true;
  rec3.onresult = function (result) {
    if (result.results[0].isFinal) {
      rec3.stop();
    }
    document.querySelector('#recognition3 output').textContent = result.results[0][0].transcript;
  };
  document.querySelector('#recognition3 .trigger').onclick = function () {
    rec3.start();
  };

  function startWit () {

    var wit1 = new Wit.Microphone(document.querySelector('#wit1 #microphone'));
    wit1.onresult = function (intent, entities) {
      console.log(entities);
      var r = kv('intent', intent);

      for (var k in entities) {
        var e = entities[k];

        if (!(e instanceof Array)) {
          r += kv(k, e.value);
        } else {
          for (var i = 0; i < e.length; i++) {
            r += kv(k, e[i].value);
          }
        }
      }

      document.querySelector('#wit1 output').innerHTML = r;
    };

    wit1.connect('FMWVZZJC4OQNVUVDLAFHFB3J4KK2NQBX');

    function kv (k, v) {
      if (toString.call(v) !== '[object String]') {
        v = JSON.stringify(v);
      }
      return k + '=' + v + '\n';
    }
  }

  Reveal.addEventListener( 'slidechanged', function( event ) {
    if (event.currentSlide.id === 'wit1') {
      startWit();
    }
  });

//
});
