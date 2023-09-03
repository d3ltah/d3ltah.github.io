function updateSpotifyDisplay() {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&api_key=${key}&format=json&limit=1&user=bbqbeanburger&extended=1`)
        .then((response) => response.json())
        .then((json) => {
            var track = json.recenttracks.track[0];
            document.getElementById("spotify-title").innerHTML = track.name;
            document.getElementById("spotify-artist").innerHTML = track.artist.name;
            document.getElementById("spotify-img").src = track.image[3]["#text"];
            
            if (track.name != track.album["#text"]) {
                document.getElementById("spotify-album").style.fontSize = "0.6em";
                document.getElementById("spotify-album").innerHTML = "on " + track.album["#text"];
            } else {
                document.getElementById("spotify-album").style.fontSize = "0";
            }

            let nowPlaying = track['@attr'] ? track['@attr'].nowplaying === "true" : false;

            if (nowPlaying == true) {
                document.getElementById("spotify-live-dot").style.visibility = "visible";
                document.getElementById("spotify-uts").innerHTML = "Now Playing";
            } else {
                document.getElementById("spotify-live-dot").style.visibility = "hidden";
                document.getElementById("spotify-uts").innerHTML = timeSince(track.date.uts * 1000) + " ago";
            }
        });
}

//https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&api_key=6789c0120d1863a44196d2880b1c39b0&format=json&limit=1&user=bbqbeanburger&extended=1

var timeSince = function (date) {
    if (typeof date !== 'object') {
        date = new Date(date);
    }

    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
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
        intervalType += 's';
    }

    if (interval < 10 && (intervalType == "second" || intervalType == "seconds")) {
        return "Just now";
    }

    return interval + ' ' + intervalType;
}

var aDay = 24 * 60 * 60 * 1000;
console.log(timeSince(new Date(Date.now() - aDay)));
console.log(timeSince(new Date(Date.now() - aDay * 2)));

const SpotifyContainer = document.getElementById("spotify-container");

var key = "6789c0120d1863a44196d2880b1c39b0";

var xmlHttp = new XMLHttpRequest();

updateSpotifyDisplay();
setInterval(updateSpotifyDisplay, 5000);
