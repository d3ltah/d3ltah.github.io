const ThemeButton = document.getElementById("theme-toggle");
const ThemeNote = document.getElementById("theme-toggle-note");

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
    ThemeNote.innerHTML = `Turn on ${window.localStorage.getItem("theme")} mode >`;
}

function toggleTheme() {
    toggleThemeCookie();
    updateTheme();
}

updateTheme();