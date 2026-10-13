let rif;

async function  setup() {
  createCanvas(800, 800);
  rif = await loadImage('serpente.png');
  noLoop();
}

function draw() {
  background(255);

  /* immagine di riferimento, semitrasparente
  tint(255, 100);
  const s = min(width / rif.width, height / rif.height); // immagine larga e alta quanto la tela
  const w = rif.width * s, h = rif.height * s; // dimensioni finali dell’immagine
  image(rif, (width - w) / 2, (height - h) / 2, w, h); // spazio vuoto che avanza in orizzontale e verticale
  noTint(); */

  // riempimento del serpente
  push();
  fill('#ffffff');
  noStroke();
  serpente();
  pop();



  // bande ritagliate sulla forma del serpente
  push();
  beginClip();
  serpente();
  endClip();
  noStroke();
  banda1();
  banda2();
  pop();

  // contorno sopra a tutto
  push();
  noFill();
  stroke('#111111');
  strokeWeight(6.5);
  serpente();
  pop();

  push();
  occhio();
  pop();
}

function serpente() {
  beginShape();

  // punto di partenza curva 1
  vertex(300, 225);

  // curva 1
  bezierVertex(290, 225);  // maniglia 1
  bezierVertex(310, 245);  // maniglia 2
  bezierVertex(310, 245); // arrivo curva 1, partenza curva 2

  // curva 2
  bezierVertex(310, 245);
  bezierVertex(360, 255);
  bezierVertex(390, 240);

  // curva 3
  bezierVertex(400, 235);
  bezierVertex(380, 300);
  bezierVertex(300, 385);

  // curva 4
  bezierVertex(270, 415);
  bezierVertex(235, 450);
  bezierVertex(225, 500);

  // curva 5
  bezierVertex(220, 530);
  bezierVertex(235, 570);
  bezierVertex(255, 585);

  // curva 6
  bezierVertex(290, 605);
  bezierVertex(335, 595);
  bezierVertex(360, 580);

  // curva 7
  bezierVertex(395, 555);
  bezierVertex(425, 485);
  bezierVertex(440, 490);

  // curva 8
  bezierVertex(455, 495);
  bezierVertex(435, 560);
  bezierVertex(505, 570);

  // curva 9
  bezierVertex(555, 570);
  bezierVertex(550, 540);
  bezierVertex(560, 540);

  // curva 10
  bezierVertex(570, 540);
  bezierVertex(560, 550);
  bezierVertex(580, 555);

  // curva 11
  bezierVertex(615, 560);
  bezierVertex(615, 515);
  bezierVertex(615, 515);

  // curva 12, punta della coda
  bezierVertex(615, 515);
  bezierVertex(600, 530);
  bezierVertex(590, 525);

  // curva 13
  bezierVertex(580, 520);
  bezierVertex(580, 490);
  bezierVertex(570, 485);

  // curva 14
  bezierVertex(550, 475);
  bezierVertex(525, 540);
  bezierVertex(505, 525);

  // curva 15
  bezierVertex(475, 505);
  bezierVertex(505, 435);
  bezierVertex(465, 425);

  // curva 16
  bezierVertex(410, 410);
  bezierVertex(370, 545);
  bezierVertex(320, 515);

  // curva 17
  bezierVertex(295, 500);
  bezierVertex(330, 450);
  bezierVertex(360, 415);

  // curva 18
  bezierVertex(400, 360);
  bezierVertex(460, 290);
  bezierVertex(455, 230);

  // curva 19
  bezierVertex(450, 180);
  bezierVertex(435, 180);
  bezierVertex(430, 180);

  // curva 20
  bezierVertex(390, 175);
  bezierVertex(375, 165);
  bezierVertex(375, 165);

  // curva 21
  bezierVertex(375, 165);
  bezierVertex(355, 195);
  bezierVertex(300, 225); // punto di partenza curva 1 / punto di arrivo curva 21

  endShape(CLOSE);
}

function occhio() {
  noStroke();
  fill('#111111');
  circle(360, 205, 12);
}

function banda1() {
  push();
  fill('#2c5c9f');
  noStroke();
  rectMode(CENTER);
  translate(405, 295);
  rotate(radians(20));
  rect(0, 0, 70, 30);
  pop();
}

function banda2() {
  push();
  fill('#111111');
  noStroke();
  rectMode(CENTER);
  translate(385, 330);
  rotate(radians(25));
  rect(0, 0, 70, 30);
  pop();
}