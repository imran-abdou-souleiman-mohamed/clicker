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
        pointsPerClick *= 3; 
    }, 60000); 

    
    setInterval(function() {
        cursorPrice *= 10; 
    }, 3600000);
}

window.onload = initializeGame;
