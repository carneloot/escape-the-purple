class Player extends Body {

  constructor(x, y) {
    super(x, y, 20);

    this.pMass = this.mass;
    this.sMass = this.mass / 3;

    this.moveSpeed = 0.8;
    this.maxSpeed  = 7.5;

    this.pMoveSpeed = 0.8;
    this.sMoveSpeed = 1.2;

    this.col = color(210);
  }

  draw() {
    noStroke();

    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.mass * 2, this.mass * 2);
  }

  update() {
    super.update();
    this.vel.mult(0.98);

    // Mover para todos os lados
    if (currentKeyInput.isUpPressed) {
      this.acc.add(createVector(0, map(
        min(this.vel.y, 0), -this.maxSpeed, 0,
        0, -this.moveSpeed)));
    }

    if (currentKeyInput.isDownPressed) {
      this.acc.add(createVector(0, map(
        max(this.vel.y, 0),
        0, this.maxSpeed,
        this.moveSpeed, 0)));
    }

    if (currentKeyInput.isLeftPressed) {
      this.acc.add(createVector(map(
        min(this.vel.x, 0), -this.maxSpeed, 0,
        0, -this.moveSpeed
      ), 0));
    }

    if (currentKeyInput.isRightPressed) {
      this.acc.add(createVector(map(
        max(this.vel.x, 0),
        0, this.maxSpeed,
        this.moveSpeed, 0
      ), 0));
    }

    if (currentKeyInput.isSpacePressed) {
      this.mass = this.sMass;
      this.moveSpeed = this.sMoveSpeed;
    } else {
      this.mass = this.pMass;
      this.moveSpeed = this.pMoveSpeed;
    }

  }

}