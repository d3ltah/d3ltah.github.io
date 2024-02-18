const lastFmUrl = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bbqbeanburger&api_key=786ecc4a87d38105baee228090b1d19c&limit=1&extended=1&format=json";
var birthdate = new Date("Jan 25 2008");
var cur = new Date();
var diff = cur - birthdate;

document.getElementById("age").innerHTML = Math.floor(diff / 31557600000);

function updateTime() {
	var d = new Intl.DateTimeFormat("en-GB", {
		hour: "numeric",
		minute: "numeric",
		hour12: true
	});
	document.getElementById("local-time").innerHTML = d.format();
}

updateTime();
setInterval(updateTime, 1000);

function updateSpotifyWidget() {
	fetch(lastFmUrl)
		.then(response => response.json())
		.then(jsonString => {
			const track = jsonString.recenttracks.track[0];
			if ("@attr" in track) {
				document.getElementById("track-name").innerHTML = track.name;
				document.getElementById("artist-name").innerHTML = track.artist.name;
				document.getElementById("album-name").innerHTML = track.album["#text"] == track.name ? "" : track.album["#text"];
				document.getElementById("spot-album-cover").src = track.image[3]["#text"];
				document.getElementById("spot-album-cover").style = "";
				document.getElementById("spot-icon").style.opacity = 1;
			} else {
				document.getElementById("track-name").innerHTML = "the sound of silence";
				document.getElementById("artist-name").innerHTML = "";
				document.getElementById("album-name").innerHTML = "";
				document.getElementById("spot-album-cover").src = "";
				document.getElementById("spot-album-cover").style = "background-color: var(--body-colour); opacity: 0.5";
				document.getElementById("spot-icon").style.opacity = 0;
			}
		});
}

updateSpotifyWidget();
setInterval(updateSpotifyWidget, 1200);