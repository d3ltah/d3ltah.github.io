window.localStorage.setItem("theme", "light");
const ThemeButton = document.getElementById("theme-toggle");
const ThemeNote = document.getElementById("theme-toggle-note");

function toggleTheme() {
    let sound = new Audio("./Pluck.mp3");
    sound.volume = 0.1;
    sound.load();
    sound.play();

    if (window.localStorage.getItem("theme") == "light") {
        document.documentElement.style.setProperty("--background", "#0f0f0f");
        document.documentElement.style.setProperty("--foreground", "#f0f0f0");
        window.localStorage.setItem("theme", "dark");
        ThemeButton.style.transform = "scaleX(-1)";
        ThemeNote.innerHTML = "Turn on light mode >";
    } else {
        document.documentElement.style.setProperty("--background", "#f0f0f0");
        document.documentElement.style.setProperty("--foreground", "#0f0f0f");
        window.localStorage.setItem("theme", "light");
        ThemeButton.style.transform = "scaleX(1)";
        ThemeNote.innerHTML = "Turn on dark mode >";
    }
}