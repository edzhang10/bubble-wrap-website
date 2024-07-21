let score = 0

function pop() {
    score++;
    document.getElementById("popped").innerHTML = score;
    document.getElementById("pop").cloneNode(true).play();
}

