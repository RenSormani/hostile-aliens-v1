export class EnemyShip {
    constructor(name, health, damagePoints, numberOfShips, shipImage) {
        this.name = name;
        this.health = health;
        this.damagePoints = damagePoints;
        this.numberOfShips = numberOfShips;
        this.shipImage = shipImage;
    }

    getShipsArr() {
        let shipsArr = [];
        for (let i = 0; i < this.numberOfShips; i++) {
            shipsArr[i] = new EnemyShip(this.name, this.health, this.damagePoints, this.numberOfShips, this.shipImage);
        }
        return shipsArr;
    }

    reduceHealth() {
        return this.health -= this.damagePoints;
    }
}