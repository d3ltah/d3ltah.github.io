const lyrics = [
    "I couldn't change it, we were built to fall apart<br>But we ignored it, making messes of our hearts",
    "I love the way you light gas underneath my feet to <br>Keep me warm as you burn me",
    "Keep on talking, I can't get enough<br>I love the way that you hate my guts",
    "I've been a lost soul<br>When somebody falls, I go and follow them down",
    "Loving you was easy<br>'Til you got yourself thinking out loud<br>But now you got me with my head in the clouds",
    "Hurting when the dim night falls<br>That is when my heartache calls<br>You told me I was good enough<br>Wish I would have called your bluff",
    "Let your mind be free, save yourself and<br>Leave the words you've spoken, 'cause<br>Some dreams are meant to be broken",
    "I keep my heart under the floorboards<br>Deep in the dark, far away from yours",
    "Thanks for the memories<br>Even though they weren't so great",
    "You warned me of other guys<br>And then you told me you lied<br>You schemed to see my reaction",
    "Yeah, when they knock you down, down, down<br>Kid, you gotta stand up, stand up",
    "We only love the highs 'cause the lows get<br>Lower than they should, it's dangerous",
    "You know I'm hoping all your dreams come true<br>But I hope you have a couple little nightmares too",
    "You say that you're sorry, call me when you're lonely<br>I'll just let it ring, 'cause I learnt that when you're talking<br>No, it don't mean nothing",
    "I miss you more than I remember you",
    "Keep parked up on your throne<br>Can't find some time alone<br>Just please turn off your phone<br>Please clean up your act 'cause you look like a clown",
    "Call it games, call it quits<br>We're two pieces that don't fit<br>If you could just admit, you'll see it the same",
    "I thought you left my mind<br>At least a thousand times<br>I'm not over you<br>But I'm over overthinking about you"
];

const sources = [
    "TEN TIMES", "One Hope", "One Hope", "Vicetone", "Paper Idol", "Jim Yosef", "Hallman", "The Unlikely Candidates", "Fall Out Boy", "Ethan Bortnick",
    "The Cab", "Vicetone", "Trixxie", "Paradigm", "Unlike Pluto", "updog", "Besomorph", "Mickey Valen"
];

let index = Math.floor(Math.random() * lyrics.length);

document.getElementById("lyric-quote").innerHTML = lyrics[index];
document.getElementById("lyric-author").innerHTML = "- " + sources[index];