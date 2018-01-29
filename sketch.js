let b;
let currentKeyInput;
let obstacles = [];
let colidiu, contador;

function setup() {
	createCanvas(windowWidth, windowHeight);
	currentKeyInput = new KeyInput();

	resetGame();
}

function draw() {
	background('#eee');
	

	for (let i = obstacles.length - 1; i >= 0; i--) {
		let ele = obstacles[i];

		ele.draw();
		ele.update();
		
		if (b.isCollided(ele))
			colidiu = contador >= 120;
	}

	// Se bater em alguem fica vermelho
	if (colidiu) {
		background(255, 100, 100);
		setTimeout(resetGame, 3000);
		noLoop();
	}

	b.draw();
	b.update();

	fill('#888');
	textSize(40);
	text(obstacles.length, 20, 50);
	// text(currentKeyInput.isSpacePressed, 20, 20);

	let range = 100;
	if (currentKeyInput.isSpacePressed)
		range = floor(range / 2);

	if (contador % range == 0)
		obstacles.push(new Obstacle());

	contador++;
}

function resetGame() {
	obstacles = []

	b = new Player(width / 2, height / 2);

	for (let i = 0; i < 20; i++) {
		obstacles.push(new Obstacle());
	}

	colidiu = false;
	contador = 0;

	
	loop();
}