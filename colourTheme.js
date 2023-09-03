const ThemeButton = document.getElementById("theme-toggle");
const ThemeNote = document.getElementById("theme-toggle-note");
const FuseSound = new Audio("SatisfactoryFuse.wav")
var switchCount = 0;
var rainbowMode = false;

function toggleThemeCookie() {
    if (window.localStorage.getItem("theme") == "light") {
        window.localStorage.setItem("theme", "dark");
    } else {
        window.localStorage.setItem("theme", "light");
    }
}

function updateTheme() {
    if (window.localStorage.getItem("theme") == "light") {
        document.documentElement.style.setProperty("--background", "#0f0f0f");
        document.documentElement.style.setProperty("--foreground", "#f0f0f0");
        ThemeButton.style.transform = "scaleX(-1)";
    } else {
        document.documentElement.style.setProperty("--background", "#f0f0f0");
        document.documentElement.style.setProperty("--foreground", "#0f0f0f");
        ThemeButton.style.transform = "scaleX(1)";
    }

    if (switchCount >= 10) {
        breakLights();
    }

    ThemeNote.innerHTML = `Turn on ${window.localStorage.getItem("theme")} mode >`;
}

function breakLights() {
    document.getElementsByTagName("main")[0].style.display = "none";
    document.body.style.backgroundColor = "#000000";

    let brokenTextContainer = document.createElement("div");
    brokenTextContainer.style.display = "table";
    brokenTextContainer.style.height = "100vh";
    brokenTextContainer.style.width = "100vw";

    let brokenText = document.createElement("p");
    brokenText.innerHTML = "Nice one, you div. You broke the lights.";
    brokenText.style.textAlign = "center";
    brokenText.style.display = "table-cell";
    brokenText.style.verticalAlign = "middle";
    brokenText.style.color = "#f0f0f0";

    FuseSound.play();
    setTimeout(() => {
        brokenTextContainer.appendChild(brokenText);
        document.body.appendChild(brokenTextContainer);
    }, 1000);
    setTimeout(() => {
        brokenTextContainer.load();
    }, 3000);
}

function toggleTheme() {
    toggleThemeCookie();
    updateTheme();
    switchCount++;
}

function rainbowModeToggle() {
    if (!rainbowMode) {
        rainbowMode = true;
        document.documentElement.style.setProperty("--accent", "rainbow-accent 7s linear infinite");
    } else {
        rainbowMode = false;
        document.documentElement.style.setProperty("--accent", "default-accent 7s linear infinite");
    }
}

updateTheme();