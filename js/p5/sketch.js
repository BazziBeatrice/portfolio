var provaHover;
var mouseIsOvering = false;
let img;

var provaHover;
var mouseIsOvering2 = false;
let img2;

function preload() {}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  img = loadImage("https://i.imgur.com/uv8wnM7.gif");
  provaHover = select("#p01")

  img2 = loadImage("https://i.imgur.com/ze5cSt5.png");
  p2Hover = select("#p02")


}

function draw() {

  if (mouseIsOvering == true) {
    mostraImmagine();
  } else if (mouseIsOvering2 == true) {
      mostraImmagine2();
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

function mostraImmagine() {
  // image(img, mouseX - (img.width / 2),(img.height / 2));
  image(img, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
function mostraImmagine2() {
  // image(img, mouseX - (img.width / 2),(img.height / 2));
  image(img2, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
