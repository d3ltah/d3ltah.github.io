const cursor = document.getElementById("user-cursor");

var cursorX = 0;
var cursorY = 0;

document.onmousemove = (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;

    requestAnimationFrame(updateCursor);
}

document.onscroll = () => {
    const bottomPosition = window.innerHeight + document.body.scrollY;
    const bodyHeight = document.body.scrollHeight;

    document.documentElement.style.setProperty("--cursor-x", cursorX + window.scrollX + "px");
    document.documentElement.style.setProperty("--cursor-y", cursorY + window.scrollY + "px");
}

document.onmousedown = (e) => {
    switch (e.button) {
        case 0: // lmb
            cursor.style.transform = "translate(-50%, -50%) scale(0.6)";
            cursor.style.backgroundColor = "white";
            cursor.style.border = "0px solid white";
            break;
        case 1: // mmb
            cursor.style.transform = "translate(-50%, -50%) scale(0.6)";
            cursor.style.backgroundColor = "white";
            cursor.style.border = "0px solid white";
            e.preventDefault();
            break;
        case 2: // rmb
            cursor.style.backgroundColor = "transparent";
            cursor.style.transform = "translate(-50%, -50%) scale(0.6)";
            cursor.style.border = "7px solid white";
            break;
    }
    
}

document.onmouseup = (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.backgroundColor = "";
    cursor.style.border = "";
}

function updateCursor() {
    console.log(cursor.offsetHeight);

    document.documentElement.style.setProperty("--cursor-x", cursorX + window.scrollX + "px");
    document.documentElement.style.setProperty("--cursor-y", cursorY + window.scrollY + "px");

    // do not move the cursor further down if it will cause the cursor to go off the screen
    if (
        (cursorY + cursor.offsetHeight > window.innerHeight) ||
        (cursorY < cursor.offsetHeight) ||
        (cursorX + cursor.offsetWidth > window.innerWidth) ||
        (cursorX < cursor.offsetWidth)
        ) {
        cursor.style.height = "0px";
        cursor.style.width = "0px";
    } else {
        cursor.style.height = "";
        cursor.style.width = "";
    }
}
