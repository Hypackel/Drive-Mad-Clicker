let score = 0;
let upgrade = 1;
let cheat = -1;
function onCheat(newVal) {
    cheat = newVal
    localStorage.setItem("cheat", cheat.toString())
    if (cheat > 2) {
        window.location.href = "/locker.html"
    }
}
window.onload = function () {
    upgrade = localStorage.getItem("upgrade") ? parseInt(localStorage.getItem("upgrade")): 0;
    score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")): 0;
    cheat = localStorage.getItem("cheat") ? parseInt(localStorage.getItem("cheat")): 0;
    // onCheat(cheat)
    document.getElementById("score").innerHTML = (score);
    toohigh();
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() == "enter") {
            alert("Stop cheating")
            onCheat(cheat + 1)
        }
    })
}
function add(){
        score+=upgrade;
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        toohigh();
        document.getElementById("test2").focus()
        win();
}
let pin 
function bypass() {
    let pin = prompt("What is the pin?");
    if (pin == 1234) {
        score = prompt("What do you want your score to be?");
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        toohigh();
    } else {
        alert("No cheating!");
        score = 1;
        upgrade = 1;
        document.getElementById("score").innerHTML = (score);
        // stop2 = 1
        // stop1 = 1
    }
}
// anticheat functions
function toohigh() {
    if (score >= 1000000) {
       alert("Cheater!");
       score = upgrade;
       upgrade = 1;
       document.getElementById("score").innerHTML = (score);
       localStorage.setItem("score", score.toString());
    }
}
//reset function
function reset() {
    score = 1;
    upgrade = 1;
    localStorage.setItem("score", score.toString());
    document.getElementById("score").innerHTML = (score);
    localStorage.setItem("upgrade", upgrade.toString());
    // stop2 = 1
    // stop1 = 1
}
// Upgrade Stuff
function test() {
    alert(upgrade);
}
function upgrade1() {
    if (score >= 100) {
        score -= 100;
        document.getElementById("score").innerHTML = (score);
        localStorage.setItem("score", score.toString());
        upgrade++;
        localStorage.setItem("upgrade", upgrade.toString());
    }
}
//End goal/Win Condition
function win() {
    if (score >= 200000) {
       alert("You Won!");
       upgrade = 1;
       localStorage.setItem("upgrade", upgrade.toString());
       document.getElementById("score").innerHTML = (score);
       localStorage.setItem("score", score.toString());
       reset()
    }
}
//other
function htm() {
    alert("Coming Soon")
}