// Global Variables
var x = 7;
var timesUserPressesEsc = 0;
var colors = ["red", "green", "yellow", "purple", "blue"];
var events = [
	"mouseover",
	"mouseout",
	"click",
	"wheel",
	"dblclick",
	"keyup",
	"load",
	"keydown",
	"onchange",
];
//Buttons Area
const groupButtons = document.querySelectorAll("a");
groupButtons.forEach((button) => {
	button.addEventListener(events[0], (e) => {
		e.target.style.color = "red";
		e.target.style.padding = "4%";
	});
	button.addEventListener(events[1], (e) => {
		e.target.style.color = "black";
		e.target.style.padding = "0%";
	});
	button.addEventListener(events[2], (e) => {
		setTimeout(() => {
			button.style.color = "green";
			preventDefault();
		}, 200);
	});
});
//Page Area
document.addEventListener(events[3], (e) => {
	groupButtons.forEach((button) => {
		button.style.backgroundColor = "yellow";
		button.style.padding = "4%";
		setTimeout(() => {
			button.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
			button.style.padding = "0%";
		}, 1000);
	});
});
document.addEventListener(events[5], (e) => {});
//Imgs Area
const allImgs = document.querySelectorAll("img");
const randomPic = () => {
	let x = `https://picsum.photos/${Math.floor(Math.random() * 500)}`;
	return x;
};
allImgs.forEach((img) => {
	img.addEventListener(events[4], () => {
		img.src = randomPic();
	});
});

//Window Area
window.addEventListener(events[6], (e) => {
	alert(
		`Welcome To The Fun Bus! Press esc to start the party! Hype up the bus by tapping esc!`
	);
	document.querySelector("html").style.backgroundColor = `${
		colors[Math.floor(Math.random() * 5)]
	}`;
	document.querySelector(`header`).style.backgroundColor =
		colors[Math.floor(Math.random() * 5)];
});
window.addEventListener(events[7], (e) => {
	e.keyCode === 27 ? madness() : null;
});
document.addEventListener(events[8], (e) => {
	let x = document.querySelectorAll("p");
	x.forEach((element) => {
		element.style.fontSize = `${Math.floor(Math.random() * 30)}%`;
	});
});
const madness = () => {
	timesUserPressesEsc++;
	partyMode(timesUserPressesEsc);

	setInterval(() => {
		allImgs.forEach((img) => {
			x = Math.floor(Math.random() * 88);
			img.setAttribute("width", `${x}%`);
			img.src = randomPic();
		});
		document.querySelector(".home").style.width = `${x}%`;
		document.querySelector(".home").style.height = `${x}%`;
		document.querySelector("html").style.backgroundColor = `${
			colors[Math.floor(Math.random() * 5)]
		}`;
		document.querySelector(`header`).style.backgroundColor = `${
			colors[Math.floor(Math.random() * 5)]
		}`;
	}, 1000);
};
//Body
const body = document.querySelector("body");

const partyMode = (x) => {
	if (x == 1) {
		const newH4 = document.createElement("h4");
		newH4.textContent = `Speed:${x}`;
		document.querySelector(`.nav-container`).append(newH4);
	} else if (x > 1) {
		document.querySelector("h4").textContent = `Speed:${x}`;
	}
};
