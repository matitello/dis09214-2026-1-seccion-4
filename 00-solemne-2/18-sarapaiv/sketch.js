//SOLEMNE 2
//OBRA INSPIRADA EN "La noche estrellada" obra famosa de Vincent van Gogh que
//muestra un cielo nocturno lleno de estrellas y movimiento.
//esta respuesta a la obra de la noche estrellada se representa como un cielo nocturno con //orbitas donde nacen estrellas, sin dejar de lado el sol que aunque no se ve en las noches //siempre esta presente, dando a la obra una sensacion de belleza y paz.
//CREDITOS A (IA) GEMINI para ayudar en:
//lógica Matemática.
//para lograr el movimiento circular armónico de los anillos y las lunas.
//estructura de bucles.
//se utilizó la IA para optimizar los bucles 'for'
//que generan los patrones repetitivos de los anillos y estrellas.

//función para preparar espacio donde aparecerá la animación.
//ref:https://p5js.org/reference/p5/setup/
function setup() {
  //crear lienzo.
  //parametros: (ancho, alto) = (windowWidth, windowHeight) tamaño de ventana
  //ref: https://p5js.org/es/reference/p5/createCanvas/
  createCanvas(800, 800);

  //cambiar el modo de ángulo a grados.
  //según sugerencia de GEMINI para facilitar los calculos de rotación.
  //https://p5js.org/reference/p5/angleMode/
  angleMode(DEGREES);
}

//función de dibujo.
//ref: https://p5js.org/es/reference/p5/draw/
function draw() {
  //color de fondo azul oscuro.
  //parametros: (r,g,b) = (rojo, verde, azul) = (10, 10, 25)
  //ref: https://p5js.org/es/reference/p5/background/
  background(10, 20, 50);

  //trasladar origen al centro para facilitar dibujos ciculares.
  //segun sugerencia de IA GEMINI.
  //parametros: (x, y)
  //ref: https://p5js.org/reference/p5/translate/
  translate(width / 2, height / 2);

  //fondo de líneas que se mueven para simular pinceladas.
  //hacer bucle de 50 lineas curvas para el fondo.
  //parametros: (inicialización; condición; actualización)
  // ref: https://p5js.org/reference/p5/for/
  for (let i = 0; i < 50; i++) {
    //crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    //calcular el angulo basado en el tiempo y movimiento
    let angulo = i * 7.2 + frameCount * 0.1;

    //crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    //definir radio con variacion para que las lineas no queden todas juntas
    let r = 300 + sin(frameCount * 0.5 + i * 10) * 50;

    //establecer color azul claro para pinceladas
    //parametros: (r,g,b) = (rojo, verde, azul)
    //ref: https://p5js.org/es/reference/p5/stroke/
    stroke(100, 150, 255, 50);

    //grosor de linea
    //parametros: (ancho)
    //ref: https://p5js.org/es/reference/p5/strokeWeight/
    strokeWeight(2);

    //no rellenar las formas
    //https://p5js.org/reference/p5/noFill/
    noFill();

    //dibujar un arco simulando una pincelada
    //parametros:(x, y, w, h, start, stop, [mode], [detail])
    //https://p5js.org/reference/p5/arc/
    arc(0, 0, r, r, angulo, angulo + 40);
  }

  //para crear los anillos al rededor
  //bucle para dibujar 3 anillos
  //parametros: (inicialización; condición; actualización)
  //ref: https://p5js.org/reference/p5/for/
  for (let j = 1; j <= 3; j++) {
    //crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let radioAnillo = j * 120;

    //si es el segundo anillo tiene color dorado
    //parametros:(condicion)
    //ref: https://p5js.org/es/reference/p5/if/
    if (j == 2) {
      //pone color dorado con transparencia
      //parametros: (r,g,b) = (rojo, verde, azul)
      //ref: https://p5js.org/es/reference/p5/stroke/
      stroke(255, 215, 0, 150);
    } else {
      //establece color crema con transparencia
      //parametros: (r,g,b) = (rojo, verde, azul)
      //ref: https://p5js.org/es/reference/p5/stroke/
      stroke(200, 180, 100, 100);
    }

    //grosor de la linea para los anillos
    //parametros: (ancho)
    //ref: https://p5js.org/es/reference/p5/strokeWeight/
    strokeWeight(3);

    //Sin relleno para detalles de los anillos
    //https://p5js.org/reference/p5/noFill/
    noFill();

    //dibuja el circulo base del anillo
    //parametros: (x, y , w, [h] )
    //ref: https://p5js.org/es/reference/p5/ellipse/
    ellipse(0, 0, radioAnillo * 2);

    //bucle interno para añadir detalles a los anillos
    //parametros: (inicialización; condición; actualización)
    //ref: https://p5js.org/reference/p5/for/
    for (let a = 0; a < 360; a += 15) {
      //mantiene el estado del dibujo para no afectar otros elementos
      //ref:https://p5js.org/reference/p5/push/
      push();

      //rota segun el angulo actual y añade una rotacion continua
      //parametros:(angle, [axis])
      //https://p5js.org/reference/p5/rotate/
      rotate(a + frameCount * (0.2 * j));

      //dibuja una linea decorativa al borde del anillo
      //parametros: (x1, y1, x2, y2)
      //https://p5js.org/reference/p5/line/
      line(radioAnillo - 10, 0, radioAnillo + 10, 0);

      //si el angulo es multiplo de 60, dibuja un pequeño circulo
      //parametros:(condicion)
      //ref:https://p5js.org/es/reference/p5/if/
      if (a % 60 == 0) {
        //color de relleno para los ciculos de los anillos
        //parametros: (r,g,b) = (rojo, verde, azul)
        //ref: https://p5js.org/es/reference/p5/fill/
        fill(255, 255, 200);

        //sin contorno para estos circulos
        //ref: https://p5js.org/reference/p5/noStroke/
        noStroke();

        // dibuja el circulo en la posicion del radio del anillo grande
        //parametros: (x, y , w, [h] )
        //ref:https://p5js.org/es/reference/p5/ellipse/
        ellipse(radioAnillo, 0, 8, 8);
      }

      //restaura el estado del dibujo
      //ref: https://p5js.org/es/reference/p5/pop/
      pop();
    }
  }

  // dibujo de SOL al centro del lienzo
  //mantiene el estado del dibujo para evitar transformar el sol
  //ref: https://p5js.org/reference/p5/push/
  push();

  //El sol rota lentamente sobre su eje
  //parametros:(angle, [axis])
  //https://p5js.org/reference/p5/rotate/
  rotate(frameCount * 0.5);

  //color amarillo para el sol
  //parametros: (r,g,b) = (rojo, verde, azul)
  //ref: https://p5js.org/es/reference/p5/fill/
  fill(255, 200, 50);

  //sin contorno para el sol
  //ref: https://p5js.org/reference/p5/noStroke/
  noStroke();

  //circulo central que representa el nùcleo del sol
  //parametros: (x, y , w, [h] )
  //ref: https://p5js.org/es/reference/p5/ellipse/
  ellipse(0, 0, 60, 60);

  //bucle para generar los rayos del sol de manera simètrica
  //parametros: (inicialización; condición; actualización)
  // ref: https://p5js.org/reference/p5/for/
  for (let r = 0; r < 12; r++) {
    //rota 30 grados en cada iteracion para completar los 360º
    //parametros:(angle, [axis])
    //https://p5js.org/reference/p5/rotate/
    rotate(30);

    //dibuja triangulos que forman los rayos, con longitud variable segun el tiempo
    //(x1, y1, x2, y2, x3, y3)
    //https://p5js.org/reference/p5/triangle/
    triangle(-10, 30, 10, 30, 0, 80 + sin(frameCount * 2) * 10);
  }
  //restaura el estado del dibujo
  //ref: https://p5js.org/es/reference/p5/pop/
  pop();

  //bucle para dibujar 4 lunas flotantes
  //parametros: (inicialización; condición; actualización)
  // ref: https://p5js.org/reference/p5/for/
  for (let l = 0; l < 4; l++) {
    //empuja el estado para cada luna individualmente
    //ref: https://p5js.org/reference/p5/push/
    push();

    //rota cada luna a una posicion inicial diferente y añade ese movimiento "orbital"
    //parametros:(angle, [axis])
    //https://p5js.org/reference/p5/rotate/
    rotate(l * 90 + frameCount * 0.3);

    //desplaza la luna hacia afuera del centro del lienzo
    translate(250, 0);

    //añade un pequeño balanceo a la luna sobre su propio eje
    //parametros:(angle, [axis])
    //https://p5js.org/reference/p5/rotate/
    rotate(sin(frameCount) * 20);

    //color crema para la luna
    //parametros: (r,g,b) = (rojo, verde, azul)
    //ref: https://p5js.org/es/reference/p5/fill/
    fill(255, 250, 220);

    //sin contorno para la luna
    //ref: https://p5js.org/reference/p5/noStroke/
    noStroke();

    //Dibuja el circulo base para la luna
    //parametros: (x, y , w, [h] )
    //ref: https://p5js.org/es/reference/p5/ellipse/
    ellipse(0, 0, 40, 40);

    //dibuja un circulo del mismo color que el fondo para simular la luna en efecto "creciente"
    //parametros: (r,g,b) = (rojo, verde, azul)
    //ref: https://p5js.org/es/reference/p5/fill/
    fill(10, 20, 50);

    // desplaza este circulo ligeramente para tapar parte de la luna
    //parametros: (x, y , w, [h] )
    //ref: https://p5js.org/es/reference/p5/ellipse/
    ellipse(10, 0, 35, 35);

    //restaura el estado del dibujo
    pop();
  }
  //bucle para dibujar estrellas que parpadean en el fondo
  //parametros: (inicialización; condición; actualización)
  // ref: https://p5js.org/reference/p5/for/
  for (let s = 0; s < 20; s++) {
    //calcula la posicion x de la estrella usando funciones trignometricas fijas
    //crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let xEstrella = cos(s * 18) * 350;

    //calcula la posicion y de la estrella usando funciones trignometricas fijas
    //crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let yEstrella = sin(s * 18) * 350;

    // sentencia "if" para crear un efecto de parpadeo ritmico
    //parametros:(condicion)
    //ref: https://p5js.org/es/reference/p5/if/
    if (frameCount % 60 < 30) {
      //color blanco brillante
      //parametros: (r,g,b) = (rojo, verde, azul)
      //ref: https://p5js.org/es/reference/p5/fill/
      fill(255, 255, 255, 100);
    }

    //sin contorno para las estrellas
    //ref: https://p5js.org/reference/p5/noStroke/
    noStroke();

    // el tamaño de la estrella varia con el tiempo
    //crea una variable
    //ref: https://p5js.org/es/reference/p5/let/
    let tam = 3 + sin(frameCount * 0.1 + s) * 2;

    // Dibuja la estrella como un circulo pequeño
    //parametros: (x, y , w, [h] )
    //ref: https://p5js.org/es/reference/p5/ellipse/
    ellipse(xEstrella, yEstrella, tam, tam);

    //sentencia "if" para añadir brillo en forma de cruz a una de las cuatro estrellas
    //parametros:(condicion)
    //ref: https://p5js.org/es/reference/p5/if/
    if (s % 4 == 0) {
      //color de linea blanco suave para el brillo
      //parametros: (r,g,b) = (rojo, verde, azul)
      //ref: https://p5js.org/es/reference/p5/stroke/
      stroke(255, 255, 255, 150);

      //dibuja la linea horizontal del brillo
      //parametros: (x1, y1, x2, y2)
      //https://p5js.org/reference/p5/line/
      line(xEstrella - 5, yEstrella, xEstrella + 5, yEstrella);

      // dibuja la línea vertical del brillo.
      //parametros: (x1, y1, x2, y2)
      //https://p5js.org/reference/p5/line/
      line(xEstrella, yEstrella - 5, xEstrella, yEstrella + 5);
    }
  }
}
