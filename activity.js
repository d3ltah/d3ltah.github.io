const SpotifyContainer = document.getElementById("spotify-container");
const ArtistsContainer = document.getElementById("spotify-artists");
const key = "6789c0120d1863a44196d2880b1c39b0";

const steamDataURL = "https://steamcommunity.com/id/BingBingPie?xml=1";

function updateSpotifyDisplay() {
	fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&api_key=${key}&format=json&limit=1&user=bbqbeanburger&extended=1`
	)
		.then((response) => response.json())
		.then((json) => {
			var track = json.recenttracks.track[0];
			document.getElementById("spotify-title").innerHTML = track.name;
			document.getElementById("spotify-artist").innerHTML = track.artist.name.toUpperCase();
			document.getElementById("spotify-img").src = track.image[3]["#text"];

			document.getElementById("spotify-button").href = track.url;
			document.getElementById("spotify-album").innerHTML = track.album["#text"].toUpperCase();

			let nowPlaying = track["@attr"]
				? track["@attr"].nowplaying === "true"
				: false;

			if (nowPlaying == true) {
				document.documentElement.style.setProperty(
					"--spotify-live-dot-size",
					1
				);
				document.getElementById("spotify-uts").innerHTML = "Now Playing";
				document.getElementById("spotify-img").style.animation = "";
			} else {
				document.documentElement.style.setProperty(
					"--spotify-live-dot-size",
					0
				);
				document.getElementById("spotify-uts").innerHTML =
					"Last Played <span style='font-weight: 300'>- " +
					timeSince(track.date.uts * 1000) +
					" ago</span>";
				document.getElementById("spotify-img").style.animation = "none";
			}
		});
}

function updateTopArtists() {
	fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=bbqbeanburger&api_key=${key}&format=json&limit=7`
	)
		.then((response) => response.json())
		.then((json) => {
			for (var i = 0; i < json.topartists.artist.length; i++) {
				var artistElement = document.createElement("p");
				artistElement.innerHTML = json.topartists.artist[i].name;
				ArtistsContainer.appendChild(artistElement);
			}
		});
}

var timeSince = function (date) {
	if (typeof date !== "object") {
		date = new Date(date);
	}

	var seconds = Math.floor((new Date() - date) / 1000);
	var intervalType;

	var interval = Math.floor(seconds / 31536000);
	if (interval >= 1) {
		intervalType = "year";
	} else {
		interval = Math.floor(seconds / 2592000);
		if (interval >= 1) {
			intervalType = "month";
		} else {
			interval = Math.floor(seconds / 86400);
			if (interval >= 1) {
				intervalType = "day";
			} else {
				interval = Math.floor(seconds / 3600);
				if (interval >= 1) {
					intervalType = "hour";
				} else {
					interval = Math.floor(seconds / 60);
					if (interval >= 1) {
						intervalType = "minute";
					} else {
						interval = seconds;
						intervalType = "second";
					}
				}
			}
		}
	}

	if (interval > 1 || interval === 0) {
		intervalType += "s";
	}

	if (
		interval < 10 &&
		(intervalType == "second" || intervalType == "seconds")
	) {
		return "Just now";
	}

	return interval + " " + intervalType;
};

updateSpotifyDisplay();
updateTopArtists();
setInterval(updateSpotifyDisplay, 5000);

// http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=bbqbeanburger&api_key=6789c0120d1863a44196d2880b1c39b0&format=json&limit=5
