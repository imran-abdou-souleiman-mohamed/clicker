var points = 0;
var cursors = 0;
var bufs = 0;

function scoreClick1() {
    points++;
    document.getElementById("score").innerHTML = points; // Update points display
}

function buyItem(itemType) {
    if (itemType === 'cursor') {
        var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
        if (points >= cursorCost) {
            cursors++;
            points -= cursorCost;
            document.getElementById("cursors").innerHTML = cursors;
            document.getElementById("score").innerHTML = points; // Update points display
        } else {
            alert("You don't have enough points!");
        }
        var nextCursorCost = Math.floor(10 * Math.pow(1.1, cursors));
        document.getElementById("cursorCost").innerHTML = nextCursorCost;
    } else if (itemType === 'buf') {
        var bufCost = Math.floor(50 * Math.pow(1.1, bufs));
        if (points >= bufCost) {
            bufs++;
            points -= bufCost;
            document.getElementById("bufs").innerHTML = bufs;
            document.getElementById("score").innerHTML = points; // Update points display
            document.getElementById("points").setAttribute("onclick", "scoreClick3()");
        } else {
            alert("You don't have enough points!");
        }
        var nextBufCost = Math.floor(50 * Math.pow(1.1, bufs));
        document.getElementById("bufCost").innerHTML = nextBufCost;
    }
}

function scoreClick3() {
    points += 3;
    document.getElementById("score").innerHTML = points; // Update points display
}
