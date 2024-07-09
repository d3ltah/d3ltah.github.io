const ThemeButton = document.getElementById("theme-toggle");
const ThemeNote = document.getElementById("theme-toggle-note");
const FuseSound = new Audio("../SatisfactoryFuse.wav");
var switchCount = 0;
var rainbowMode = false;

function toggleThemeCookie() {
	if (window.localStorage.getItem("theme") == "light" || !window.localStorage.getItem("theme")) {
		window.localStorage.setItem("theme", "dark");
	} else {
		window.localStorage.setItem("theme", "light");
	}
}

function updateTheme() {
	if (window.localStorage.getItem("theme") == "light") {
		document.documentElement.style.setProperty("--background", "#1a1a1a");
		document.documentElement.style.setProperty("--foreground", "#faf1f1");
		ThemeButton.style.transform = "scaleX(-1)";
	} else {
		document.documentElement.style.setProperty("--background", "#faf1f1");
		document.documentElement.style.setProperty("--foreground", "#1a1a1a");
		ThemeButton.style.transform = "scaleX(1)";
	}

	if (switchCount > 10) {
		breakLights();
	}

	ThemeNote.innerHTML = `Turn on ${window.localStorage.getItem(
		"theme"
	)} mode >`;
}

function breakLights() {
	document.getElementsByTagName("main")[0].style.display = "none";
	document.body.style.backgroundColor = "#000000";

	let brokenTextContainer = document.createElement("div");
	brokenTextContainer.id = "broken-text-container";
	// brokenTextContainer.style.display = "table";
	// brokenTextContainer.style.height = "100vh";
	// brokenTextContainer.style.width = "100vw";

	let brokenText = document.createElement("p");
	brokenText.id = "broken-text";
	brokenText.innerHTML = "<span style='font-size: 1.3em; font-weight: bold;'>Fuse Broken</span><br />One of your Power Grids has shut down.";
	brokenText.style.color = "#f0f0f0";

	FuseSound.play();
	setTimeout(() => {
		brokenTextContainer.appendChild(brokenText);
		document.body.appendChild(brokenTextContainer);
	}, 1000);
}

function toggleTheme() {
	toggleThemeCookie();
	updateTheme();
	switchCount++;
}

function rainbowModeToggle() {
	if (!rainbowMode) {
		rainbowMode = true;
		document.documentElement.style.setProperty(
			"--accent",
			"rainbow-accent 7s linear infinite"
		);
		let button = document.getElementById("logo-button");

		let middleX =
			(button.getBoundingClientRect().left +
				button.getBoundingClientRect().width / 2) /
			window.innerHeight;
		let middleY =
			(button.getBoundingClientRect().top +
				button.getBoundingClientRect().height / 2) /
			window.innerWidth;

		let pos = { x: middleX, y: middleY };
		console.log(pos);
		confetti({
			origin: pos,
			spread: 360,
			decay: 0.9,
			scalar: 0.8,
			particleCount: 50,
			startVelocity: 20,
			colors: [
				"#d30000",
				"#ffa500",
				"#cccc13",
				"#7fff00",
				"#00ffff",
				"#0000ff",
				"#9932cc",
				"#d30000",
			],
		});
	} else {
		rainbowMode = false;
		document.documentElement.style.setProperty(
			"--accent",
			"default-accent 7s linear infinite"
		);
	}
}

updateTheme();
