// OBRA ESCOGIDA: LEGO BATMAN
// Películas y videojuegos creados y desarrollados en Estados
// Unidos basados en la versión de Batman en el universo LEGO.
// El personaje de Batman fue creado por Bob Kane
// y Bill Finger en 1939.
// "The Lego Batman Movie" fue creada por el director Chris
// McKay y producida por Warner Bros. Pictures, junto a DC Comics
// y LEGO en 2017.
// Los videojuegos de Lego Batman fueron desarrollados por
// la compañía TT Games y publicado por Warner Bros. Games.
// El primer juego de Lego Batman salió en 2008, "Lego Batman 2:
// DC Super Heroes" fue lanzado en 2012 y "Lego Batman 3: Beyond
// Gotham" fue lanzado en 2014.

// variable permite que la imagen con el
// personaje mirando a la derecha exista
// https://p5js.org/reference/p5/let/
let batman1;

// variable permite que la imagen con el
// personaje mirando a la izquierda exista
// https://p5js.org/reference/p5/let/
let batman2;

// variable define cuál es la imagen
// actual del personaje
// https://p5js.org/reference/p5/let/
let batmanActual;

// variable que permite que la imagen con la
// batiseñal exista
// https://p5js.org/reference/p5/let/
let batsign;

// variable que controla si la imagen aparece o no
// https://p5js.org/reference/p5/let/
let mostrarBatsign = true;

// variable permite que la imagen con el
// fondo noche 1 exista
// https://p5js.org/reference/p5/let/
let fondoNoche1;

// variable permite que la imagen con el
// fondo de noche 2 exista
// https://p5js.org/reference/p5/let/
let fondoNoche2;

// establece variable de fondo activo
// https://p5js.org/reference/p5/let/
let fondoActual;

// variable define velocidades de ejes
// https://p5js.org/reference/p5/let/
let velocidad = 1;
let velocidadY = 1;

// variable establece direcciones del
// personaje en los ejes
// https://p5js.org/reference/p5/let/
let dirX = 1;
let dirY = 1;

// variable establece el intervalo en
// milisegundos para el cambio de fondo
// - 1000 milisegundos equivalen a un segundo
// https://p5js.org/reference/p5/let/
let intervaloFondo = 2000;

// guarda el momento en el que se realiza el ultimo cambio del fondo
// p5 comparar entre tiempo actual - tiempo del último cambio
// así sabe si ya pasó el tiempo suficiente para volver a cambiar el fondo
// https://p5js.org/reference/p5/let/
let ultimoCambio = 0;

// variable establece la posición horizontal (eje X)
// y vertical (eje Y) del personaje
// https://p5js.org/reference/p5/let/
let posX = 0;
let posY = 0;

// variable que establece la posición horizontal (eje X)
// y vertical (eje Y) del mouse
// https://p5js.org/reference/p5/let/
let mousePosX = 0;
let mousePosY = 0;

// https://p5js.org/reference/p5/setup/
function setup() {
  createCanvas(800, 600);

  // se cargan las imagenes del personaje con ambas direcciones
  // https://p5js.org/reference/p5/loadImage/
  // link:
  // https://cl.pinterest.com/pin/983614374883971778/
  batman1 = loadImage("batman1.png");
  batman2 = loadImage("batman2.png");

  // se carga la imagen de la batiseñal
  // https://p5js.org/reference/p5/loadImage/
  // link:
  // https://cl.pinterest.com/pin/983614374883990150/
  batsign = loadImage("batsign.png");

  // se establece la imagen inicial del personaje
  batmanActual = batman1;

  // carga fondos con variables de noche 1 y noche 2
  // https://p5js.org/reference/p5/loadImage/
  // links:
  // fondo noche 1: https://www.behance.net/gallery/46964645/The-LEGO-Batman-Movie-CGI-Illustration?utm_source=Pinterest&utm_medium=organic
  // fondo noche 2: https://www.behance.net/gallery/46964645/The-LEGO-Batman-Movie-CGI-Illustration?utm_source=Pinterest&utm_medium=organic
  fondoNoche1 = loadImage("fondo noche 1.jpg");
  fondoNoche2 = loadImage("fondo noche 2.jpg");

  // establece el fondo de la noche inicial
  fondoActual = fondoNoche1;

  // oculta el cursor dentro del canvas
  // https://p5js.org/reference/p5/noCursor/
  noCursor();
}

// https://p5js.org/reference/p5/draw/
function draw() {
  // genera el fondo actual - inicial
  // (posX, posY, ancho y alto)
  // https://p5js.org/reference/p5/image/
  image(fondoActual, 0, 0, width, height);

  // variable que crea y repite las particulas flotando dentro del canvas
  // https://p5js.org/reference/p5/for/
  for (let i = 0; i < 45; i++) {
    // calcula la posición horizontal (eje X) de cada partícula
    // con sin añade movimientos con la función seno
    // https://p5js.org/reference/p5/sin/
    let x = (i * 97 + sin(frameCount * 0.02 + i) * 30) % width;

    // calcula la posición vertical (eje Y) de cada partícula
    let y = (i * 53 + frameCount * 0.25) % height;

    // define el valor de relleno de las partículas en RGB
    // color (rojo, verde, azul, transaprencia)
    // https://p5js.org/reference/p5/fill/
    fill(31, 89, 163, 180);

    // dibuja las elipses que serán las partículas
    // https://p5js.org/reference/p5/ellipse/
    ellipse(x, y, 5, 5);
  }

  // variable que repite y guarda la posición actual del mouse
  // varias veces en su eje horizontal (eje X) y vertical (eje Y)
  // https://p5js.org/reference/p5/for/
  for (let i = 0; i < 10; i++) {
    mousePosX = mouseX;
    mousePosY = mouseY;
  }

  // combina un ciclo con una condicion para controlar cuando
  // aparece y desaparece la imagen de la batiseñal
  // si la variable es igual a true aparece y si
  // la variable es false desaparece del canvas
  // https://p5js.org/reference/p5/for/
  // referencias:
  // https://github.com/disenoUDP/dis09214-2026-1-seccion-4/tree/main/00-docentes/sesion-09
  // hecho con ayuda de chatgpt
  // prompts dados a la ia:
  // "como hago que la imagen batiseñal reemplace al ellipse y se mueva con el mouse. manteniendo el for"
  // prueba: https://editor.p5js.org/belofii/sketches/pBcOp18PR
  // "tengo este codigo, pero quiero que al hacer click, la imagen de batsign desaparezca y al hacer click de nuevo vuelva a aparecer y eso hacerlo todo el tiempo, usando for"
  // prueba: https://editor.p5js.org/belofii/sketches/Cx72wsIp
  for (let i = 0; i < 1; i++) {
    if (mostrarBatsign == true) {
      // dibuja la batiseñal, define su posición horizontal (eje X)
      // y su posición vertical (eje Y)
      // se le resta 100 para que la imágen quede al centro del cursor
      // (200, 200) indican el ancho y el alto de la imágen
      // https://p5js.org/reference/p5/image/
      image(batsign, mousePosX - 100, mousePosY - 100, 200, 200);
    }
  }

  // dibuja el personaje actual - inicial, define su posición
  // horizontal (eje X) y su posición vertical (eje Y)
  // (210, 210) indican el ancho y el alto de la imágen
  // https://p5js.org/reference/p5/image/
  image(batmanActual, posX, posY, 210, 210);

  // regula el movimiento horizontal (eje X) del personaje
  posX = posX + velocidad * dirX;

  // regula el movimiento vertical (eje Y) del personaje
  posY = posY + velocidadY * dirY;

  // condición que controla el rebote en el eje
  // horizontal hasta rebotar a la izquierda
  // https://p5js.org/reference/p5/if/
  // hecho con ayuda de chatgpt
  // prompt dado a la ia:
  // "necesito que cada vez que la imagen de batman, que empieza en la izquierda, cuando rebote en el lado derecho, cambie a otra imagen, y cuando esa imagen toque el lado izquierdo vuelva a la otra"
  if (posX > (width * 4) / 5 - 100) {
    // cambia la dirección hacia la izquierda
    dirX = -1;

    // cambia imagen del personaje de dirección
    batmanActual = batman2;

    // parametro que regula velocidad horizontal
    // de manera aleatoria
    // hecho con ayuda de chatgpt
    // prompt dado a la ia:
    // "ahora necesito que la velocidad de estas dos imagenes vaya aumentando y disminuyendi de forma random"
    velocidad = random(0.5, 1);
  }

  // condición controla el rebote en el eje
  // horizontal hasta rebotar a la derecha
  // https://p5js.org/reference/p5/if/
  if (posX < (width * 1) / 5) {
    // cambia la dirección hacia la derecha
    dirX = 1;

    // cambia imagen del personaje de dirección
    batmanActual = batman1;

    //regula la velocidad horizontal
    // de manera aleatoria
    velocidad = random(1, 8);
  }

  // condición controla el rebote en el eje
  // vertical hasta rebotar abajo
  // https://p5js.org/reference/p5/if/
  // hecho con ayuda de chatgpt
  // prompt dado a la ia:
  // "ahora necesito que este rebote horizontal también pase de forma vertical, que se genere la ilusión de un ascenso, vuelo, y al topar con estos lados, derechos e izquierdo, se devuelva hacia el otro lado, como ya lo hace, pero que ademas ascienda y descienda"
  if (posY > height - 180) {
    // cambia dirección del personaje vertical hacia arriba
    dirY = -1;

    // regula la velocidad vertical de
    // manera aleatoria
    velocidadY = random(1, 8);
  }

  // condición controla el rebote en el eje
  // vertical hasta rebotar arriba
  // https://p5js.org/reference/p5/if/
  if (posY < 0) {
    // cambia dirección del personaje vertical hacia abajo
    dirY = 1;

    // regula la velocidad vertical de
    // manera aleatoria
    velocidadY = random(0.5, 1);
  }

  // parametro que genera el cambio automático del fondo
  // si ya pasó el tiempo establecido - el fondo cambia
  // https://p5js.org/reference/p5/if/
  // https://p5js.org/reference/p5/millis/
  // hecho con ayuda de chatgpt
  // prompt dado a la ia:
  // "quiero subir otra imagen de fondo y asi el fondo alternará entre estas dos cada cierto intervalo de tiempo que pueda modificar"
  if (millis() - ultimoCambio > intervaloFondo) {
    // alterna entre variables de fondo noche 1 y noche 2
    if (fondoActual == fondoNoche1) {
      fondoActual = fondoNoche2;

      // si el fondo está en la noche 1 - cambia a noche 2;
      // si es de noche 2 - cambía a noche 1
      // esto permite esta ida y vuelta entre noche 1 y noche 2
      // sin 'else' el fondo cambiaría solo una vez
    } else {
      fondoActual = fondoNoche1;
    }

    // guarda el tiempo actual
    // https://p5js.org/reference/p5/millis/
    ultimoCambio = millis();
  }

  // líneas guía invisibles que delimitan la area de rebote del personaje
  // https://p5js.org/reference/p5/noStroke/
  noStroke();

  line((width * 1) / 5, 0, (width * 1) / 5, height);

  line((width * 4) / 5, 0, (width * 4) / 5, height);
}

// función que se ejecuta cuando se hace click con el mouse
// controla si la imagen de la batiseñal aparece o no
// en la pantalla
// // https://p5js.org/reference/p5/mousePressed/
function mousePressed() {
  mostrarBatsign = !mostrarBatsign;
}
