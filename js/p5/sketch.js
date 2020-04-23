var provaHover;
var mouseIsOvering = false;
let img;

var p2Hover;
var mouseIsOvering2 = false;
let img2;

var p3Hover;
var mouseIsOvering3 = false;
let img3;

var p4Hover;
var mouseIsOvering4 = false;
let img4;

var p5Hover;
var mouseIsOvering5 = false;
let img5;

var p6Hover;
var mouseIsOvering6 = false;
let img6;

var p7Hover;
var mouseIsOvering7 = false;
let img7;

var p8Hover;
var mouseIsOvering8 = false;
let img8;

var p9Hover;
var mouseIsOvering9 = false;
let img9;

var p10Hover;
var mouseIsOvering10 = false;
let img10;

var p11Hover;
var mouseIsOvering11 = false;
let img11;

var p12Hover;
var mouseIsOvering12 = false;
let img12;

function preload() {}

function setup() {
  // let canvas = createCanvas(windowWidth, windowHeight);
    let canvas = createCanvas(windowWidth, 1600);
  canvas.position(0, 0);
  img = loadImage("https://i.imgur.com/NiZiYUz.gif");
  provaHover = select("#p01")

  img2 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/intro/thelostgallery-intro.jpg");
  p2Hover = select("#p02")

  img3 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/intro/physicalinternet-intro.jpg");
  p3Hover = select("#p03")

  img4 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/intro/placemaking-intro.jpg");
  p4Hover = select("#p04")

  img5 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/intro/setjettersunited-intro.png");
  p5Hover = select("#p05")

  // img6 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/intro/contratempo-intro.gif");
  img6 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/images/contratempo-1.png");
  p6Hover = select("#p06")

  img7 = loadImage("https://i.imgur.com/uv8wnM7.gif");
  p7Hover = select("#p07")

  img8 = loadImage("https://i.imgur.com/uv8wnM7.gif");
  p8Hover = select("#p08")

  img9 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/intro/ihavegotnothingtowear-intro.png");
  p9Hover = select("#p09")

  img10 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/intro/atavola-intro.jpg");
  p10Hover = select("#p10")

  img11 = loadImage("https://i.imgur.com/uv8wnM7.gif");
  p11Hover = select("#p11")

  img12 = loadImage("https://i.imgur.com/uv8wnM7.gif");
  p12Hover = select("#p12")

}

function draw() {

  if (mouseIsOvering == true) {
    mostraImmagine();
  } else if (mouseIsOvering2 == true) {
    mostraImmagine2();
  } else if (mouseIsOvering3 == true) {
    mostraImmagine3();
  } else if (mouseIsOvering4 == true) {
    mostraImmagine4();
  } else if (mouseIsOvering5 == true) {
    mostraImmagine5();
  } else if (mouseIsOvering6 == true) {
    mostraImmagine6();
  } else if (mouseIsOvering7 == true) {
    mostraImmagine7();
  } else if (mouseIsOvering8 == true) {
  mostraImmagine8();
} else if (mouseIsOvering9 == true) {
  mostraImmagine9();
} else if (mouseIsOvering10 == true) {
  mostraImmagine10();
} else if (mouseIsOvering11 == true) {
  mostraImmagine11();
} else if (mouseIsOvering12 == true) {
  mostraImmagine12();
} else {
    clear();
  }
  // console.log(mouseIsOvering);
}

function mouseStatus(status) {
  mouseIsOvering = status;
}
function mouseStatus2(status) {
  mouseIsOvering2 = status;
}
function mouseStatus3(status) {
  mouseIsOvering3 = status;
}
function mouseStatus4(status) {
  mouseIsOvering4 = status;
}
function mouseStatus5(status) {
  mouseIsOvering5 = status;
}
function mouseStatus6(status) {
  mouseIsOvering6 = status;
}
function mouseStatus7(status) {
  mouseIsOvering7 = status;
}
function mouseStatus8(status) {
  mouseIsOvering8 = status;
}
function mouseStatus9(status) {
  mouseIsOvering9 = status;
}
function mouseStatus10(status) {
  mouseIsOvering10 = status;
}
function mouseStatus11(status) {
  mouseIsOvering11 = status;
}
function mouseStatus12(status) {
  mouseIsOvering12 = status;
}

function mostraImmagine() {
  // image(img, mouseX - (img.width / 2),(img.height / 2));
  image(img, mouseX, mouseY + 20, (img.width / 4), (img.height / 4))
}
function mostraImmagine2() {
  // image(img, mouseX - (img.width / 2),(img.height / 2));
  image(img2, mouseX, mouseY + 40, (img.width / 6), (img.height / 4))
}
function mostraImmagine3() {
  image(img3, mouseX, mouseY + 40, (img.width / 4), (img.height / 7))
}
function mostraImmagine4() {
  image(img4, mouseX, mouseY + 50, (img.width / 4), (img.height / 5))
}
function mostraImmagine5() {
  image(img5, mouseX, mouseY - 30, (img.width / 4), (img.height / 6))
}
function mostraImmagine6() {
  image(img6, mouseX, mouseY -40, (img.width / 4), (img.height / 5))
}
function mostraImmagine7() {
  image(img7, mouseX, mouseY -50, (img.width / 4), (img.height / 4))
}
function mostraImmagine8() {
  image(img8, mouseX, mouseY + 20, (img.width / 4), (img.height / 4))
}
function mostraImmagine9() {
  image(img9, mouseX, mouseY + 20, (img.width / 4), (img.height / 5))
}
function mostraImmagine10() {
  image(img10, mouseX, mouseY + 20, (img.width / 4), (img.height / 4))
}
function mostraImmagine11() {
  image(img11, mouseX, mouseY + 20, (img.width / 4), (img.height / 4))
}
function mostraImmagine12() {
  image(img12, mouseX, mouseY + 20, (img.width / 4), (img.height / 4))
}
