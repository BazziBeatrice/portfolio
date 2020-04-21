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

function preload() {}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  img = loadImage("https://i.imgur.com/uv8wnM7.gif");
  provaHover = select("#p01")

  img2 = loadImage("https://i.imgur.com/ze5cSt5.png");
  p2Hover = select("#p02")

  img6 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/images/contratempo-1.png");
  p6Hover = select("#p06")

  img3 = loadImage("https://i.imgur.com/ze5cSt5.png");
  p3Hover = select("#p03")

  img4 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/images/contratempo-1.png");
  p4Hover = select("#p04")

  img5 = loadImage("https://i.imgur.com/ze5cSt5.png");
  p5Hover = select("#p05")

  img7 = loadImage("https://raw.githubusercontent.com/BazziBeatrice/Portfolio/master/assets/images/contratempo-1.png");
  p7Hover = select("#p07")

}

function draw() {

  if (mouseIsOvering == true) {
    mostraImmagine();
  } else if (mouseIsOvering2 == true) {
      mostraImmagine2();
    }
    else if (mouseIsOvering3 == true) {
        mostraImmagine3();
      }  else if (mouseIsOvering4 == true) {
            mostraImmagine4();
          }else if (mouseIsOvering5 == true) {
                mostraImmagine5();
              }
      else if (mouseIsOvering6 == true) {
        mostraImmagine6();
      }  else if (mouseIsOvering7 == true) {
          mostraImmagine7();
        }
    else {
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

function mostraImmagine() {
  // image(img, mouseX - (img.width / 2),(img.height / 2));
  image(img, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
function mostraImmagine2() {
  // image(img, mouseX - (img.width / 2),(img.height / 2));
  image(img2, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
function mostraImmagine3() {
  image(img3, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
function mostraImmagine4() {
  image(img4, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
function mostraImmagine5() {
  image(img5, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
function mostraImmagine6() {
  image(img6, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
function mostraImmagine7() {
  image(img7, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
