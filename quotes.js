const quoteWrapper = document.querySelector("#quote-wrapper");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#author");
const quoteSource = document.querySelector("#source");

var typed;
var bagList;
var lastPicked;
var randomQuote;

function newQuote() {
	fetch("quotes.json")
		.then((response) => response.json())
		.then((data) => {
			// bag shuffle to avoid repeats
			if (!bagList || bagList.length == 0) {
				bagList = data.quotes.map((q) => q);
			}
			while (randomQuote === lastPicked) {
				randomQuote = bagList[Math.floor(Math.random() * bagList.length)];
			}
			bagList.splice(bagList.indexOf(randomQuote), 1);
			lastPicked = randomQuote;

			quoteWrapper.style.height =
				1.3 * (randomQuote.content.match(/\n/g) || []).length + 2 + "em";

			var quoteContent = randomQuote.content.replace(/\n/g, "<br>");

			if (typed) {
				console.log();
				typed.destroy();
			}

			typed = new Typed("#quote-text", {
				strings: [quoteContent + " "],
				typeSpeed: 35,
				cursorChar: " _",
				fadeOut: true,
			});

			quoteAuthor.innerHTML = randomQuote.author;
			quoteSource.innerHTML = randomQuote.source;
		});
}

newQuote();
