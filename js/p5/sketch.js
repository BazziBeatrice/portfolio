var provaHover;
var mouseIsOvering = false;

let img;


function preload(){}

function setup() {
  createCanvas(windowWidth,windowHeight)
  img = loadImage(".../assets/images/fuso-tv.gif");
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
