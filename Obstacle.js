class Obstacle extends Body {

  constructor(x, y, mass) {
    let newX = random(0, width);
    let newY = random(0, height);
    let newMass = random(5, 15);

    super(newX, newY, newMass);

    this.speed = random(0.5, 2);
  }

  draw() {
    noStroke();
    fill(200, 0, 200);

    ellipse(this.pos.x, this.pos.y, this.mass * 2, this.mass * 2);
  }

  update() {
    super.update();

    let desired = p5.Vector.sub(b.pos, this.pos);
    desired.normalize();
    desired.mult(this.speed);

    let steer = p5.Vector.sub(desired, this.vel);

    this.acc.add(steer);
  }
}