var points = 0;
var cursors = 0;

function scoreClick1() {
    points++;
    document.getElementById("score").innerHTML = points; // Update points display
}

function buyItem() {
    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
    if (points >= cursorCost) {
        cursors++;
        points -= cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("score").innerHTML = points; // Update points display
    }
    else {
        alert("You don't have enough points!");
    }
    var nextCost = Math.floor(10 * Math.pow(1.1, cursors));
    document.getElementById("cursorCost").innerHTML = nextCost;
}