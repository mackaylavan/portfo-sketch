let img; 
let canvas; 
let heading = "Hey there!";
let paragraph = "This site is currently under construction. Please contact me directly to view my work.";

function preload() {
  img = loadImage('../img/worker.png');
}

function setup() {
  canvas = createCanvas(650, 650);
  canvas.parent('canvas-wrapper');
  //canvas.position(800,0);
  canvas.style("z-index", "-1");
  //background('#b39676'); 
  background('#58442D');
  
}

function draw() {
  cursor('../img/shovel.png', 12,52);
  image(img, 25, 25, 600,600);
  fill('#F9F6EF');
  noStroke(); 
  circle(mouseX, mouseY, 60, 60);
  
}

function windowResized() {
  resizeCanvas(650, 650);
}