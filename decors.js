var points = 0;
var cursors = 0;

// Function to update the points display
function updatePointsDisplay() {
    document.getElementById("score").innerHTML = points;
}

// Function to handle clicking the button and updating points
function scoreClick1() {
    points++;
    updatePointsDisplay(); // Update points display
    saveClickCount(); // Save click count to local storage
}

// Function to save the click count to local storage
function saveClickCount() {
    localStorage.setItem("points", points);
}

// Function to retrieve the click count from local storage on page load
window.onload = function() {
    var savedPoints = localStorage.getItem("points");
    if (savedPoints !== null) {
        points = parseInt(savedPoints);
        updatePointsDisplay(); // Update points display with saved value
    }
};
