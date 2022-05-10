import { EnemyShip } from "./enemy.js";

describe("EnemyShip class", () => {
    test("Should return an enemy ship object", () => {
        const output = new EnemyShip("motherShip", 100, 9, 1, '<img src="./images/motherShip.png">');
        expect(output).toEqual({
            name: 'motherShip', 
            health: 100, 
            damagePoints: 9, 
            numberOfShips: 1,
            shipImage: '<img src="./images/motherShip.png">'
        });
    });
    test("Should return the key/value pairs", () => {
        const output = new EnemyShip("Other Ship", 333, 52, 11, '<img src="./images/motherShip.png">');
        expect(output).toEqual({
            name: 'Other Ship', 
            health: 333, 
            damagePoints: 52, 
            numberOfShips: 11,
            shipImage: '<img src="./images/motherShip.png">'
        });
    });
    test("Should return an array", () => {
        const ship = new EnemyShip("defenceShip", 80, 10, 5, '<img src="./images/defenceShip.png">');
        const output = ship.getShipsArr();
        expect(Array.isArray(output)).toBe(true);
    });
    test("Should return the correct number of ship objects", () => {
        const ship = new EnemyShip("attackShip", 45, 12, 8, '<img src="./images/attackShip.jpg">');
        const output = ship.getShipsArr();
        expect(output.length).toEqual(8);
    });
    test("Should reduce ship health by damage amount", () => {
        const ship = new EnemyShip("Test Ship", 75, 15, 5, '<img src="./images/motherShip.png">');
        const output = ship.reduceHealth();
        expect(output).toEqual(60);

    });
})