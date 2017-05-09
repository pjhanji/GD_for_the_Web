 //Comments to make notes to yourself
  /* 
  multi-line comment
  like this 
  */
  
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//a recipe for behavior
//order matters
function draw() {
  strokeWeight(1);
  background(255,0,0, 20);
  fill(127);
  rect(touchX, touchY, 100, 100);
  
  /*
  fill(0);
  ellipse(90, 90, 100, 100);
  */
}

