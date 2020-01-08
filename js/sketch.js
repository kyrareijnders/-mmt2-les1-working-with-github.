var rood= 255;
var groen= 255;
var blauw= 255;


var vincent= "hallo";


function setup() {
  // put setup code here

  createCanvas(400,400);
  background(240); //dit is fijn licht grijs

  
 
}

function draw() {
  // put drawing code here
  background(0,400-mouseX,0);

  rood = random(255);
  groen = random(255);
  blauw = random(255);
  // background(rood,groen,blauw,);
  // console.log(vincent);

  noStroke();
  fill(0,200,200);
  ellipse(200,200,mouseX,mouseY);

  noStroke();
  fill(0,0,0);
  rect(100,100,200,200);
  
  fill(255,0,200);
  ellipse(200,200,50,50);

  strokeWeight(10);
  stroke(255,255,0);
  line(200,0,200,400);

  stroke(255,255,0);
  line(0,200,400,200);
  
}