dodocument.addEventListener('DOMContentLoaded', function() {
  const loginContainer = document.getElementById('login-container');
  const forumContainer = document.getElementById('forum-container');
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simplemente verifico si el campo de nombre de usuario no está vacío
  if (username.trim() !== '') {
    loginContainer.classList.add('hidden');
    forumContainer.classList.remove('hidden');
  }

  // Redirigir a la página de inicio
  window.location.href = 'pagina_inicio.html';
});

  const voiceButton = document.getElementById('voice-button');
  voiceButton.addEventListener('click', function() {
    if (annyang) {
      var voices;

      var utter = new SpeechSynthesisUtterance();
      utter.rate = 1;
      utter.pitch = 0.5;
      utter.lang = 'es-AR';

      window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
      };

      var commands = {
        'hola maria': function () {
          utter.text = 'Hola usuario';
          utter.voice = voices[0];
          window.speechSynthesis.speak(utter);
        },
        'como estas': function () {
          utter.text = 'Muy bien!';
          utter.voice = voices[0];
          window.speechSynthesis.speak(utter);
        },
        'hola': function () {
          utter.text = 'hola, cual es tu nombre?';
          utter.voice = voices[0];
          window.speechSynthesis.speak(utter);
          annyang.addCallback('result', function (phrases) {
            console.log("Nombre: ", phrases[0]);
            annyang.removeCallback('result');
            utter.text = 'Hola, ' + phrases[0];
            window.speechSynthesis.speak(utter);
          });
        },
        'cuentame un chiste': function () {
          chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
            'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
            'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
            'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
          ];
          utter.text = chistes[Math.floor(Math.random() * chistes.length)]
          utter.voice = voices[2];
          window.speechSynthesis.speak(utter);
        }
      };

      annyang.addCommands(commands);

      annyang.start({ autoRestart: false, continuous: true });
    }
  });
});



/*//aqui empieza
document.addEventListener('DOMContentLoaded', function () {
    const loginContainer = document.getElementById('login-container');
    const forumContainer = document.getElementById('forum-container');
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Aquí puedes realizar la validación del inicio de sesión utilizando una base de datos o algún otro método.

        // Simplemente verificaré si el campo de nombre de usuario no está vacío para el ejemplo.
        if (username.trim() !== '') {
            loginContainer.classList.add('hidden');
            forumContainer.classList.remove('hidden');
        }
    });
}*/


//annyang
/*if (annyang) {

    //Variable para almacenar las voces de nuestro sistema.
    var voices;

    //Inicializamos utter.
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es-AR';

    //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };

    //Definimos los comandos a utilizar.
    var commands = {
        'hola maria': function () {
            utter.text = 'Hola usuario';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[0];
            window.speechSynthesis.speak(utter);
        },
        'como estas': function () {
            utter.text = 'Muy bien!';
            utter.voice = voices[0];
            window.speechSynthesis.speak(utter);
        },
        'hola': function () {
            utter.text = 'hola, cual es tu nombre?';
            utter.voice = voices[0];
            window.speechSynthesis.speak(utter);
            //Guarda el nombre que le decimos por voz.
            annyang.addCallback('result', function (phrases) {
                //Imprime el nombre por consola.
                console.log("Nombre: ", phrases[0]);
                //Para el evento result.
                annyang.removeCallback('result');
                //Nos dice hola + el nombre que le digamos por voz.
                utter.text = 'Hola, ' + phrases[0];
                window.speechSynthesis.speak(utter);
            });
        },
        //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
        'cuentame un chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        }
    };

    //Esto nos sirve para ver que escucha el programa en tiempo real.
    /*
    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
       });
       */


    //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);

    //Annyang comienza a escuchar.
    annyang.start({ autoRestart: false, continuous: true });
}*/
