var points = 0;
var pointsPerClick = 1;
var cursors = 0;
var cursorPrice = 10;

function scoreClick1() {
    points += pointsPerClick;
    document.getElementById("score").innerHTML = points;
    saveClickCount();
}

function saveClickCount() {
    localStorage.setItem("points", points);
}

function initializeGame() {
    var savedPoints = localStorage.getItem("points");
    if (savedPoints) {
        points = parseInt(savedPoints);
    }
    document.getElementById("score").innerHTML = points;


    setInterval(function() {
        cursorPrice *= 10;
    }, 3600000);
}

function changeImage() {
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    
    if (image1.style.display !== "none") {
        image1.style.display = "none";
        image2.style.display = "block";
    } else {
        image1.style.display = "block";
        image2.style.display = "none";
    }
}





window.onload = initializeGame;
