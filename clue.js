let suspectsArray = ["Weston", "Pierce", "Alex", "Kevin", "Matt", "Ryan"]
let weaponsArray = ["knife", "gun", "frying pan", "rope", "car", "poison", "baseball bat", "glass"]
let roomsArray = ["Dyson Center", "Library", "Donnelly Hall", "Hancock Center", "Communications Center", "Steel Plant Gallery", "Cornell Boathouse", "McCann Center", "Champagnat Hall", "Foy Townhouses"]
let random = 0;
let mystery = {
    suspect: "",
    weapon: "",
    room: ""
}

document.querySelector("#start-game").addEventListener("click", () => {
    pickMystery();
    revealMystery(mystery);
})

function randomSelect(cardStack) {
    random = Math.floor(Math.random() * (cardStack.length));
    return cardStack[random];
}

function pickMystery() {
    mystery.suspect = randomSelect(suspectsArray);
    mystery.weapon = randomSelect(weaponsArray);
    mystery.room = randomSelect(roomsArray);
    return mystery;
}

function revealMystery(theMystery) {
    message = ``
    alert(`${theMystery.suspect} killed Mr. Marist using the ${theMystery.weapon} in the ${theMystery.room}!`)
}

