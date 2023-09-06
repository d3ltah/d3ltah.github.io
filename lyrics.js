const lyrics = [
    "I couldn't change it, we were built to fall apart<br>But we ignored it, making messes of our hearts",
    "I love the way you light gas underneath my feet to <br>Keep me warm as you burn me",
    "I've been a lost soul<br>When somebody falls, I go and follow them down",
    "Loving you was easy<br>'Til you got yourself thinking out loud<br>But now you got me with my head in the clouds",
    "Hurting when the dim night falls<br>That is when my heartache calls<br>You told me I was good enough<br>Wish I would have called your bluff",
    "Let your mind be free, save yourself and<br>Leave the words you've spoken, 'cause<br>Some dreams are meant to be broken"
];

const sources = [
    "TEN TIMES", "One Hope", "Vicetone", "Paper Idol", "Jim Yosef", "Hallman"
];

let index = Math.floor(Math.random() * lyrics.length);

document.getElementById("lyric-quote").innerHTML = lyrics[index];
document.getElementById("lyric-author").innerHTML = "- " + sources[index];