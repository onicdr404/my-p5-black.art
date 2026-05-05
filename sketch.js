function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let isTapping = false;
let tapTimer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#A7D8DE"); // Soft blue background
  
  // 1. Draw Keyboard
  fill(50);
  rect(100, 250, 200, 60, 5); // Keyboard base
  fill(255);
  for(let i=0; i<8; i++) {
    rect(110 + i*22, 260, 18, 40, 2); // Simple keys
  }

  // 2. Draw Mambo (Head & Body)
  fill("#FFF9C4"); // Light yellow
  ellipse(200, 200, 150, 130); // Head
  
  // Ears
  ellipse(140, 150, 40, 40);
  ellipse(260, 150, 40, 40);
  
  // Face
  fill(50);
  ellipse(175, 200, 10, 10); // Left eye
  ellipse(225, 200, 10, 10); // Right eye
  noFill();
  stroke(50);
  strokeWeight(2);
  arc(200, 215, 20, 15, 0, PI); // Smile
  noStroke();

  // 3. Hands Logic
  let handY = 250;
  if (isTapping) {
    handY = 270; // Move hands down when key is pressed
    tapTimer--;
    if (tapTimer <= 0) isTapping = false;
  }

  fill("#FFF9C4");
  ellipse(150, handY, 40, 30); // Left hand
  ellipse(250, handY, 40, 30); // Right hand
}

// Trigger "pressing" when any button is hit
function keyPressed() {
  isTapping = true;
  tapTimer = 5; // How many frames the "tap" lasts
}

