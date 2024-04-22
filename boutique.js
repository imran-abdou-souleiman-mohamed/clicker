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






/* bouton shop pour ouvrir la boutique */
var shopButton = document.getElementById('shop');
var burgerCard = document.getElementById('burgerCard');

shopButton.addEventListener('click', function() {
    // Vérifier si la carte du burger est actuellement visible
    var isVisible = !burgerCard.classList.contains('hidden');
    
    // Basculer la visibilité de la carte du burger
    if (isVisible) {
        burgerCard.classList.add('hidden'); // Cacher la carte du burger
    } else {
        burgerCard.classList.remove('hidden'); // Afficher la carte du burger
    }
});

/* delai de pop de la card */
var shopButton = document.getElementById('shop');
var burgerCard = document.getElementById('burgerCard');

shopButton.addEventListener('click', function() {
    setTimeout(function() {
        burgerCard.classList.toggle('visible');
    }, 200); // Délai de 200ms avant d'afficher la carte
});



/* cumule de points */
var points = 0;
var autoEarnInterval;

function updatePointsDisplay() {
    document.getElementById("pointsDisplay").innerHTML = "Points: " + points;
}

function startAutoEarn() {
    if (!autoEarnInterval) {
        autoEarnInterval = setInterval(function() {
            points++;
            updatePointsDisplay();
        }, 1000); // Une pièce toutes les 1000 millisecondes (1 seconde)
    }
}

// Appel de la fonction pour démarrer automatiquement le gain de pièces au chargement de la page
startAutoEarn();



/* bouton pour litem augemention de prix */







// Ajoutez ce code après les autres fonctions dans votre fichier JavaScript

var getPointButton = document.getElementById('getPoint');

getPointButton.addEventListener('click', function() {
    points++; // Incrémente le nombre de points
    updatePointsDisplay(); // Met à jour l'affichage des points
});



/* Bonus */
var bonusMultiplier = 1; // Variable pour suivre le nombre de bonus achetés

function updatePointsDisplay() {
    document.getElementById("pointsDisplay").innerHTML = "Points: " + points;
}

function startAutoEarn() {
    if (!autoEarnInterval) {
        autoEarnInterval = setInterval(function() {
            points += (1 + bufs * bonusMultiplier); // Points gagnés par seconde avec le bonus
            updatePointsDisplay(); // Met à jour l'affichage des points
        }, 1000); // Une pièce toutes les 1000 millisecondes (1 seconde)
    }
}

// Appel de la fonction pour démarrer automatiquement le gain de pièces au chargement de la page
startAutoEarn();

function buyItem(itemType) {
    if (itemType === 'bonus') {
        var bonusCost = 20; // Coût de base de l'élément bonus
        if (points >= bonusCost) {
            points -= bonusCost; // Soustrait le coût de l'élément bonus aux points
            bufs++; // Augmente le nombre de bonus
            bonusMultiplier += 3; // Augmente le multiplicateur de points
            updatePointsDisplay(); // Met à jour l'affichage des points
            document.getElementById("bufs").innerHTML = bufs; // Met à jour l'affichage du nombre de bonus
        } else {
            alert("Vous n'avez pas assez de points!");
        }
    }
}
