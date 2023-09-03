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

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&api_key=${key}&format=json&limit=1&user=bbqbeanburger&extended=1`)
    .then((response) => response.json())
    .then((json) => {
        var lastPlayed = json.recenttracks.track[0];
        document.getElementById("spotify-title").innerHTML = lastPlayed.name;
        document.getElementById("spotify-artist").innerHTML = lastPlayed.artist.name;
        document.getElementById("spotify-album").innerHTML = "on " + lastPlayed.album["#text"];
        document.getElementById("spotify-img").src = lastPlayed.image[3]["#text"];
        
        try {
            if (lastPlayed["@attr"].nowplaying == "false" || lastPlayed["@attr"].nowplaying == undefined) {
                document.getElementById("spotify-uts").innerHTML = timeSince(lastPlayed.date.uts * 1000) + " ago";
                document.getElementById("spotify-live-dot").style.display = "none";
            } else {
                document.getElementById("spotify-uts").innerHTML = "Now playing";
            }
        } catch (TypeError) {
            document.getElementById("spotify-live-dot").style.display = "none";
        }
    });
