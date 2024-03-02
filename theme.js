const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleIcon = themeToggleBtn.querySelector("i");

function applyTheme() {
	if (window.localStorage.getItem("theme") === "dark") {
		document.documentElement.style.setProperty("--bg-colour", "#1a1a1a");
		document.documentElement.style.setProperty("--body-colour", "#faf1f1");
		themeToggleIcon.classList.remove("fa-mug-hot");
		themeToggleIcon.classList.add("fa-martini-glass");
	} else {
		document.documentElement.style.setProperty("--bg-colour", "#faf1f1");
		document.documentElement.style.setProperty("--body-colour", "#1a1a1a");
		themeToggleIcon.classList.remove("fa-martini-glass");
		themeToggleIcon.classList.add("fa-mug-hot");
	}
}

function toggleTheme() {
	window.localStorage.setItem(
		"theme",
		window.localStorage.getItem("theme") === "dark" ? "light" : "dark"
	);
	applyTheme();
}