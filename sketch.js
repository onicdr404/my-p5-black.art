function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  noStroke();
}

function draw() {
  // This creates the "trailing" effect - lower alpha (10) means longer trails
  background(10, 10); 
  
  // Add new particles when mouse moves
  if (mouseX !== pmouseX && mouseY !== pmouseY) {
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle(mouseX, mouseY));
    }
  }

  // Update and show particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.alpha = 255;
    // Cool neon color palette
    let colors = ['#ff0055', '#00ffcc', '#ffcc00', '#9900ff', '#ffffff'];
    this.color = color(random(colors));
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2; // Speed of fading
  }

  show() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
    ellipse(this.x, this.y, random(5, 15));
  }
}

function mousePressed() {
  background(10); // Click to clear the canvas
}

