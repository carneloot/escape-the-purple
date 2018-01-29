function keyPressed() {
	switch (keyCode) {
		case    UP_ARROW: currentKeyInput.isUpPressed    = true; return;
		case  DOWN_ARROW: currentKeyInput.isDownPressed  = true; return;
		case  LEFT_ARROW: currentKeyInput.isLeftPressed  = true; return;
		case RIGHT_ARROW: currentKeyInput.isRightPressed = true; return;
		case          32: currentKeyInput.isSpacePressed = true; return;
	}
}

function keyReleased() {
	switch (keyCode) {
		case    UP_ARROW: currentKeyInput.isUpPressed    = false; return;
		case  DOWN_ARROW: currentKeyInput.isDownPressed  = false; return;
		case  LEFT_ARROW: currentKeyInput.isLeftPressed  = false; return;
		case RIGHT_ARROW: currentKeyInput.isRightPressed = false; return;
		case          32: currentKeyInput.isSpacePressed = false; return;
	}
}

class KeyInput {
  constructor() {
    this.isUpPressed = false;
    this.isDownPressed = false;
    this.isLeftPressed = false;
		this.isRightPressed = false;
		this.isSpacePressed = false;
	}
	
	
}