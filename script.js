function setup() {
    createCanvas(720, 480);
    noStroke();
}
  
function draw() {
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(170, 233, 255);
      }
    ellipse(mouseX,mouseY,40,40);
}

