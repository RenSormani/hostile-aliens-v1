import { EnemyShip } from "./enemy.js";

const shipsContainer = document.querySelector(".ships");
const shootButton = document.querySelector(".button__shoot");
let inPlay = false;
let enemyArr = [];

// Creates an array of all ships (ie motherShip, defenceShips and attackShips)
const getAllShips = () => {
    const motherShip = new EnemyShip("motherShip", 100, 9, 1, '<img class = "ships__mother" src="/images/motherShip.png">');
    const defenceShip = new EnemyShip("defenceShip", 80, 10, 5, '<img class = "ships__defence" src="/images/defenceShip.png">');
    const attackShip = new EnemyShip("attackShip", 45, 12, 8, '<img class ="ships__attack" src="/images/attackShip.png">');
    enemyArr = motherShip.getShipsArr().concat(defenceShip.getShipsArr(), attackShip.getShipsArr());
    return enemyArr;
}

// Use shipsContainer to display all ships and their health on the screen
const displayShips = () => {
    shipsContainer.innerHTML = enemyArr.map(ship => `<div>${ship.shipImage}<br>${ship.health}</div>`).join(" ");
}

//Starter game settings
const startGame = () => {
    getAllShips();
    displayShips();
    inPlay = true;
    shootButton.innerHTML = "FIRE!";
}

// Use Math.random to select random enemy ship to target
const selectTarget = () => {
    let targetShip = enemyArr[Math.floor(Math.random()*enemyArr.length)];
    return targetShip;
}

// Reduce target ship total hit points by damage amount
// If total hit points <= 0 ship is destroyed (removed from enemyArr)
const hitTarget = () => {
    let targetShip = selectTarget();
    targetShip.reduceHealth();
    if (targetShip.health <= 0) {
        let i = enemyArr.indexOf(targetShip);
        if (i != -1) {
            targetShip.shipImage = '<img class = "ships__explosion" src="/images/explosion.png">'
            targetShip.health = "";
            setTimeout(() => {
                enemyArr.splice(i, 1);
                displayShips();
              }, 500)
        }
    }
}


// gameOver occurs when the motherShip is destroyed
const gameOver = () => {
    if (enemyArr.some(ship => ship.name === "motherShip" && ship.health <= 0)) {
        alert ("WINNER, WINNER! Congratulations player! Take your place in the pantheon of heroes who have saved the Earth, such as Superman, Spider-Man, Thor and Bruce Willis!");
        inPlay = false;
    }
}

// Call functions when button is clicked
shootButton.addEventListener("click", (event) => {
    if (inPlay === false) {
        startGame();
    } else {
        hitTarget();
        displayShips();
        gameOver();
    }
})

const resetGame = () => {
    window.location.reload();  
};

document.querySelector("#button").addEventListener("click", resetGame);

