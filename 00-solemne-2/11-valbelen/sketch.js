// Solemne 02-Valentina Diaz
// Pensamiento computacional
// 22/05/26
// me base en la cancion "El circulo" de Natalia Lacunza
// y habla de que la vida es un ciclo, que nada es estatico
// como soy lenta entendiendo y no soy fan de la IA hice algo mas simple pero que pudiera entender (o intentar)
// https://youtu.be/H5OoFRRbJek?si=uwiCdPp9ztteSHP_
// quiero hacer un circulo que se mueva en movimiento circular y que tenga un texto al centro que menciono mas adelante

// declaro una variable de angulo
// que utilizo despues en sin(), cos()
// y las variables repeticion y poquito
// que ocupo en for
// https://youtu.be/uRd5iKBpsUA?si=8c7xq-zS4EPTWKla
let angulo = 0;
let repeticion = 200;
let poquito = 5;

// puse el lienzo en 800,800 de tamano porque
// en default estaba en 400,400 pero lo queria ver mas grande
// y me gusto ese tamano
function setup() {
  createCanvas(800, 800);
}

// https://p5js.org/es/reference/p5/background/
// parametros de background (r,g,b, transparencia)
function draw() {
  background(255, 0, 0, 10);

  // quiero tener un circulo que gire en movimiento circular hacia la derecha y cambie de color
  // use los colores del album:rojo, blanco, negro

  // https://youtu.be/uRd5iKBpsUA?si=8c7xq-zS4EPTWKla
  // angulo +=1 define la velocidad de una variable de angulo
  // sumandole 1 despues de cada iteracion
  // esta variable la ocupo para sin() y cos()
  // al ser un valor positivo gira hacia la derecha
  angulo += 1;

  // use sin y cos para que el circulo se moviera
  // https://youtu.be/uRd5iKBpsUA?si=8c7xq-zS4EPTWKla
  // https://p5js.org/es/reference/p5/sin/
  // https://p5js.org/es/reference/p5/cos/
  sinX = sin(angulo);
  cosY = cos(angulo);

  // map para ponerlo en la posicion que quiero
  // https://youtu.be/uRd5iKBpsUA?si=8c7xq-zS4EPTWKla
  // parametros map(value, start1, stop1, start2, stop2)
  // -1, 1 son los valores de sin y cos
  // 100, 700 son para que el circulo grande este centrado al lienzo
  // https://p5js.org/reference/p5/map/
  x2 = map(sinX, -1, 1, 100, 700);
  y2 = map(cosY, -1, 1, 100, 700);

  // for repite un codigo sin necesidad de ponerlo varias veces
  // https://p5js.org/es/reference/p5/for/
  // i=0, establece la variable i en 0 al principio de los tiempos
  // i<repeticion, para que corra el codigo i tiene que ser menos que repeticion
  // i+=poquito, suma poquito a i despues de cada iteracion
  for (let i = 0; i < repeticion; i += poquito) {
    // if ejecuta un bloque de codigo basado en una condicion
    // https://youtu.be/1Osb_iGDdjk?si=fY5SIDWKG_3Xt-LR
    // https://p5js.org/es/reference/p5/if/
    // si frameCount es menos que i rellena el circulo negro
    // si frameCount es mas que i rellena el circulo blanco
    // queria que el negro se mostrara menos tiempo que el blanco
    // porque es el color que aparece menos en la portada del album
    // https://p5js.org/es/reference/p5/frameCount/
    // frameCount rastrea el número de fotogramas que se han mostrado
    // desde que el programa comenzó a ejecutarse
    if (frameCount < i) {
      noStroke();
      fill(0);
    } else if (frameCount > i) {
      fill(255);
    }
    // ellipse(x, y, w, [h])
    // https://p5js.org/reference/p5/ellipse/
    // ocupo x2 e y2 en los primeros 2 parametros para que se mueva
    // elegi un circulo de figura por el nombre de la cancion
    ellipse(x2, y2, 40, 40);

    // le puse "mi sitio" en el centro del circulo porque la letra dice
    // "he pintado en el suelo un circulo, me recuerda cual es mi sitio"
    // https://p5js.org/reference/p5/text/
    // text(str, x, y)
    // use textAlign() para crear el texto desde el centro
    // https://p5js.org/reference/p5/textAlign/
    textAlign(CENTER);
    textSize(60);
    text("mi sitio", 400, 400);
  }
}
