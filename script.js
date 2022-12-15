let rectWidth;

function setup() {
    background(230);
    createCanvas(720, 480);
    noStroke();
    rectWidth = width / 4;
}
  
function draw() {
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(170, 233, 255);
      }
}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(230);
  } else {
    // change ellipse color
    randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    ellipse(mouseX,mouseY,40,40);
  }
}
ss
