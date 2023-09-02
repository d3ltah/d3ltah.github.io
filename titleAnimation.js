var cycleTicker = 0;
const Names = ["D3", "deltah", "bbqbeanburger", "D3LTAH"];
const NameCycle = document.getElementById("name-cycle");

function animateName() {
    let currentName = Names[cycleTicker % Names.length];
    
    for (let i = 0; i < currentName.length; i++) {
        setTimeout(() => {
            let character = document.createElement("span");
            character.innerHTML = currentName[i];
            character.classList.add("pop-animation");
            character.classList.add("name-letter");
            NameCycle.appendChild(character);
        }, 40 * i);
    }

    cycleTicker++;
    NameCycle.innerHTML = "";
}

animateName();
setInterval(animateName, 3000);