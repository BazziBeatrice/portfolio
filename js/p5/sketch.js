var provaHover;
var mouseIsOvering = false;
let img;


function preload(){}

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
// canvas.position(0, 0);
  // createCanvas(windowWidth,windowHeight)
  // img = loadImage(".../assets/images/fuso-tv.gif");
    img = loadImage("https://i.imgur.com/uv8wnM7.gifv");

  provaHover = select("#prova")
// let a = select('#project02');
}

function draw() {

    if (mouseIsOvering == true){
      mostraImmagine();
    }else{
      clear();
    }
    console.log(mouseIsOvering);
}

function mouseStatus(status){
  mouseIsOvering = status;
}

function mostraImmagine(){
  image(img, mouseX - (img.width / 2), mouseY - (img.height / 2));

}
