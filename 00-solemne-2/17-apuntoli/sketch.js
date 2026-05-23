// Obra referencia: película "Una noche en el museo", Shawn Levy, (2006) 🗿
// En esta película hay un moai que cobra vida y pide chicle
// y si el guardia Larry no le da, lo llama Dum-Dum (tontón)

// Aquí el moai mastica chicle
// y si mantienes apretado el click lo infla como globo
// El chicle explotará en algún momento aleatorio
// Si el chicle supera un determinado tamaño "mmm gum gum",
// si no, "Dum Dum"
// (está en inglés para que el juego de palabras funcione mejor)

// utilizo let para declarar la variable para la imagen del fondo
// en este caso la imagen del museo
// fuente de imagen: https://paraquenomeolvide2.blogspot.com/2016/06/noche-en-el-museo.html
// imagen modificada con chatgpt
// prompt:crea una imagen únicamente del fondo de esta, de frente, sin la persona ni el moai

let museo;

// nuevamente let, para la imagen del moai
// y su boca por separado
// fuente de imagen: https://doblaje.fandom.com/es/wiki/Una_noche_en_el_museo?file=Moai_NATM.jpg
// imagen modificada con chatgpt y photoshop
// prompt:mejora la calidad de esta imagen y elimina el fondo dejando solo el moai
// prompt:extrae la boca del moai y genera dos imágenes, una del moai sin boca y otra de la boca sola

let moai;
let boca;

// nuevamente let para cargar la imagen del cursor
// unas pastillas de chicle
// fuente de imagen: https://es.wikipedia.org/wiki/Goma_de_mascar#/media/Archivo:Kaugummis_cropped.jpg
// imagen modificada en photoshop, eliminé el fondo y reduje a 35x35 pixeles

let chicle;

// nuevamente let esta vez para la tipografía
// fuente: Barlow Condensed
// Copyright 2017 The Barlow Project Authors (https://github.com/jpt/barlow)
// referencia: https://p5js.org/es/reference/p5/p5.Font/

let font;

// ahora voy a poner una variable para la elipse del chicle
// esta determina el valor inicial del chicle
// que más adelante se puede observar que esta posicionada
// en el valor que determina el tamaño de ellipse()
// referencias:https://www.youtube.com/watch?v=7ZU4gGCmnr0
// https://p5js.org/reference/p5/ellipse/

let x = 5;

// utilizo let para guardar el tamaño en que el chicle va a explotar
// este valor se genera con random() cada vez que se aprieta el click
// por eso parte en 0, aun no se ha definido ningun limite

let explota = 0;

// utilizo let para saber si el chicle ya exploto o no
// parte en false porque al inicio del programa no ha pasado nada
// cambiara a true en el momento en que el chicle explote

let explotado = false;

// utilizo let para declarar un arreglo vacío
// este arreglo va a guardar las manchas de chicle cuando explote
// es como una lista que parte vacía
// y se va a llenar con 50 manchas aleatorias cuando el chicle explote

let manchas = [];

// utilizo let para contar los frames desde que el chicle explotó
// parte en 0 porque al inicio no ha explotado nada
// me servirá para saber cuanto tiempo llevan las manchas en pantalla

let timerExplosion = 0;

// ahora voy a cargar todas las imágenes y la fuente
// para poder usarlas posteriormente
// se usa preload porque de esa manera el programa espera a que carguen
// y no corre antes, porque si no fuera así podrían no aparecer
// referencias: https://p5js.org/es/reference/p5/cursor/
// https://p5js.org/es/reference/p5/preload/

function preload() {
  museo = loadImage("museo.png");
  moai = loadImage("moai.png");
  boca = loadImage("boca.png");
  chicle = loadImage("chicle.png");
  fuente = loadFont("BarlowCondensed-Bold.ttf");
}

function setup() {
  // quiero que el canvas se adapte al tamaño de la imagen del museo
  // por lo tanto utilizo los pixeles de esa imagen (1224x980) como parámetros

  createCanvas(1224, 980);

  // voy a traer la imagen del cursor
  // para que el cursor sea un chicle
  // uso de IA claude: no lograba hacer que el cursor fuera la imagen del chicle
  // prompt: tengo esto:
  // let chicle;
  // function preload() {
  //   chicle = loadImage("chicle.png");
  // }
  // function setup() {
  //   cursor(chicle);
  // }
  // ya cargué la imagen con preload y la declaré con let
  // por qué no se ve el cursor como un chicle??
  // Respuesta: Porque cursor() en p5.js no acepta una variable de imagen directamente.
  // El cursor lo maneja el navegador, no p5, y el navegador solo entiende
  // una ruta de archivo en formato CSS. Hay que usarlo así: cursor('url(chicle.png), auto').

  cursor("url(chicle.png), auto");
}

// uso de IA claude: (le mande a la ia claude todo lo que llevaba del codigo hasta el momento)
// prompt: quiero que cuando el chicle explote aparezcan circulos rosados
// en posiciones aleatorias por toda la pantalla y que se queden fijos
// como lo hago? explicame cada paso y función
// Respuesta:
// let manchas = [];
// let timerExplosion = 0;
//
// function crearManchas() {
//   for (let i = 0; i < 50; i++) {
//     manchas.push({
//       x: random(width),
//       y: random(height),
//       d: random(30, 100),
//     });
//   }
// }
// if (explotado) {
//   for (let i = 0; i < manchas.length; i++) {
//     ellipse(manchas[i].x, manchas[i].y, manchas[i].d);
//   }
//   timerExplosion++;
//   if (timerExplosion > 180) {
//     explotado = false;
//     explota = 0;
//     x = 5;
//     manchas = [];
//     timerExplosion = 0;
//   }
//   return;
// }

// en base a el paso a paso comencé a escribir los comentarios según lo que iba entendiendo
// además de ir buscando tutoriales en paralelo

// esta corre cuando el chicle explota
// usa un for para crear 50 manchas aleatorias
// y las guarda en el arreglo manchas
// o sea en esto []

function crearManchas() {
  // for que se repite 50 veces, una por cada mancha
  // i parte en 0 y aumenta hasta llegar a 50

  for (let i = 0; i < 50; i++) {
    // push agrega un elemento al arreglo manchas
    // cada mancha tiene una posicion x, y, y un diámetro aleatorio

    manchas.push({
      x: random(width),
      y: random(height),
      d: random(30, 200),
    });
  }
}

function draw() {
  // ahora voy a colocar la imagen del museo como fondo
  // elimino background() porque la imagen del museo ya cubre todo el canvas
  // los primeros parámetros después de museo determinan las coordenadas
  // de la esquina superior izquierda de la imagen
  // y como la imagen mide lo mismo que el canvas pongo 0,0

  image(museo, 0, 0);

  // si el chicle explotó, muestra el moai con manchas encima
  // y el texto correspondiente segun el tamaño del chicle
  // luego de 2 segundos vuelve a la normalidad

  if (explotado) {
    image(moai, width / 3, 120, 400, 680);
    image(boca, 490, 520, 240, 85);

    // for que dibuja todas las manchas guardadas en el arreglo
    // manchas.length significa el largo de la lista de manchas
    // o sea 50
    // también así si la cantidad de manchas cambia, este for se adapta solo

    for (let i = 0; i < manchas.length; i++) {
      // noStroke para que no tengan trazo exterior
      // y fill del mismo color que el chicle que infla el moai

      noStroke();
      fill(255, 150, 180, 180);

      // manchas [i] significa la mancha de esa lista
      // cada vuelta i cambia para hacer una mancha distinta
      // x seria la horizontal, y vertical y d el diametro

      ellipse(manchas[i].x, manchas[i].y, manchas[i].d);
    }

    // ahora agregaré el texto
    // si el chicle supera un diametro de 500 pixeles
    // aparece como texto mmm... gum gum, si no, dum dum
    // referencias: https://p5js.org/reference/p5/text/
    // https://www.youtube.com/watch?v=-uSjb4_REDg
    // https://p5js.org/reference/p5/if/

    if (x >= 500) {
      // primero está el color del relleno
      // luego la fuente tipográfica
      // luego el tamaño del texto
      // luego la alineación dentro de este mismo texto
      // luego lo que va a decir el texto, y su posición en el canvas

      fill(250);
      textFont(fuente);
      textSize(100);
      textAlign(CENTER);
      text("Mmm... gum gum", width / 2, 905);

      // ahora con la otra opción de texto, que es la de tontón
      // se va a ver igual que el anterior
      // pero la posición es distinta por la diferencia de largo entre ellos
    } else {
      fill(250);
      textFont(fuente);
      textSize(100);
      textAlign(CENTER);
      text("¡Dum Dum!", width / 2, 905);
    }

    // contar frames desde la explosión
    // sin este contador las manchas se quedarian pegadas para siempre
    // porque ++ suma 1 variable numérica

    timerExplosion++;

    // despues de 120 frames volver a la normalidad y resetear todo
    // lo que significa que van a pasar 2 segundos
    // para que todo vuelva a estar como antes

    if (timerExplosion > 120) {
      // el chicle ya no esta explotado, vuelve al estado normal

      explotado = false;

      // el límite de explosión se resetea a 0 para la próxima
      // y de esta forma es diferente cada vez

      explota = 0;

      // el diámetro del chicle vuelve a su valor inicial

      x = 5;

      // la lista de manchas se vacía para la próxima explosión

      manchas = [];

      // el timer vuelve a 0 para contar desde cero la próxima vez

      timerExplosion = 0;
    }

    // hay que salir de draw con return
    // para no dibujar nada más encima de las manchas
    // sin esto el draw seguiría corriendo y dibujaría al moai encima de las manchas
    // referencias: https://www.w3schools.com/Jsref/jsref_return.asp
    // https://medium.com/@mvtercero85/cuando-usar-return-en-javascript-7b80e025eb7f

    return;
  }

  // ahora voy a colocar la imagen del moai
  // y posicionarlo de manera en la que coincida con el fondo
  // probé tanto con las coordenadas x-y, como con el tamaño
  // hasta que se ajustó a lo que tenía en mente

  image(moai, width / 3, 120, 400, 680);

  // uso el módulo % para crear un ciclo repetitivo de 30 frames
  // lo que significa que el ciclo completo dura medio segundo
  // cuando frameCount llega a 30 vuelve a 0 y repite y repite y repite
  // no me acordaba muy bien como funcionaba
  // pero usé de referencia mi solemne pasada para recordar
  // también usé otras referencias: https://www.youtube.com/watch?v=B-N-isc31Z0
  // https://p5js.org/es/reference/p5/frameCount/
  // https://www.codecademy.com/learn/learn-p5js/modules/p5js-animation/cheatsheet

  let ciclo = frameCount % 30;

  // si el mouse no esta presionado, la boca mastica usando el ciclo
  // si esta presionado, la boca se detiene porque esta soplando el chicle
  // jugué y varié los parámetros de image ()
  // hasta llegar a la posición que buscaba

  // si el mouse NO esta presionado la boca mastica
  // por eso se utiliza el operador !, que significa not

  if (!mouseIsPressed) {
    // si el ciclo esta en la primera mitad
    // o sea menor a 15 frames
    // la boca baja y se expande
    // jugué y varié los parámetros de image ()
    // hasta llegar a la posición que buscaba

    if (ciclo < 15) {
      image(boca, 510, 510, 200, 85);

      // si no, o sea que el frameCount está en la otra mitad del ciclo
      // la boca sube y se contrae
      // simulando el masticar
      // y nuevamente fui probando con los valores para la posición
    } else {
      image(boca, 490, 520, 240, 85);
    }

    // si el mouse esta presionado la boca se queda fija
    // en la posición contraída
    // porque el moai esta soplando el chicle
  } else {
    image(boca, 510, 510, 200, 85);
  }
  // colocaré un if para determinar si el mouse esta presionado o no
  // en caso de ser así, va a condicionar lo de más adelante
  // que en este caso es la elipse o chicle
  // referencia: https://editor.p5js.org/Msqcoding/sketches/SJO7bnJW4

  if (mouseIsPressed) {
    // esto solo corre una vez que se apreta el click
    // uso == y no = porque quiero comparar, no asignar un valor

    if (explota == 0) {
      // como el límite aun no esta definido, lo genero con random
      // los valores de random va a determinar entre que rango explotará el chicle
      // si o si va a explotar entre 10 y 800 diámetros de pixeles

      explota = random(10, 800);
    }

    // voy a dibujar la elipse para el chicle
    // referencia:https://www.youtube.com/watch?v=7ZU4gGCmnr0
    // uso x en el parámetro que determina el tamaño, para que pueda aumentar
    // con fill determinaré el color y opacidad (r,g,b y opacidad) quiero que sea rosado
    // también elimino el trazo de contorno con noStroke

    noStroke();
    fill(255, 150, 180, 180);
    ellipse(610, 560, x);

    // esta variable va a determinar que x aumente 8 cada vez que corra el código
    // más arriba determiné que x es 5
    // por lo tanto comienza en ese valor pero aumentará constantemente

    x = x + 8;

    // si x llegó al límite aleatorio, el chicle explota
    // uso > porque así x tiene que ser mayor al valor de explota
    // llamo a crearManchas para llenar el arreglo con 50 manchas aleatorias

    if (x > explota) {
      explotado = true;
      crearManchas();
    }
  } else {
    // pero si el mouse no esta presionado
    // el tamaño del chicle vuelve a su valor inicial
    // listo para comenzar desinflado la próxima vez que se aprete el click

    x = 5;
  }
  // por ultimo colocaré el texto que va a aparecer de manera constante
  // en este caso el diálogo del moai, que dice dum dum, give me gum gum
  // que en español dice: tontón, dame un chiclón... malísimo
  // utilizo la misma tipografía importada
  // pero en un tamaño menor
  fill(250);
  textFont(fuente);
  textSize(35);
  textAlign(CENTER);
  text("Dum Dum, give me gum gum!", width / 2, 903);

  // ahora el texto que invita a hacer click
  // va de la mano con la frase superior ya que el cursor es un chicle
  // entonces es como presionar para darle el chicle al moai
  // en este caso la tipografía es la que viene por defecto
  // con menos tamaño para que sea más sutil

  fill(250);
  textSize(20);
  textAlign(CENTER);
  text("(haz click)", width / 2, 943);
}
