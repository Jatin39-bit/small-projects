let clutter = ""
timer = 60;
let hitnum = 0;
var score = 0;

function loaddiv() {
    clutter = ""
    for (let i = 0; i <= 175; i++) {
        var num = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${num}</div>`
    }
    document.querySelector(".gameb").innerHTML = clutter;
}

function countdown() {
    let interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.getElementById("timer").innerHTML = timer;
        } else {
            clearInterval(interval)
            document.querySelector(".gameb").innerHTML = `<h1>Game Over </h1>`;
        }
    }, 1000)
}
function hit() {
    hitnum = Math.floor(Math.random() * 10)
    document.getElementById("hit").innerHTML = hitnum;
}
function checkscore() {
    document.querySelector(".gameb").addEventListener("click", function (dets) {
        countdown()
        loaddiv()
        var clicknum = Number(dets.target.innerHTML)
        if (hitnum == clicknum) {
            score += 10;
            document.getElementById("score").innerHTML = score;
            hit()
        }
    })
}
loaddiv()
hit()
checkscore()