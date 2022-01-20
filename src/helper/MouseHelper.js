function setMouseXY(x, y) {
	const cursor = document.getElementById("cursor");
	cursor.style.left = `${x}px`;
	cursor.style.top = `${y}px`;
}

function makeCursorSmall() {
	const cursor = document.getElementById("cursor");
	cursor.classList.add("small");
}

function makeCursorNormal() {
	const cursor = document.getElementById("cursor");
	cursor.classList.remove("small");
}

function makeMagnet(event, element) {
	let x = event.nativeEvent.offsetX;
	let y = event.nativeEvent.offsetY;
	let width = element.offsetWidth;
	let height = element.offsetHeight;
	let move = 30;
	let xMove = (x / width) * (move * 2) - move;
	let yMove = (y / height) * (move * 2) - move;

	element.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

function destroyMagnet(event) {
	const el = event.target;
	el.style.transform = "";
}

export { setMouseXY, makeCursorSmall, makeCursorNormal, makeMagnet, destroyMagnet };
