//SOLEMNE 02

//15/05/26 15:43
//ESTA SOLEMNE SERÁ UNA RESPUESTA A LA SERIE "FRIENDS"
//Friends es una de las comedias de situación (sitcom) más famosas de la televisión. Es estadounidense y fué creada en 1994, esta sigue la vida, el romance y los enredos de seis amigos cercanos de entre 20 y 30 años que viven en el distrito de Manhattan, en Nueva York.

//para mí esta serie es una obra de arte
//pues siento que esta marcó a varias generaciones de personas
//a mi la serie me acompañó en muchos momentos importantes y por eso la considero una obra de arte en sí
//es por esto que mi solemne se basa en
//crear una especie de pagina donde cada uno puede cambiar de personaje
//inicialmente quería que uno eligiera entre los personajes de la serie
//pero para darle un sentido más personal al trabajo
//ahora los personajes serán mis facuamigos
//por ahora serán 4 pero este proyecto se irá actualizando y cada vez serán más :D
//una versión más chilensis de la serie

//veré la serie mientras avanzo en esto en mi casa

//Primeros pasos para ordenar mi mente:
//cargar fuente de friends
//para que sea bonito y con una fuente para el título

//REFERENCIA LOGO
//https://1000marcas.net/wp-content/uploads/2020/12/Friends-logo-3-1024x576.png
//simularé el logo con ellipses que cambien de color
//variando entre amarillo, rojo y azul

//en alguna parte debe estar el marco de la puerta de monica
//Para el mouse tengo la idea de que al hacer click en el marco
//te salga un personaje distinto de mis facuamigos
//hacer dibujos de ellos

//BUSCAR COLORES
//https://www.google.com/search?q=color+pared+monica+friends+en+rgb&oq=color+pared+monica+friends+en+rgb&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRifBTIHCAUQIRifBdIBCjE0NTg3ajBqMTWoAgiwAgHxBe9xIlh9sBQ88QXvcSJYfbAUPA&sourceid=chrome&ie=UTF-8
//"Para el famoso marco de fotos amarillo que está en la puerta, el color suele ser un amarillo mostaza o dorado."

//LET
//son las variables globales

//fuente para texto
//https://p5js.org/tutorials/loading-and-selecting-fonts/
let myFont;
//Necesario declarar el sillon para el uso de for después
let sillon;
let tamano;
let x = 0;
let y = 100;
let direccion = 1;
// arreglo vacío que funcionará como contenedor para las imagenes que cambian
let imgs = [];
//actual = estado inicial para el cambio de imagen de facuamigos
let actual = 0;
//canción = intro de friends
//que al apretar el título comenzará a sonar
let cancion;

//PRELOAD
//es donde se cargan los archivos necesarios
//archivos que ya fueron cargados en la biblioteca de p5js

function preload() {
  //se sube una fuente especifica
  //así esta luego se ve en el título
  //donde sale Facuamigos
  titulo = loadFont("friends.TTF");

  //IMAGENES:
  //marco monica abajo
  //https://i.blogs.es/0a855a/marco/1366_2000.jpeg
  //PERO este tiene fondo blanco
  //le borré el fondo
  //importe imagen
  //https://p5js.org/reference/p5/loadImage/
  marco = loadImage("marcomonica.png");

  //imagen sillon del fondo
  //https://static8.depositphotos.com/1478013/946/v/450/depositphotos_9461903-stock-illustration-friends-sofa.jpg
  //también tenía el fondo blanco
  //le borré el fondo
  //importe imagen
  //https://p5js.org/reference/p5/loadImage/
  sillon = loadImage("sillon.png");

  //cargar las imágenes
  //estos son dibujos de autoridad propia
  //https://p5js.org/reference/p5/loadImage/
  imgs[0] = loadImage("presiona.png");
  imgs[1] = loadImage("antuan.png");
  imgs[2] = loadImage("mai.png");
  imgs[3] = loadImage("mava.png");
  imgs[4] = loadImage("dafnee.png");
  //y así después se irán colocando más y más amigos
  //imgs[etc] = loadImage("otroamigx.png");

  //carga de la canción de friends
  //link de youtube
  //se descargó en Mp3
  //https://www.youtube.com/watch?v=rGqzXQQEn6A
  cancion = loadSound("FriendsSoundtrack.mp3");
}

// SETUP
// todo lo que se crea aquí persiste durante toda la ejecución del programa.

function setup() {
  createCanvas(500, 800);
  //fondo del color de la pared de monica en Friends
  //https://p5js.org/reference/p5/imageMode/
  imageMode(CENTER);
  noStroke();
}

//DRAW
//lo que se repite en el canva
//tal como dice es un dibujo que suele ser constante
//aún así este puede variar con el tiempo

function draw() {
  //21/05/26 16:00
  //para llenar un poco más el fondo quiero poner el sillón de la cafetería donde se reunían los personajes
  //pero como particulas que flotan
  //como lo del DVD que uno espera que toque la esquina de la pantalla

  //al poner el background en draw se borra el rastro o "estela" que dejan los sillones
  background(150, 120, 180);

  //imagen de sillón flotando en el fondo
  //para que se esté moviendo por el lienzo constantemente
  //se creó una especie de patrón usando for
  //para que se repitiera el sillón 6 veces y en posiciones aleatorias
  //y utilizando framecount para que tengan un movimiento continuo
  //let x e y son para que los sillones se muevan en esos ejes
  //https://p5js.org/tutorials/variables-and-change/

  for (let i = 0; i < 6; i++) {
    let x = 50 + i * 70 + sin(frameCount * 0.02 + i) * 250;

    let y = 400 + sin(frameCount * 0.02 + i * 5) * 300;
    //tamaño de la imagen del sillon + los valores dados anteriormente en x e y para que se muevan
    image(sillon, x, y, 60, 60);
  }

  //botón abajo del marco
  //relleno del color del fondo para que no se vea
  fill(150, 120, 180);
  //https://p5js.org/reference/p5/rect/
  rect(235, 628, 40, 40);
  //marco de fotos de monica será el botón para cambiar de personaje
  //colocar imagen
  //image(nombre imagen, x, y, alto, ancho)
  image(marco, 255, 650, 60, 60);

  //TÍTULO
  //https://p5js.org/reference/p5/textFont/
  //https://p5js.org/reference/p5/text/
  //primero probar que la fuente cargada funcione
  textFont(titulo);
  //sí funcionó
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(0);
  //text ('lo que quiero que diga', posición eje x, posicion eje y)
  text("F  A  C  U  A  M  I  G  O  S", 250, 150);

  //circulos logo friends
  //17/05/26 13:00
  //intenté que estos variaran de color
  //pero no lo logré así que quedarán con color fijo
  //no utilicé for para hacer repeticiones de este por el uso de colores distintos
  //LOS COLORES SON:
  //colores RGB
  //azul = (39, 200, 245);
  //amarillo = (255, 239, 43);
  //rojo = (245, 39, 39);

  //circulo 1
  //https://p5js.org/reference/p5/ellipse/
  //ellipse (x, y, alto, ancho)
  //https://p5js.org/reference/p5/noStroke/
  noStroke();
  fill(245, 39, 39);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(115, 152, 8, 8);

  //circulo 2
  //https://p5js.org/reference/p5/ellipse/
  noStroke();
  fill(39, 200, 245);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(152, 152, 8, 8);

  //circulo 3
  //https://p5js.org/reference/p5/ellipse/
  noStroke();
  fill(255, 239, 43);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(190, 152, 8, 8);

  //circulo 4
  //https://p5js.org/reference/p5/ellipse/
  noStroke();
  fill(245, 39, 39);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(220, 152, 8, 8);

  //circulo 5
  //https://p5js.org/reference/p5/ellipse/
  noStroke();
  fill(39, 200, 245);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(256, 152, 8, 8);

  //circulo 6
  //https://p5js.org/reference/p5/ellipse/
  noStroke();
  fill(255, 239, 43);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(296, 152, 8, 8);

  //circulo 7
  //https://p5js.org/reference/p5/ellipse/
  noStroke();
  fill(245, 39, 39);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(322, 152, 8, 8);

  //circulo 8
  //https://p5js.org/reference/p5/ellipse/
  noStroke();
  fill(39, 200, 245);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(355, 152, 8, 8);

  //circulo 9
  //https://p5js.org/reference/p5/ellipse/
  noStroke();
  fill(255, 239, 43);
  //https://p5js.org/reference/p5/ellipse/
  ellipse(388, 152, 8, 8);

  //Aspecto de las imagenes que cambian
  //https://p5js.org/reference/p5/image/
  //(imgs[numero de imagen]x, y, alto, ancho)
  image(imgs[actual], 258, 390, 500, 500);
}

//FUNCTION MOUSEPRESSED
//22/05/26 10:30
//todo lo que ocurre al presionar con el mouse
//cierto botón, letra o espacio del canva
//dos function por separado una para la musica y otra para las imagenes
//si no se hacen por separado el boton del marco afectaría al de la musica y viceversa

function mousePressed() {
  if (clickBotonMusica()) return;
  if (clickBotonImagen()) return;
}

//Uso del IF al apretar entre las cordenadas 250 y 350 en el eje X y entre las coordenadas 150 y 200 en el canvas
//la musica suena al apretar la segunda ellipse celeste en Facuamigos
//esto para que al apretar el título suene la intro de friends
//https://p5js.org/reference/p5/mousePressed/
function clickBotonMusica() {
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 200) {
    if (cancion.isPlaying()) {
      cancion.pause();
    } else {
      cancion.play();
    }

    return true;
  }
  return false;
}

//Uso del IF al apretar en la coordenada (240,628) en el canvas
//esto para generar el botón que al apretarlo muestre a los facuamigos
//el botón es el rect que se hizo en la línea N°111
//https://p5js.org/reference/p5/mousePressed/

function clickBotonImagen() {
  if (mouseX > 240 && mouseX < 240 + 40 && mouseY > 628 && mouseY < 628 + 40) {
    //cambia imagen entre los personajes
    //subidos anteriormente
    actual = actual + 1;

    //para que vuelva al inicio
    //en la imagen que da la instrucción
    if (actual >= imgs.length) {
      actual = 0;

      return true;
    }
    return false;
  }
}
