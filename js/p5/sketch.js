
let img;

function preload(){

}

function setup() {
  // createCanvas(windowWidth,windowHeight)
  noCanvas();
  img = loadImage("./assets/images/fuso-tv.gif");
let a = select('#project02');


  // Attach a callback function called overpara to the p element's mouseOver event
  a.mouseOver(overpara);

  // Attach a callback function called outpara to the p element's mouseOut event
  a.mouseOut(outpara);
}

function draw() {


  function overpara() {
    // change p element's html content
     image(img, mouseX - (img.width / 2), mouseY - (img.height / 2));
  }

  function outpara() {
    // change p element's html content -- no image

  }
}
