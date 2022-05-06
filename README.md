# hostile-aliens-v1
An alien invasion game, not dissimilar to space invaders, created with JavaScript, HTML and CSS. You must diminish the alien invaders' differing health points to save the Earth!

# What I used:
•	JavaScript
•	HTML
•	CSS
•	SCSS
•	BEM
•	GitHub

# The Brief
The idea behind Hostile Aliens was to create a working game (loosely based on Sapce Invaders) that would showcase what I have learnt about JavaScript to date, as well as Unit Testing, OOP concepts, and Pure Functions. The rules of the game are as follows:
• The game should have the following Alien ships:
  1 x Mother ship (It has 100 health points and loses 9 health points every time it is hit
  5 x Defence ships (Each one starts with 80 health points and loses 10 health points each time it is hit
  8 x Attack ships (Each starts with 45 health points and loses 12 health points each time it is hit. 
• There needs to be some text visualisation of the ships and their health points.
• A "shoot" button will randomly damage the alien ships. When the aliens ships' health points reach zero they will be destroyed. 
▪ The game is over when the Mother ship's health points reach zero and is destroyed.

# The Process
When it came to creating the game Hostile Aliens, I took a step-by-step process as outlined below:
1.	Set up the gameboard
2.	Create a Class of EnemyShip to form multiple alien ships and then display them on screen
3.	Create a function that selects an enemy at random and then reduces the health of that opponent 
4.	Create the game over parameters (i.e. when the motherSHip's health points reach zero)
5.	Make sure the game has the ability to reset

# The Functionality
•	The game itself runs on a CSS grid of 21 x 21, with the aliens sized and positoned accordingly using CSS.

•	Each enemy alien begins the game with its alloted amount of health points, how much damage its takes from each hit, and how many of that type of ship exist. This is done through a class called EnemyShip, with a constructor accommodating all those key/values.

•	Two buttons have been created: a "shoot" button, which when pressed actions a random target hit, and a "reset" button, which resets the game when the motherShip has been destroyed.

•	The game is over when the motherShip is destroyed (ie. when its health points reach zero) regardless of whether the rest of the fleet has been destroyed.

# Hostile Aliens
<img width="952" alt="Hostile-Aliens SCreengrab" src="https://user-images.githubusercontent.com/93707792/167137234-4adbc1ce-74e4-4b49-8fc5-e675622a7a93.png">
