var bg = undefined;
var Spacesnd = undefined;

function preload(){
  bg = loadImage("assets/maxresdefault.jpg"); 

  Spacesnd = loadSound ("assets/Spacesnd.wav")
}


function setup() {
  createCanvas(1920,1080);

  Spacesnd.play();
}

function draw() {
  image(bg, 0,0);
  textSize(36);
text("What is nothing", mouseX, mouseY);
fill(0, 102, 153);
}
