//SOLEMNE 2 PENSAMIENTO COMPUTACIONAL

//la obra de arte escogida corresponde al álbum ''Yessir Whatever''
//publicado en 2013 en Estados Unidos
//del productor musical Madlib, en el que se representa a sí mismo
//con su alter-ego Quasimoto

//La portada original del vinilo incluye un sticker que dice
//"Peel if you wanna see guts" para que el espectador despegue la imagen
//y revele lo que hay detrás

//Quise responder a esta obra transformando esa interacción física
//del sticker en una interacción digital.

///////////////////////////////////////////////////////////

//VARIABLES: Guardamos información en ellas para usarlas después.
//aquí posteriormente guardaré las imagenes que usaré,
//esta estructura la saqué del modelo de la solemne 1

//variable que contendrá la imagen de Quasimoto normal
let quas;

//variable que contendrá la imagen de Quasimoto guts
let guts;

//Variable que contendrá la imagen del logo
let logo;

//preload() función que sirve para cargar archivos antes
//de que el programa comience.
//aquí me aseguro de que mis imagenes estén listas

function preload() {
  //aquí cargo la imagen de Quasimoto normal y la guardo en su
  //variable correspondiente
  //link imagen pngegg.com/es/search?q=quasimoto
  quas = loadImage("normal.png");

  //aquí cargo la imagen de Quasimoto guts y la guardo en su
  //variable correspondiente
  //link imagen https://64.media.tumblr.com/530086a05dad13def5afe4b99e6086c9/402e179ee4d06965-ba/s1280x1920/710dcc3be012bcecbd4b8355c382b14907a334da.jpg
  guts = loadImage("guts.png");

  //aquí cargo la imagen del logo y la guardo en su variable correspondiente
  //le pedí a la IA Google Gemini que del vinilo sacara el logo y me
  //lo entregara en una imagen con fondo blanco en alta calidad
  //https://gemini.google.com/app
  logo = loadImage("logo.png");
}

function setup() {
  //en createCanvas() configuro el área del sketch
  //en este caso, 900 de ancho y 900 de alto.
  createCanvas(900, 900);

  //se utiliza noCursor() para que no aparezca el cursor en
  //medio del rectángulo scanner
  noCursor();
}

function draw() {
  //los parámetros del fondo los dejé en 255 (blanco)
  background(255);

  //dibujo una imagen dentro del canvas, el primer parámetro
  //es la variable de la imagen que quiero colocar (logo)
  //luego posición horizontal, vertical, ancho y alto
  //moví los parámetros hasta que quedara similar al vinilo
  image(logo, 40, 40, 250, 100);

  //if() se usa para definir si una condición se cumple, sucede algo
  //en este caso lo usé para que detecte si el mouse esta cerca de
  //Quasimoto normal, este cambie a Quasimoto guts

  //dist() calcula la distancia entre dos puntos
  //mouseX y mouse Y es la posición actual del mouse
  //width / 2, height / 2 es el centro del canvas que coincide con Quasimoto
  //al final indica que si la distancia es menor de 200 pixeles, se ejecuta image()
  if (dist(mouseX, mouseY, width / 2, height / 2) < 200) {
    //dibuja la imagen, en el primer parámetro va la variable que quiero colocar (guts)
    //para que quedara centrada, usé los parametros de width y height /2
    //pero como la imagen se centra desde su esquina superior izquierda
    //me quedaba descuadrada
    // así que resté 200 y 300 respectivamente para centrarla visualmente
    image(guts, width / 2 - 200, height / 2 - 300);

    //else significa si no pasa lo anterior...
    //aquí indico que si el mouse no está cerca, aparece la imagen Quasimoto normal
  } else {
    //dibujo Quasimoto normal, indicando sus parámetros
    //iguales a la imagen guts para que queden ''superpuestos''
    image(quas, width / 2 - 200, height / 2 - 300);
  }

  //por defecto rect() se dibujaba desde la esquina superior izquierda en el mouse
  //así que usé rectMode con el parámetro CENTER para que se dibujara desde
  //el centro y quedara alineado con el mouse
  rectMode(CENTER);

  //relleno del rectángulo scanner, en este caso en el segundo
  //parámetro 255 para verde, y en el último 30 de transparencia
  fill(0, 255, 0, 30);

  //el stroke es la línea borde, el segundo parámetro es 255 para verde
  stroke(0, 255, 0);

  //este es el grosor de línea, lo ajusté hasta que me gustara
  strokeWeight(2);

  //dibujé el rectángulo con los parámetros en la posición x, y del mouse
  //y ajusté el tamaño hasta que cubriera al personaje completo
  rect(mouseX, mouseY, 300, 650);

  //cuando comencé a planear la solemne aún no comprendía muy bien el for()
  //así que le envíe el link https://p5js.org/reference/p5/for/
  //a chat gpt para que me explicara y cómo podía aplicarlo a mi idea
  //luego entendí que sirve para no repetir tantas veces un código como
  //planeaba en mi idea del humo (repetir círculos, su movimiento, color, etc)

  //for para repetir automaticamente las particulas de humo
  //me costó entender la lógica para aplicarla
  //así que me generó esta línea de código aplicada a mi idea
  for (let i = 0; i < 20; i++) {
    //quito los bordes de los circulos del humo
    noStroke();

    //ajusto los parámetros hasta que me de gris, con transparencia
    fill(180, 180, 180, 70);

    //dibujo los círculos que serán las partículas de humo
    circle(
      //chatgpt me explicó la manera de generar un movimiento horizontal suave, las
      //partículas comienzan desde la mitad del lienzo, la resta es para que se muevan
      //un poco a la izquierda,lo ajusté hasta que quedó en el cigarro
      //sin() crea el movimiento suave, contando los frames
      //+i hace que cada partícula tenga un movimiento levemente distinto
      //y *10 controla cuánto se desplazan hacia los lados.
      width / 2 - 40 + sin(frameCount * 0.02 + i) * 10,

      //height/2 posiciona el humo desde la mitad vertical del lienzo
      //ajusté la resta hasta que calzara con el cigarro
      //- i * 12 hace que cada partícula aparezca más arriba que la anterior
      height / 2 - 120 - i * 15,
      25
    );
  }

  //rellena el texto en 0, osea negro
  fill(0);

  //ajusté el tamaño de texto en 18
  textSize(18);

  //apliqué texto y escribí la frase de el vinilo ajustada a la interacción digital
  //cambie 'peel' por 'scan'
  //le pregunté a chatgpt ''cómo hago salto de línea de texto'' y me dió la opción
  //de poner \n donde quisiera hacer el salto de línea, apliqué los parámetros
  //de la ubicación del texto hasta que me gustara
  text("SCAN IF YOU WANNA\nREVEAL GUTS", 620, 280);

  //stroke de la línea de la flecha en negro
  stroke(0);

  //grosor de la línea
  strokeWeight(4);

  //dibujé la línea y ajusté los parámetros, fui probando números hasta que los
  //ubiqué donde quería
  line(700, 350, 600, 400);

  //triángulo para la punta de la flecha, fue lo que me tomó más tiempo
  //para que me quedaran donde quería
  //terrible experiencia no la recomiendo
  triangle(590, 408, 610, 405, 600, 390);
}
