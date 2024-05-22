function setup() {
    createCanvas(600, 400);
    background ("green")
  }
  
  function draw() {
   
    stroke ("white");
    fill ("red");
   
    if (mouseIsPressed) {
      rect (mouseX, mouseY, 30, 30)
   }
    
  }