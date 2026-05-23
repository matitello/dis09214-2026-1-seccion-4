//Solemne 02 Pensamiento Computacional
//Ariad Guerra Soto 22/05/26

//Obra inicial seleccionada: "paranormal" de AKRIILA.

//Mi obra responde a la interpretación que abarqué de la canción "paranormal" del álbum "epistolares+" (2025).
//Se nos presenta a lo largo de la canción a una persona que lidia con una relación pasada, donde recuerda el amor en su mente como un ente que la atormenta, casi llegando a lo sobrenatural. Por ello, se cuestiona su ser, sus inseguridades e identidad por medio de la paranoia, donde la línea entre la realidad y la imaginación se difumina, creando escenarios en los cuales el pasado sigue influyendo en el presente, como un fantasma que no la deja de seguir; algo que está muerto y vagando sin poder tener un descanso.

//En la obra, como espectadores, nosotres somos el ente que está atormentando a la protagonista, acechándola y acercando nuestra mano a ella, quien está representada como una silueta sintiente que, cuando se agita por completo, empieza a cuestionarse y escuchar "voces", jugando así con la cuarta pared.

//Link de la cancion:https://music.youtube.com/playlist?list=OLAK5uy_nn0vQVFsvq-lD-nUxjboOkgn3HCKITIdE

// Declaro variables generales para almacenar las imágenes en el sketch despues

//imagen de fondo principal
let imgfondo;
let imgsilueta;

//frames de las palpitaciones del corazón
let imgframe1corazon;
let imgframe2corazon;

//imagen de la mano fanmastal para mouse
let manoFantasma;

//Declaro las variables de el margen de velocidad de el latido asignando una cantidad que va a aumentar 0.05 dependiendo de la distancia de pixeles que varie
let velocidadLatido = 0.05;

//variable para incremento de velocidad de latidos o la acumulacion de tiempo de este
let tiempoCorazon = 0;

//la oscuridad que se propaga segun la variable
let luzFondo = (255, 0, 0);

//fuente:
//p5js.org/reference/p5/let/

//Precargo las imagenes antes de que empiece el lienzo.
function preload() {
  //Fuente:
  //p5js.org/reference/p5/preload/

  //imagen de fondo que funcionara como background
  imgfondo = loadImage("fondo.jpg");
  //imagen de silueta
  imgsilueta = loadImage("silueta.png");

  //imagen de frame uno de corazon palpitante
  imgframe1corazon = loadImage("frame1corazon.png");

  //imagen de frame dos de corazon palpitante
  imgframe2corazon = loadImage("frame2corazon.png");

  //imagen de mano fantasmal
  manoFantasma = loadImage("manoFantasma.png");

  //fuente:https:
  //p5js.org/reference/p5/loadImage/

  //fuente imagenes:

  //fondo: fotografia que tome yo
  //frames de corazon:https://musicinmade.wordpress.com/corazon-gif-alegorias-com_-3/
  //silueta:https://cl.pinterest.com/pin/885027764295990482/visual-search/?cropSource=5&entrypoint=closeup_cta&rs=deep_linking

  //mano:https://img.magnific.com/psd-premium/manos-fantasmales-alcanzando_1300605-6781.jpg?semt=ais_hybrid&w=740&q=80
}

//crear lienzo
function setup() {
  createCanvas(1200, 800);

  //elimino el cursor del lienzo para que la imagen de la mano fantasma se vea de forma clara ya que sigue su eje
  noCursor();
  //fuente:https://p5js.org/reference/p5/noCursor/
}
//crear fondo
function draw() {
  background(220);

  //Poner "tint" para modificar el color y transparencia/brillo del lienzo solamente con un parametro para que funcione como escala de grises
  tint(luzFondo);

  //encasillamos el filtro para fondo dentro de push y pop para que lo que hagamos adentro de esto no afecte los demas elementos
  push();

  //subi la imagen fondo precargada dentro de draw para que se visualice
  image(imgfondo, 0, 0, width, height);

  //filtro de imagen p5js
  filter(BLUR, 3);

  //fuente:
  //p5js.org/reference/p5/filter/
  //p5js.org/reference/p5/pop/(&push)
  //p5js.org/reference/p5/image/

  //cerrar push()
  pop();

  // pongo la imagen de la silueta de la protagonista situada en la parte inferior de la silla de la  imagen ded fondo
  image(imgsilueta, 300, 100, 550, 750);

  //para la siguiente configuracion utilice ayuda de la IA de Google ya que era algo que no sabia como ejecutar:
  {
    //prompt que utilice para que me guie:
    //"necesito que me ayudes a buscar los codigos adecuados para la accion que quiero hacer en mi sketch: quiero a partir de dos imagenes de el latido del corazon que funcionan como frames hacer una simulacion del movimiento de este y que cada vez que el mouse se acerca a este el corazon empiece a "latir" mas rapido y mas rapido al igual que si se aleja el mouse se vuelve a normalizar los latidos serenos"
    //respuesta de la IA:
    //¡Hola! Claro que sí, te ayudo a estructurar el código adecuado para lograr esa interactividad utilizando las funciones matemáticas y multimedia nativas de p5.js.Para resolver este requerimiento de forma óptima sin depender de condicionales rígidos de tiempo, la mejor solución técnica es implementar un reloj elástico o acumulador dinámico basado en la función trigonométrica sin() y la función de interpolación lineal lerp().Aquí tienes la solución técnica explicada y el bloque de código listo para integrar en tu función draw():1. Variables Globales RequeridasPrimero, debes declarar estas dos variables en la parte superior de tu archivo (fuera de cualquier función) para controlar el tiempo acumulado y la velocidad base del latido:
    // Variable para almacenar la velocidad actual del pulso (0.05 es el estado de calma)
    //let velocidadLatido = 0.05;
    // Variable para acumular el tiempo elástico que alimentará a la onda matemática
    //let tiempoCorazon = 0;
    //Usa el código con precaución
    //2. Bloque de Código para draw()Inserta este código en tu función de dibujo continuo. Utiliza la distancia geométrica del cursor para alterar la velocidad y alternar las imágenes de tus frames:
    //javascript// 1. Configurar imageMode para que las imágenes se posicionen desde su centro geométrico
    //imageMode(CENTER);
    // 2. Calcular la distancia en píxeles entre el cursor del mouse y el centro del corazon
    //let distanciaPeligro = dist(mouseX, mouseY, 318, 350);
    // 3. CONDICIONAL IF: Evaluar si el mouse entra en el rango de proximidad (200 píxeles)
    //if (distanciaPeligro < 200) {
    // Si el mouse se acerca, la variable velocidadLatido aumenta de forma progresiva en cada fotograma
    //velocidadLatido = velocidadLatido + 0.02;
    // CONDICIONAL ELSE: Si el mouse se aleja del rango de peligro
    //else {
    // Regresa gradualmente la velocidad al estado de calma (0.05) usando interpolación lineal
    //velocidadLatido = lerp(velocidadLatido, 0.05, 0.05);
    //4. Restringir la velocidad máxima para evitar que el parpadeo rompa la estética visual
    //velocidadLatido = constrain(velocidadLatido, 0.05, 0.6);
    // 5. ACUMULADOR: Sumar la velocidad calculada al tiempo del corazón en cada fotograma
    //tiempoCorazon = tiempoCorazon + velocidadLatido;
    // 6. MOVIMIENTO: Pasar el tiempo variable por el Seno para generar una oscilación suave entre -1 y 1
    //let ondaLatido = sin(tiempoCorazon);
    // 7. BUCLE FOR: Estructura de repetición para renderizar las capas de animación del corazón
    //for (let i = 0; i < 2; i++) {
    // CONDICIONAL IF INTERNO: Evalúa el signo de la onda senoidal para alternar los frames de la imagen
    //if (ondaLatido > 0) {
    // Si la onda es positiva, dibuja la imagen del corazón grande en el pecho de la silueta
    //image(imgframe1, windowWidth - 50, windowHeight - 50, 120, 120);
    //else
    // Si la onda es negativa, dibuja la imagen del corazón chico en la misma posición exacta
    //image(imgframe2, windowWidth - 50, windowHeight - 50, 100, 100);
    //Usa el código con precaución.
    //Explicación Técnica de las Funciones Utilizadas
    //consultado el 20/05/26 Google AI
  }
  //fin de su respuesta y con eso me guie (fue muy util)

  //encierro todo lo que vaya a modificar en torno a el corazon
  push();

  //Poner "imagenMode" para que dibuje las imágenes tomando como eje su centro exacto con "CENTER" y asi no la esquina superior de su eje 
  imageMode(CENTER);

  //le asigno la variable tiempoCorazon la suma de velocidadLatido
  tiempoCorazon = tiempoCorazon + velocidadLatido;
  //a la variable ondaLatido le asigno sin() para que la oscilacion entre el tiempo que pasa no afecte de forma directa la transicion entre frames, usando su logica de negativo y positivo y asi se vea de una forma más fluida
  let ondaLatido = sin(tiempoCorazon);

  //modificar la velocidad del latido dentro del if de la distancia existente
  //poner dist para identificar la distancia entre el cursor y el centro, que en este caso es 330, 370
  //si el mouse esta a menos de 200 pixeles de la ubicacion del corazon; pasa algo, ese algo es la mofificacion de la velocidad de la variable velocidadLatido
  if (dist(mouseX, mouseY, 500, 570) < 200) {
    // Si el mouse se acerca: la variable velocodadLatido aumenta en cada 0.03 veces más rapido dependiendo de la distancia.
    velocidadLatido = velocidadLatido + 0.03;
  }
  //else si el mouse se aleja de velocidadLatido, regresa gradualmente a la velocidad de calma que es más lenta (0.05)
  else {
    //usamos lerp() para que la transicion entre el estado de "agitacion" del corazon y el estado de "calma" sea de forma gradual y no de golpe, asi solo baja un 0.05 por movimiento de pixel
    velocidadLatido = lerp(velocidadLatido, 0.05, 0.05);
  }

  //bucle "for" para crear fotogramas del corazón a partir de 2 capas
  // se crea una variable "i" que cuenta desde el numero inicial 0 de draw
  //mientras "i" sea menor que 2 se repetirá el bucle for
  //cuando se reinicia vuelve a sumarse 1 con el "++"
  for (let i = 0; i < 2; i++) {
    //ponemos if para evaluar si la onda matemática está en su fase positiva o negativa para intercalar las imágenes de una forma más orgánica gracias al cálculo de la oscilación con sin() que funciona entre -1, 0 y 1
    if (ondaLatido > 0) {
      //si la onda es positiva, dibuja la imagen del corazón grande en el pecho de la silueta
      image(imgframe1corazon, 570, 500, 120, 120);
    } else {
      //pero si la onda es negativa, dibuja la imagen del corazón chico en la misma posición exacta
      image(imgframe2corazon, 570, 500, 120, 120);
    }
  } // Aquí cierra el bucle for

  //termino seccion de corazon y push()
  pop();

  //fuentes:
  //p5js.org/reference/p5/sin/
  //p5js.org/reference/p5/dist/
  //p5js.org/reference/p5/lerp/
  //p5js.org/reference/p5/for/
  //p5js.org/reference/p5/if/(&else)
  //p5js.org/reference/p5/pop/(&push)

  //condicionales para el cambio de escala de grises de el lienzo segun la variable

  //Poner "if" para la condicion de que si el mouse está cerca de el corazon (ej: menos de 200px del centro) pasa algo
  //acompañado de dist que calcula la distancia entre un punto y otro
  if (dist(mouseX, mouseY, width / 2, height / 2) < 200) {
    //Pasara que la luz se empezara a apagar tenuemente hasta oscurecer el lienzo por completo cuando el cursor este más cerca
    luzFondo = luzFondo - 2;
  }
  //poner else para que algo que corte el if
  else {
    //peeero (no es falta de ortografia ,es un pero, pero con emocion) si el mouse se aleja volvera a la normalidad ya que se alejara de los pixeles que hacen la condicion
    luzFondo = 245;
  }
  //Se pone la funcion que limita un número para que esté dentro de un rango definido por un valor mínimo y un valor máximo, en este caso de 0 a 255
  luzFondo = constrain(luzFondo, 0, 255);

  //fuentes:
  //p5js.org/reference/p5/if/(&else)
  //p5js.org/reference/p5/dist/
  //p5js.org/es/reference/p5/constrain/
  //p5js.org/reference/p5/tint/

  //inserto la imagen de la mano en la ubicacion de el eje x y z de el mouse en vez de usar cursor() y defino su tamaño
  image(manoFantasma, mouseX, mouseY, 210, 210);

  //seccion de textos que aparecen dependiendo de la variable luzFondo

  //if: si la variable luzFondo es inferior a 220 y sucesivamente (150,100 o menos) mientras los valores van bajando empiezan a notarse textos

  //texto ¿HAY ALGUIEN AHÍ?
  if (luzFondo < 220) {
    //tipofrafia
    textFont("Courier New");

    //tamaño de texto (mediano)
    textSize(30);

    //relleno de texto y su opacidad (rojo y tenuemente transparente)
    fill(220, 20, 20, 230);

    //textos y su posicion 
    text("¿hay alguien ahí?", 30, 120);
  }

  //texto YA ENLOQUECÍ 
  if (luzFondo < 195) {
    //tipofrafia
    textFont("Courier New");

    //tamaño de texto
    textSize(30);

    //relleno de texto y su opacidad (rojo y tenuemente transparente)
    fill(220, 20, 20, 230);

    //textos y su posicion
    text("ya enloquecí", 650, 550);
  }

  //texto SÉ QUE NO ES VERDAD
  if (luzFondo < 150) {
    //tipofrafia
    textFont("Courier New");

    //tamaño de texto
    textSize(30);

    //relleno de texto y su opacidad (rojo y tenuemente transparente)
    fill(220, 20, 20, 230);

    //textos y su posicion
    text("sé que no es verdad", 600, 75);
  }

  //texto NO ME SIENTO SOLA
  if (luzFondo < 110) {
    //tipofrafia
    textFont("Courier New");

    //tamaño de texto
    textSize(30);

    //relleno de texto y su opacidad (rojo y tenuemente transparente)
    fill(220, 20, 20, 230);

    //textos y su posicion

    text("no me siento sola", 460, 250);
  }
  //texto DEJAME IR
  if (luzFondo < 70) {
    //tipofrafia
    textFont("Courier New");

    //tamaño de texto
    textSize(30);

    //relleno de texto y su opacidad (rojo y tenuemente transparente)
    fill(220, 20, 20, 230);

    //textos y su posicion
    text("dejame ir", 100, 700);
  }
  //texto NO QUIERO DORMIR
  if (luzFondo < 30) {
    //tipofrafia
    textFont("Courier New");

    //tamaño de texto
    textSize(30);

    //relleno de texto y su opacidad (rojo y tenuemente transparente)
    fill(220, 20, 20, 230);

    //textos y su posicion
    text("no quiero dormir", 35, 410);
  }

  //texto ALGO SOBRENATURAL
  if (luzFondo < 1) {
    //tipofrafia
    textFont("Courier New");

    //tamaño de texto
    textSize(30);

    //relleno de texto y su opacidad (rojo y tenuemente transparente)
    fill(220, 20, 20, 230);

    //textos y su posicion
    text("algo sobrenatural", 700, 750);
  }
  //fuentes:
  //p5js.org/reference/p5/if/(&else)
  //p5js.org/reference/p5/textFont/
  //p5js.org/reference/p5/text/
  //p5js.org/reference/p5/textSize/
  //p5js.org/reference/p5/fill/
}

//FIN ´(°O°)¬
