const lastFmUrl = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bbqbeanburger&api_key=786ecc4a87d38105baee228090b1d19c&limit=1&extended=1&format=json";
var birthdate = new Date("Jan 25 2008");
var cur = new Date();
var diff = cur - birthdate;

document.getElementById("age").innerHTML = Math.floor(diff / 31557600000);

function updateTime() {
	var d = new Intl.DateTimeFormat("en-GB", {
		hour: "numeric",
		minute: "numeric"
	});
	document.getElementById("local-time").innerHTML = d.format();
}

updateTime();
setInterval(updateTime, 1000);

const trackName = document.getElementById("track-name");
const artistName = document.getElementById("artist-name");
const albumName = document.getElementById("album-name");
const albumCover = document.getElementById("spot-album-cover");
const isPlaying = document.getElementById("spot-playing");

function updateSpotifyWidget() {
	fetch(lastFmUrl)
		.then(response => response.json())
		.then(jsonString => {
			const track = jsonString.recenttracks.track[0];
			trackName.innerHTML = track.name;
			artistName.innerHTML = track.artist.name;
			albumName.innerHTML = track.album["#text"] == track.name ? "" : "on " + track.album["#text"];
			albumCover.src = track.image[3]["#text"];
			isPlaying.innerHTML = "@attr" in track ? "now playing" : "last played";
		});
}

updateSpotifyWidget();
setInterval(updateSpotifyWidget, 1200);