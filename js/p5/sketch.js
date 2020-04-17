var provaHover;
var mouseIsOvering = false;
let img;

function preload() {}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  img = loadImage("https://i.imgur.com/uv8wnM7.gif");
  provaHover = select("#prova")
}

function draw() {

  if (mouseIsOvering == true) {
    mostraImmagine();
  } else {
    clear();
  }
  console.log(mouseIsOvering);
}

function mouseStatus(status) {
  mouseIsOvering = status;
}

function mostraImmagine() {
  // image(img, mouseX - (img.width / 2),(img.height / 2));
  image(img, mouseX, mouseY + 20, (img.width / 2), (img.height / 2))
}
