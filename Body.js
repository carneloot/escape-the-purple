class Body {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();

    this.mass = mass;
  }

  applyForce(force, massInf = true) {
    let newForce = force.copy();

    if (massInf)
      newForce.setMag(force.mag() / this.mass);

    this.acc.add(newForce);
  }

  update() {
    // Move o corpo
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  draw() {}

  isCollided(other, radius = other.mass) {
    let vecTo = p5.Vector.sub(this.pos, other.pos);
    let distSq = vecTo.magSq();

    return (distSq <= pow(this.mass + radius, 2));
  }

  isOutside() {
    return (this.pos.x + this.mass < 0 || this.pos.x + this.mass > width ||
            this.pos.y + this.mass < 0 || this.pos.y + this.mass > height);
  }
}