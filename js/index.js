// Global Variables
var x = 7;
var times = 0;
var colors = ["red", "green", "yellow", "purple", "blue"];
//Buttons Area
const groupButtons = document.querySelectorAll("a");
groupButtons.forEach((button) => {
	console.log(button);
	button.addEventListener("mouseover", (e) => {
		e.target.style.color = "red";
	});
	button.addEventListener("mouseout", (e) => {
		e.target.style.color = "black";
	});
	button.addEventListener("click", (e) => {
		setTimeout(() => {
			button.style.color = "green";
			preventDefault();
		}, 200);
	});
});
//Page Area
document.addEventListener("wheel", (e) => {
	groupButtons.forEach((button) => {
		button.style.backgroundColor = "yellow";
		button.style.padding = "4%";
		setTimeout(() => {
			button.style.backgroundColor = "white";
			button.style.padding = "0%";
		}, 1000);
	});
});
document.addEventListener("keyup", (e) => {});
//Imgs Area
const allImgs = document.querySelectorAll("img");
allImgs.forEach((img) => {
	img.addEventListener("focus", () => {
		img.style.width = "60%";
	});
});
//Window Area
window.addEventListener("load", (e) => {
	alert(
		`Welcome To The Fun Bus! Press esc to start the party! Hype up the bus by tapping esc!`
	);
	document.querySelector("html").style.backgroundColor = `${
		colors[Math.floor(Math.random() * 5)]
	}`;
	document.querySelector(`header`).style.backgroundColor =
		colors[Math.floor(Math.random() * 5)];
});
window.addEventListener("keydown", (e) => {
	e.keyCode === 27 ? madness() : null;
});
const madness = () => {
	times++;
	partyMode(times);
	allImgs.forEach((img) => {
		setInterval(() => {
			x = Math.floor(Math.random() * 88);
			img.setAttribute("width", `${x}%`);
			document.querySelector(".home").style.width = `${x}%`;
			document.querySelector(".home").style.height = `${x}%`;
			document.querySelector("html").style.backgroundColor = `${
				colors[Math.floor(Math.random() * 5)]
			}`;
			document.querySelector(`header`).style.backgroundColor = `${
				colors[Math.floor(Math.random() * 5)]
			}`;
		}, 1000);
	});
};
//Body
const body = document.querySelector("body");

const partyMode = (x) => {
	console.log(x);
	if (x == 1) {
		console.log("gg");
		const newH4 = document.createElement("h4");
		newH4.textContent = `Speed:${x}`;
		document.querySelector(`.nav-container`).append(newH4);
	} else if (x > 1) {
		document.querySelector("h4").textContent = `Speed:${x}`;
	}
};
