var points = 0;
var cursors = 0;

function scoreClick1() {
    points++;
    document.getElementById("score").innerHTML = points; 
    saveClickCount();
}


function saveClickCount() {
    localStorage.setItem("points", points);
}

