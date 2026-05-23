////////////////////////////////////
//una obra de arte se puede entender como algo que genera sentimientos
//algo que mueve a un ser humano
//para mi no hay nada que genere más impacto que la naturaleza y sus matices
//la obra de arte inicial de este mundo es la tierra y ha sido la inspiración de muchos
//esta es una respuesta con computacion a lo que me genera la naturaleza
//esta obra invita a la observacion tranquila de los cambios
//invita a frenar un momento y a relajarse
//invita a salir del boom de la ciudad y entrar en un mundo diferente
//todo lo mencionado son cosas que a mi me produce la naturaleza
////////////////////////////////////

////////////////////
//se uso la ayuda de la inteligencia artificial Geminis
//el objetivo requeria mas herramientas que las vistas en clase por eso se usa la ia
//la ia actuo como profesor y ayudante, no realizo el trabajo sola
//se uso multiples prompts para lograr el objetivo, es media tontita la ia
///////////////////

//variable para controlar movimiento relajante y tranquilo
//parte en 0.0 y luego se modifica como se quiera ver el movimiento
let flujo = 0.0;
//variable para crear mis flores
//flores abtractas y orgánicas
let flores = [];

function setup() {
  createCanvas(800, 650);

  //funcion para mejorar el rendimiento de las animaciones
  //que no se nos caliente el computador con los pixeles
  pixelDensity(1);

  //se define la cantidad de plantas que queremos en el canvas
  //la página le cuesta proccesar tantas
  //70 es el balance entre un buen rendimiento y el objetivo visual que queremos
  let cantidadPlantas = 70;

  //usamos for para ejecutar la cantidad de plantas, osea 70
  //se aplica i = 0; i< cantidadPlantas para que el compu cree 70 plantas y no mas
  //i++ hace que el contador que parte en 0 avance hasta 70
  //si no se usara nuestro contador siempre volveria al 0
  //osea cuando cree 1 planta vuelve a 0
  for (let i = 0; i < cantidadPlantas; i++) {
    //la posiciona de las plantas en el eje x y el ancho max de la pantalla
    let x = random(-350, width);

    //aplicamos tamaños random a las plantas
    //el max de altura sera 550 y el min 100, el resto varia entre esos numeros
    let largo = random(100, 550);

    //agregamos inclinacion a las plantas
    //visualmente se ve mas interesante y organico
    let curvatura = random(1.5, 2.6);

    //el siguiente paso fue una solucion de la ia gemini
    //actua como un if else resumido
    //condicion ? si es verdad, : si es mentira
    //esto se uso para agregar una flor a solo algunos tallos de manera aleatoria
    //el 0.55 es la probabilidad de que un tallo tenga flor
    // el 35, y 55 son los tamaños de la flor, pueden ser entre esos numeros
    let tamanoCabezas = random(1) < 0.55 ? random(35, 55) : 0;

    //se aplica push para guardar los datos aleatorior de cada flor
    // x = a la posicion horizontal que vimos arriba (-350,width)
    //height = donde nacen las flores
    // largo = el largo del tallo que vimos arriba (100, 150)
    //tamanoCabeza = el tamaño de la flor que vimos antes (33,55) o 0
    //curvatura = la inclinacion ya definida (1.5,2.6)
    flores.push(new Flor(x, height, largo, tamanoCabezas, curvatura));
  }
}

function draw() {
  //color de fondo oscuro
  //que destaque las flores
  //crear un espacio nocturno relajante
  background(0);

  //aplicamos frameCount para que los colores cambien de manera fluida y bonita
  //se apoya frameCount con "con" y "sin"
  //para lograr un cambio de color poco marcado, que "respiren"
  //se controla el cambio de colores rgb con los decimales
  //la velocidad de los cambios
  //"con" y "sin" se mueven en el rango de -1 y 1
  //las "ondas" de "con" y "sin"
  //los dos datos finales son los valores de r,g o b que se alteran

  let r = map(sin(frameCount * 0.2), -1, 1, 150, 225);
  let g = map(cos(frameCount * 0.03), -1, 1, 150, 230);
  let b = map(sin(frameCount * 0.02), -1, 1, 150, 225);

  //el fondo plano era muy fome asi que creamos una gradiente de color cambiante
  //definimos la altura de la franja gradiente en el canvas
  //se necesita de un numero muy alto para que se note
  let alturaGradiente = 1500;
  //definimos en que punto del eje y el degradado se empieza a generar
  //ese valor es definido por la altura de mi canvas menos la altura de la gradiente
  let inicioY = height - alturaGradiente;

  //se define el color de la gradiente
  //al igual que con las plantas se busca un efecto rgb cambiante
  let baseGradiente = color(r * 0.3, g * 0.25, g * 0.4);

  //se declara que el color con el que se debe hacer el degradado es negro
  let colorFondoNegro = color(0);

  //se hace un bucle for para "pintar" nuestro fondo
  //se le dice que parta desde el incio Y, se vaya moviendo (y++) y que se detenga  //en height
  for (let y = inicioY; y < height; y++) {
    //para facilitar el pensamiento del computador se usa map
    //treduce las lineas a colorear para hacer la gradiente a un porcentaje de
    //avance entre 0 y 1
    //es un traductor de posicion
    let interseccion = map(y, inicioY, height, 0, 1);

    //se usa pow para que la gradiente sea organica y no se vea marcada
    let factorMezcla = pow(interseccion, 1.5);

    //el color de cada franja se define por la union entre el fondo y la gradiente
    //colorFondoNegro + baseGradiente = factorMezcla
    //lerpColor toma todos los datos definidos y los aplica a cada linea
    let colorLinea = lerpColor(colorFondoNegro, baseGradiente, factorMezcla);

    //se crea nuestro canvas para aplicar todo lo de arriba
    stroke(colorLinea);
    //se le dice al computador que traze la linea de izquierda a derecha, horizontal
    line(0, y, width, y);
  }
  //le damos colores a la flor con un valor de opacidad que es el dato final
  //color interior más claro y exterior ocuro
  let colInterior = color(r, g, b, 15);
  //se dividen los valores de rgb para alterarlos
  //color más opaco
  //0.2=20%
  let colExterior = color(r * 0.2, g * 0.1, b * 0.3, 50);

  //dibujamos cada flor
  //usamos for para aplicar los efectos y no hacerlo flor por flor
  //f = cada flor indivudual
  //display toma todos los datos ya definidos y ejecuta cada f
  for (let f of flores) {
    f.display(colInterior, colExterior, flujo);
  }
  //hacemos que el flujo aumente de manera delicada y gradual
  //el valor de flujo aumenta en 0.04
  flujo += 0.04;
  //aplicamos efecto de granulado
  //vibe nostalgica
  applyGrain(15);
}

//creamos molde generico que se aplique en cada flor
//se usa "this" para guardar los datos de cada flor
//startX = posicion horizontal
//startY = posicion vertical
//len = largo
//maxRadius = radio maximo de la flor
//curveOffset = curvatura del tallo, negativo izquierda, positivo derecha, 0 recto
class Flor {
  constructor(startX, startY, len, maxRadius, curveOffset) {
    this.startX = startX;
    this.startY = startY;
    this.len = len;
    this.maxRadius = maxRadius;
    this.curveOffset = curveOffset;

    //queremos que las cabezas de flores se muevan sutilmente
    //el primer this. hace que cada flor parta de un lugar random para que no se     //muevan en bloque
    //segundo this.define si la flor comienza su movimiento en subida o bajada
    //tercer this. determina la velocidad del movimiento
    this.desplazamientoY = random(-5, 5);
    this.subiendo = random(1) > 0.5;
    this.velocidadSubida = random(1.5, 2.5);
  }

  //hacemos los tallos/pastos
  //dislay los toma y los ejecuta según los datos
  display(colInterior, colExterior, flujo) {
    //hacemos el tallo con las mismas cualidades de la flor
    //usamos capas para lograr un poco de volumen (interior + oscuro)
    //las capas son de diferente tamaño, se pintan las capas mas gruesas primero
    //por eso el bucle for parte al reves y va disminuyendo (i--)
    let capasTallo = 15;
    for (let i = capasTallo; i > 0; i--) {
      //se usa lerpColor para modificar el color de las capas y  que se genere un //degradado
      let colIntermedio = lerpColor(colExterior, colInterior, i / capasTallo);

      //se define el trazo
      //el grosor es i, osea 15, el cual va disminuyendo por capa en 1.2
      stroke(colIntermedio);
      strokeWeight(i * 1.2);
      noFill();

      //aplicamos movimiento y curva a las capas de los tallos
      beginShape();
      //empiezan los datos de la forma
      //se guardan los datos de la posicion horizontal donde nace la planta
      let actualX = this.startX;

      //se usa un bucle for para controlar la altura
      //se empieza en el suelo (this.startY) y
      //el buscle  calcula la altura verticalmente de 10 en 10 pixeles
      //hasta llegar al largo final del tallo (this.startY - this.len)
      for (let y = this.startY; y >= this.startY - this.len; y -= 10) {
        //creamos el efecto de viento
        //se usa noise para generar numeros aleatorios pero fluidos y suaves
        //noise define la curvatura del movimiento del tallo en numeros
        //noise controla la curvatura y flujo la frecuencia de estas
        //flujo = que tan fuerte/rapido cambia las curvaturas de direccion
        let n = noise(y * 0.003, flujo * this.curveOffset);
        let curvaX = map(
          y,
          this.startY,
          this.startY - this.len,
          0,
          this.len * 0.4
        );
        //curvaX es que tan inclinada esta el tallo
        //this.startX donde parte el tallo
        //y la parte de map define el movimiento de tallo en 20, -20 pixeles
        //se usa map igual que con los colores, para hacer el movimiento
        //de los tallos mas suaves
        //n=numero actual que da noise
        //0= valor min
        //1 0 valor max
        actualX = this.startX + curvaX + map(n, 0, 1, -20, 20);

        //vertex da las coordenadas de la longitud y altura por donde pasa el tallo
        //x=horiz, y=vertical
        vertex(actualX, y);
      }
      endShape();

      //se quiere que las flores esten en la punta de los tallos
      //se usa if para anclar la flor a la primera capa del tallo
      // primera capa (i===1)
      if (i === 1) {
        this.floresX = actualX;
        this.floresY = this.startY - this.len;
      }
    }
    //creamos el movimiento de las flores
    //lo hacemos con una variable de true y false
    //this.desplazamiento es la distancia de flotacion en el eje y
    //this.velocidadSubida es que tan rapido sube la flor
    //-100 y 100 son el dato max y min de movimiento
    if (this.subiendo) {
      this.desplazamientoY -= this.velocidadSubida;
      console.log(this.desplazamientoY);
      if (this.desplazamientoY <= -100) {
        this.subiendo = false;
      }
    } else {
      this.desplazamientoY += this.velocidadSubida;
      if (this.desplazamientoY >= 100) {
        this.subiendo = true;
      }
    }

    //hacemos la cabeza de la flor
    //tranlate acomoda el canvas para que la flor este en la punta de los tallos
    //asi se evita calcular coordenada por coordenada desde el origen en donde estaria
    //cada flor
    //push guarda el estado del canvas original
    push();
    translate(this.floresX, this.floresY + this.desplazamientoY);

    //como con los tallos aplicamos capas pero ahora de menos a mas (i++)
    //se aplica la misma logica que con los tallos para generar tranzparencia y
    //volumen en las flores
    let capasFlor = 20;
    for (let i = 0; i < capasFlor; i++) {
      let interColor = lerpColor(colExterior, colInterior, i / (capasFlor - 1));
      fill(interColor);
      noStroke();

      let radioActual = this.maxRadius * (i / capasFlor);
      beginShape();
      let vertice = 120; //vertices de la flor

      //two_pi = dos pi = una vuelta completa a un circulo
      //el bucle crea vertices y los ordena en circulos
      //map calcula el angulo de giro para crear el circulo
      for (let j = 0; j < vertice; j++) {
        let angulo = map(j, 0, vertice, 0, TWO_PI);

        let cantidadPetalos = 8; //cantidad de petalos por flor
        //no queremos un circulo perfecto asi que lo deformamos
        //abs controla la onda de sin para que no sea perfecta y que no sea un
        //valor negativo (no existen radios negativos obvio)
        //modDestello tiene el rol de deformar el radio de la flor para que no
        //sea perfecta
        let modDestello = 0.2 + 0.2 * abs(sin((angulo + capasFlor) / 2));
        let radioOrganico = radioActual * modDestello;
        //aplicamos un efecto de "arruga" o difuminacion a los petalos
        //1.0 es el valor de tamaño de las arrugas
        let radGranulado =
          radioOrganico *
          (1 +
            1.0 *
              noise(cos(angulo) + 1, sin(angulo) + 1, flujo, this.curveOffset));
        let vx = radGranulado * cos(angulo);
        let vy = radGranulado * sin(angulo);
        vertex(vx, vy);
      }
      endShape(CLOSE);
    }
    pop();
  }
}
//creamos una funcion para aplicar granulado
//applyGrain es la orden, este bloque es como ejecutarla
//se le enseña al computadoir a modificar los pixeles de la pantalla para generar ruido
//los pixeles van cambiando aleatoriamente su valor de rgb = ruido
//todo este efecto se aplica de ultimo para que afecte a todo el canvas
function applyGrain(intensity) {
  loadPixels();

  for (let x = 0; x < width; x += 2) {
    for (let y = 0; y < height; y += 2) {
      let posPixel = (x + y * width) * 4;

      let cambioR = random(-intensity, intensity);
      let cambioG = random(-intensity, intensity);
      let cambioB = random(-intensity, intensity);

      pixels[posPixel] += cambioR;
      pixels[posPixel + 1] += cambioG;
      pixels[posPixel + 2] += cambioB;
    }
  }
  updatePixels();
}
