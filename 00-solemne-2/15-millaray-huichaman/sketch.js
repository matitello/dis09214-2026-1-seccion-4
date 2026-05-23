//SOLEMNE_02
//fecha de entrega 22.05.2026
//obra utilizada: portada sencillo "CRIMEN" de K4OS, girl group de argentina.
//https://www.google.com/search?sca_esv=3c760e260642725e&rlz=1C1ONGR_esCL1176CL1176&udm=2&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpn60DczFdcvPnuv8WQohHLTaMb_WtLz8zQ41bNqiqMK_0GCDA2eBSrpJajLJh54y7KaCHLPvoYcuFrrCOzk_nugrV4iIWfPa091uWzhe1c92-JzF-rN68BLKtfLAyu3BJu7h4s0gVaklPerkyVM83e84uGwH1ulfguqBOOfRuJJCY4EsZdnbfBWJGjulqj5odSFoSEQKGQl6CTwdYSr-gxd-x2on4&q=k4os+crimen&sa=X&sqi=2&ved=2ahUKEwir2o63ksuUAxXsq5UCHbnMJW4QtKgLegQIERAB&biw=1402&bih=667&dpr=1.37&sei=0WAParzpLOyo1sQPwr-rmQ8#sv=CAMSVhoyKhBlLWUwbjBOX29Mdm9MSzlNMg5lMG4wTl9vTHZvTEs5TToOWExneWd1NlVNZEd3Zk0gBCocCgZtb3NhaWMSEGUtZTBuME5fb0x2b0xLOU0YADABGAcglub-hANKCBABGAEgASgB

// el link de la canción es: https://www.youtube.com/watch?v=JQv8_9ZWlKo
//Trata de una chica que mata a su pareja luego de ser violentada por él. Por los versos de la canción eso ha pasado desde hace rato en su relación. Ella toma venganza por su sufrimiento y pérdida de libertad e identidad, y por último se arrepiente, ya que fue un acto impulsivo para librarse, pero nadie le cree.

//He decidido hacer esta canción porque me gusta y he estado muy pegada al grupo durante este último tiempo. También porque me hubiera gustado que fuera un poco más explicito el diseño, entonces he decidido probar eso y ver cómo se vería sin el color rojo, que me gusta el impacto que tiene en la portada original. No veo esto como un sí o un no, sino como un ¿qué pasaría si?

//Idea a desarrollar: tener un foco de luz como color central y que haya una silueta dentro de este.El texto se va a mover y va a tener otras dos versiones más oscuras, demostrando un poco como esta persona vivirá con el hecho de haber matado a alguien. Además me gustaría que cada vez que se mueva el mouse aumente (mouseMoved) el texto.

//Utilicé IA y añadí el link de la conversación al final del código

//primero vamos a cargar la tipografía
//https://p5js.org/es/reference/p5/loadFont/
let Blackward;
let Shade;
let Sparkle_Passion;

let imagen;
//let logo

//Debo definir unas variables para lograr que el texto aumente al mover el mouse
//variables para definir la cantidad de texto
//base= la cantidad que tiene de base
//aumento= cuánto se mueve el mouse (parte de 0)
//Movimiento= el segundo que se dejó de mover el mouse
let Base = 1;
let Aumento = 0;
let Movimiento = 0;

function preload() {
  Blackward = loadFont("Blackward.ttf");
  Shade = loadFont("Shade.ttf");
  Sparkle_Passion = loadFont("Sparkle_Passion.ttf");

  //aquí cargué la imagen del fondo
  //Notinor.com
  //(Página)
  //https://notinor.com/jujuy/se-entrego-karen-taboada-la-mujer-que-asesino-de-una-punalada-a-su-expareja/mujer-con-cuchillo/
  //(Imagen)
  //https://notinor.com/jujuy/wp-content/uploads/2022/05/mujer-con-cuchillo-750x423.jpg

  imagen = loadImage("mujer-con-cuchillo.jpg");

  //Aquí intenté añadir el logo
  //Pinterest - Gabo Cruz
  //(Página)
  //https://mx.pinterest.com/pin/45317539997406772/
  //(Imagen)
  //https://i.pinimg.com/736x/3f/b2/46/3fb24625af4ad89df9a6fa863b78d7b0.jpg
  //logo = loadImage('logo-k4os.jpg');
}

function setup() {
  createCanvas(640, 640);

  //Defino los fotogramas por segundo, sino la palabra se repite muy rápidamente
  frameRate(2);
}

function draw() {
  //añadimos fondo negro
  background(0, 0, 0);

  //lo siquiente será añadir esta luz de foco blanca-grisacea
  fill(200, 200, 200);
  //los parámetros son los siguientes:
  // x1,y1,x2,y2,x3,y3,x4,y4
  //https://p5js.org/reference/p5/quad/
  quad(600, 200, 600, 200, -120, 400, -120, 640);
  //difuminamos
  //parámetros (efecto, radio del efecto)
  //https://p5js.org/reference/p5/filter/
  filter(BLUR, 20);

  //Añadí la imagen y quería que se mezclara con el fondo negro para lograr este efecto de que se vea sólo lo del foco.
  //probé varios modos de fusión como: SOFT_LIGHT, ADD, SCREEN, todos los que salen en la referencia.
  //https://p5js.org/reference/p5/blendMode/
  //dejé el push y el pop porque si lo desactivo se me ve todo negro, no se porqué pasa eso.
  push();
  blendMode(OVERLAY);
  image(imagen, 1, 0, 900, 800);
  pop();

  //TRATÉ DE PONER EL LOGO PERO NO ENCONTRÉ UNO EN NEGRO CON BLANCO O PNG BLANCO
  // push();
  // blendMode()
  // image (logo, 520,550,100,100)
  // pop();

  //aquí ajusto el tamaño, y la alineación para los 3 textos
  textSize(150);
  textAlign(CENTER);

  //Pruebas de tipografía
  //textFont ('Sparkle_Passion');
  //textFont ('Shade');
  //https://p5js.org/reference/p5/textFont/
  textFont("Blackward");

  // si han pasado más de 0.01s sin mover el mouse, vuelve a estado normal o vuelve a 0 en la variable de aumento
  //al inicio sale second porque he definido esa unidad como medición de tiempo, en la referencia sale que sólo valores entre 0-59 pero me va mejor en 0.01 que 1 segundo
  //https://p5js.org/reference/p5/second/
  if (second() - Movimiento > 0.01) {
    Aumento = 0;
  }
  //Esta variable significa que cada vez que se mueva el mouse + la base, se repetirán los textos
  let cantidad = Base + Aumento;

  //Aquí para que los textos se vean más brillantes he decidido volver a usar el blendMode y ocupar el de adición, entonces cuando se posicionan en el "foco" se vuelven más brillantes.
  //he vuelto a dejar el push y el pop por la misma razón anterior, debe ser por algo del modo de fusión.
  //Cada for cuenta con diferentes opacidades para dar un efecto de eco y de algo que deja huella.
  //También tiene una intención de cambiar de lugar aleatoriamente, para que se haga un efecto de superposición, sombra o simplemente que se repita en distintos lugares.
  //No hay más de 3 porque se veía saturado y con 2 era muy simple.
  push();
  blendMode(ADD);

  fill(50, 80);
  for (let i = 0; i < cantidad; i++) {
    text("CRIMEN", random(width), random(height));
  }

  fill(100, 100);
  for (let i = 0; i < cantidad; i++) {
    text("CRIMEN", random(width), random(height));
  }

  fill(200, 200);
  for (let i = 0; i < cantidad; i++) {
    text("CRIMEN", random(width), random(height));
  }
  pop();
}

//Aquí está la función que hace que todo lo anterior pase, cada vez que se mueva el mouse: la variable Aumento se va a sumar 1 a su valor y la variable Movimiento guardará el valor del momento en que se dejó de mover el mouse
function mouseMoved() {
  Aumento++;
  Movimiento = second();
}

//Aquí está el link de la conversación, la pregunta y su respuesta, si bien me da un código, fue el que ocupé de base y que modifiqué para que se adaptara a lo que había hecho
//Cómo hago en p5js que se dibujen más palabras cuando muevo el mouse que vuelvan a la cantidad inicial cuando dejo de moverlo?
//Para lograr ese comportamiento en p5.js, puedes usar la función mouseMoved() para detectar cuando el mouse se mueve y una variable que controle cuántas palabras se dibujan. Cuando el mouse deja de moverse, puedes volver al número inicial usando un temporizador o simplemente restablecer en draw() si no hay movimiento.
//(AQUÍ ME ESCRIBIÓ UN CÓDIGO QUE CREO QUE ES MEJOR REVISAR EN EL LINK PORQUE SE VE DESORDENADO CON LOS SLASH)
//🔑 Claves del código
//mouseMoved() se ejecuta cada vez que el mouse se mueve → ahí agregamos más palabras.
//ultimaActividad guarda el tiempo de la última vez que se movió el mouse.
//En draw(), si pasan más de 500 ms sin movimiento, se restablece la lista a la cantidad inicial.
//Puedes ajustar el tiempo (500 ms) y la cantidad inicial según lo que necesites.
//¿Quieres que te arme una versión donde las palabras aparezcan en posiciones aleatorias en la pantalla para que se vea más dinámico?

//https://copilot.microsoft.com/shares/J2tM8zG7gVgjjiRiAUnVt
