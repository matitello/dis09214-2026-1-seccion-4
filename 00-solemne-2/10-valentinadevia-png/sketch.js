////SOLEMNE 02 PENSAMIENTO COMPUTACIONAL////

//Como obra de arte escogi la clasica serie
//chilena 31 minutos, creo que es una obra
//que a muchos de nosotros nos marco la infacia
//y ahora da nostalgia verla, yo personalmente
//destaco el tipo de humor que tenian y su gran
//variedad de personajes, pero para esto queria
//descatar al maguito explosivo, que nunca lo
//dejaban hacer su show en el estudio, por ello
//como respuesta le hice su propio show en
//donde el objetivo es encontrarlo.
//Para un poco de contexto 31 Minutos fue creado 
//por los periodistas en 2003 y realizadores chilenos 
//Álvaro Díaz y Pedro Peirano. Ambos fundaron la
//productora Aplaplac. Antiguamente se transmitia por TVN.
//referencia de informacion https://aplaplac.cl/work/31-minutos/
//Mi sueño es hacer que cada click sea un personaje
//diferente y que cuando salga el maguito, aparezcan
//salgan explosiones por ahi flotanto alrededor del
//personaje.
//Tambien queria añadirle una especie de "lobby"
//para tener una portada y cuando el boton de
//empezar se apriete, que empiece el juego.
//me gustaria que tuviera sonido de fondo.
//nota // para mi: recuerda hacer TIDY code y revisar
//si hay errores de tipeo.
//Era tidy no tiny aunque sin querer hice una referencia 
//al tiny desk en donde estuvieron los 31 minutos y 
//se volvieron de fama mundial.
//por si lop quieren ver otra vez
//https://www.youtube.com/watch?v=UEqTIwRrWvA&list=RDUEqTIwRrWvA&start_radio=1

////COMENCEMOS////
//Aqui se crea la variable minuto representando
//el dado que vimos la clase anterior.
//minutos es por 31 minutos.
let minutos;

//Cuantos personajes van a aparecer
//la constante nos otorga un rango de numeros
//que pueden aparecer, nos ayudaremos
//de esta cantidad para a cada numero asignarle
//un personaje.
const personajes = 11;

/////FONDO/////

//Aqui se van a declarar los nombres las variables de las imagenes utilizadas
//a continuacion donde se les va a asignar la imagen cargada.
//Para las explosiones que van a aparecer alrededor de el maguito.
let explosion;
//Para la imagen de fondo que van a tener los demas personajes.
let estudio;

/////PERSONAJES////
//Todos estas variables declaradas se van a ver mas adelante en preload
let maguito;
let senorman;
let policarpo;
let tulio;
let bodoque;
let juanin;
let freddy;
let patana;
let huachi;
let calcetin;
let mico;
let marioh;


//----------------------------------------------------------------------//
function preload() {
  /////BANCO DE IMAGENES/////
  //Aqui se le dice a la computadora que traiga
  //de sketch files las imagenes que cargamos
  //y se le otorga un nombre, en este caso llame.

  /////FONDO/////
  //https://www.freeiconspng.com/img/45930
  explosion = loadImage("explosion.png");

  //https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2020/08/31m-Wallpaper-EstudioWMeson.png?ssl=1
  estudio = loadImage("estudio.jpg");

  /////PERSONAJES/////

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-MAGUITO-EXPLOSIVO-2004-1216950312
  maguito = loadImage("maguito.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-Eusebio-Manguera-2003-1216970622
  senorman = loadImage("senorman.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-Policarpo-Avendano-2004-PNG-1247018196
  policarpo = loadImage("policarpo.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-2014-TULIO-TRIVINO-PNG-1214269443
  tulio = loadImage("tulio.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-2014-TULIO-TRIVINO-PNG-1214269443
  bodoque = loadImage("bodoque.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-2014-Juanin-Juan-Harry-PNG-1214269511
  juanin = loadImage("juanin.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-Freddy-Turbina-Mi-equilibrio-PNG-1247018216
  freddy = loadImage("freddy.png");

  //https://www.deviantart.com/31etgstudios/art/31-Mi7nutos-2014-Patana-Tufillo-PNG-1214269491
  patana = loadImage("patana.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-2014-Huachimingo-PNG-1214269516
  huachi = loadImage("huachimingo.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-2014-Calcetin-con-rombos-man-PNG-1214269478
  calcetin = loadImage("calcetincrm.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-Mico-el-Micofono-2004-PNG-1247034759
  mico = loadImage("mico.png");

  //https://www.deviantart.com/31etgstudios/art/31-Minutos-Mario-Hugo-2004-PNG-1247034633
  marioh = loadImage("mariohugo.png");
}

//----------------------------------------------------------------------//
function setup() {
  //Ponemos el tamaño del lienzo largo x, ancho y.
  createCanvas(600, 400);

  //El textAlign pone en posicion el texto, al
  //ocupar center, center le damos un orden a
  //el texto que se presenta.
  textAlign(CENTER, CENTER);
}

//----------------------------------------------------------------------//
function draw() {
  background(220);

  //Se pone aqui la imagen del fondo para que todos los personajes
  //se vean como en el estudio de grabacion, la posicion
  //esta en el 0,0 y 600,400 para que abarque todo el lienzo.
  image(estudio, 0, 0, 600, 400);

  //Gracias a esto la computadora nos dice que numero
  //salio al azar con cada click.
  console.log(minutos);

  //En el if podemos dar condiciones, esto se leeria como
  //si minutos (representacion de dado) vale 1,
  //el fondo va a ser amarillo, van a aprecer las
  //explosiones, el color del texto va a ser rojo puro,
  //el tamaño va a ser de 100 y va a aparecer el texto atras
  //de "GANASTE" junto con la imagen del maguito.

  if (minutos == 1) {
    background(255, 223, 21);

    //(Este es mi desahogo para aprender bien que hace el for)
    //PARA EL FOR se leeria como for= vamos a "repetir”,
    //es la orden para iniciar el movimiento, con el i = 0
    //creamos la primera explosion y le otorgamos el número 0
    //El i < 7 quiere “decir sigue llamando a la imagen de
    //explosion mientras el número sea menor que 7",
    //el i++ Significa que después de que la explosion termine
    //su recorrido, se le suma 1 para la siguiente explosion.
    //El let x, let y son la posicion horizontal, vertical
    //El 50 + i * 70 la explosion 0 se para en el lugar 50, la
    //explosion 1 se para un poco más allá (50 + 70), el sin
    //hace que se mueva lento, el frameCount es como avanza
    //todo el tiempo, el * 0.03 es velocidad, el + i si la
    //explosion 1 va hacia adelante, la 2 apenas va saliendo,
    //el * 250 dice qué tan lejos puede ir de izquierda a
    //derecha, y pasa similar con el let y.
    for (let i = 0; i < 8; i++) {
      let x = 50 + i * 70 + sin(frameCount * 0.03 + i) * 250;

      let y = 300 + sin(frameCount * 0.02 + i * 5) * 300;
      image(explosion, x, y, 200, 180);
    }
    fill(255, 0, 0);
    textSize(60);
    text("MI SHOW, MI SHOW", 300, 50);
    image(maguito, 190, 20, 300, 390);
  }

  //Aqui estan los demas personajes, todo tienen casi
  //los mismos elementos osea, fill, textSize, text con
  //alguna frase iconica de ese personaje para que 
  //nos de nostalgia y la risa al mismo tiempo
  //y su respectiva imagen pero los parametros que van
  //en las imagenes varian ya que no todas son del mismo
  //porte y posicion.
  //FOTO BODOQUE
  if (minutos == 2) {
    fill(0, 0, 0);
    textSize(30);
    text("MUCHAS GRACIAS, AHORA VAYANSE", 300, 50);
    image(bodoque, 150, 20, 300, 410);
  }
  //FOTO CALCETIN CON ROMBOS MAN
  if (minutos == 3) {
    fill(0, 0, 0);
    textSize(60);
    text("TAN TANANANA NAN", 300, 50);
    image(calcetin, 150, 100, 250, 300);
  }
  //FREDDY TURBINA
  if (minutos == 4) {
    fill(0, 0, 0);
    textSize(40);
    text("YA NO EXISTEN LAS RUEDITAS", 300, 50);
    image(freddy, 100, 100, 400, 300);
  }
  //HUACHIMINGO
  if (minutos == 5) {
    fill(0, 0, 0);
    textSize(60);
    text("OH, UNA PELUSA", 300, 50);
    image(huachi, 150, 110, 300, 290);
  }
  //JUANIN JUAN HARRY
  if (minutos == 6) {
    fill(0, 0, 0);
    textSize(60);
    text("ESTAMOS AL AIRE", 300, 50);
    image(juanin, 150, 110, 300, 290);
  }
  //MARIO HUGO
  if (minutos == 7) {
    fill(0, 0, 0);
    textSize(70);
    text("OH, ME COLGO", 300, 50);
    image(marioh, 150, 110, 300, 290);
  }
  //MICO EL MICOFONO
  if (minutos == 8) {
    fill(0, 0, 0);
    textSize(30);
    text("CON LA PREGUNTA DEL DIA DE HOY", 300, 50);
    image(mico, 150, 110, 300, 290);
  }
  //PANATA
  if (minutos == 9) {
    fill(0, 0, 0);
    textSize(55);
    text("MULTIPLICATE POR 0", 300, 50);
    image(patana, 150, 110, 300, 290);
  }
  //POLICARPO
  if (minutos == 10) {
    fill(0, 0, 0);
    textSize(65);
    text("TOP TOP TOP TOP", 300, 50);
    image(policarpo, 150, 120, 300, 380);
  }
  //TULIO TRIVIÑO
  if (minutos == 11) {
    fill(0, 0, 0);
    textSize(100);
    text("VEAMOS-LO", 300, 50);
    image(tulio, 150, 120, 300, 380);
  }
}

//Esta es la funcion que se activa cuando presiono
//el mouse = click
function mousePressed() {
  //Esto hace que la computadora me diga cuando
  //ocurre el click.
  console.log("click");

  // usar dadoCaras con random
  // resulta en valores entre 0 y dadoCaras
  // pero tiene parte decimal
  // aproximo con ceil()
  // use ceil() en vez de floor()
  // porque queria partir desde 1
  //La compu recuerda cuantos personajes tengo,
  //random tira un número al azar, ceil ve ese numero
  //y aproxima a numeros sin decimal, el signo
  //= mete los numeros dentro de minutos(dado).
  minutos = ceil(random(personajes));
}
