Chase McFaddin, Felicia Walcott, Kyle Atkinson, Scott Falbo

Name of Project: Blackjack

1. Build a one-on-one blackjack game of the user versus the computer

2. It solves the problem of being locked indoors and not being able to go to the casino. You can practice blackjack at some to kill some time or sharpen your skills. 

3. What is your MVP?
The MVP for this product would be a site that deploys 2 sets of random cards to each user and computer. The user can then decide to use an event handler to “hit” for another card in an attempt to get closer to 21. The site will register whether the user went over 21 or is closer than the computer to determine a winner.
Bare minimum CSS will include ids & possibly class elements. Floats, borders, google font, and background color.
Bare minimum JS will incorporate an array of 52 cards, functions, and loops to deal with the cards. Event handler for the "hit" button. And forms to get user's information to make an account. Local storage will consist of a virtual currency system and hold that data for the user.

Stretch Goals:
CSS involves a poker (green felt) style table and lots of animations for cards being dealt with, shuffled, etc. 
Animations for chips and sound effects for each animation.
Optional background music selections from elevator music to classic 007 movie soundtracks
JS will involve several arrays, functions, and DOM to incorporate a competitive game between user and computer
Local storage will render a global leader board for the highest virtual currency holders of the game 

Here are some links to found

https://brilliant.org/wiki/programming-blackjack/ 
https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript 
https://github.com/topics/blackjack?l=javascript
https://www.blackjack.org/blackjack-rules/ (rules of the game) 
https://code-boxx.com/javascript-blackjack/ 






The files for this project. 

Index. Html 
about-us.html 
scores.html

CSS folder 
reset.css 
style.css 

JavaScript folder
app.js (I think we only need one JS file for this project from what examples I have seen) 

I also think we should have a how to play. It doesn't need to be a page just something you can hover over and will pop up giving you the rules.  

BLACKJACK CARD RULES 
The rules are simple. Beat the dealer’s hand without going over twenty-one.
Cards 2-10 are worth the value of the number on the face of the card. 
Face cards (those with pictures on them) are worth 10, except for the Ace, which is worth 1 or 11. 

A picture combined with an Ace is Blackjack (a value of 21).  

Win your bet get double your money 
Lose you lose your bet 
Draw get you money back  

This is my logic looking through a few games 

Html should be minimal most of this will be done in app.js and appended to the DOM 

App. JS 

Build Game objects and  variables
Scoreboard dealer vs player 
Make a button for hit, stand, bet and at the end with an event handler play again button 
Game table 
Dealer 
Dealers cards  
Dealers score
Player
Players card 
players score  
All appended to the DOM 

Construct a deck of cards = cards object 
Need a for loop and an array to create all the suits.
Suits, rank, values, check to see if it is NAN (J, K,Q,A) and give those values. 

(The examples I saw use  ternary operator.)

Push it to the game deck. 

Must be able to build new decks. 

Create a function to shuffle cards. (Randomize the Card deck) use  Math.Random 

Add event listeners to the buttons. 

Create a deal function. Should have the following:
Deal the dealers hand 
Deal the players hand 
Start the game
Stop the betting when the game starts  

Create a function to get a card when the user presses the hit button  if under 21 and being able to turn off the buttons when the player busts. 

Players can stand whenever they want when under 21.

Create a function for the dealer to stop hitting when it reaches 17 and hit if it has 16 or less.   


Making sure the dealer and player get two cards and that one of the dealer’s cards are hidden and that the value of that card isn't known. 
Make a div 
Make a class 
Make conditions 
Make suits (hearts, diamonds, clubs, spades) 
Append to the DOM with append Child    

Use CSS to style cards and hide one of the dealer’s cards by overlaying a box over one of the cards. This will then come off when the player and dealer show their hands 
Card A covered. Card B not covered  
Create a function to show the hidden dealer card when the game ends.

Need a score function to track scores. 
Value of players score
Value of dealers score 

Scorer function to update the score total.  

Find the winner function 
Players score and dealers score and can read win, lose, busted, tie. This can be an else if. 


Ace can be a 1 or 11. What if they are two aces or if the 11 makes the player bust, I think this is the best way to deal with that problem:

function aceScore(val, aces) {
if (val < 21) {
return val;
}
else if (aces > 0) {
aces--;
val = val - 10;
return aceScore(val, aces);
}
else {
return val;
}
}

Have a bet function place bets. 
Game cash 
Bet 

Have a function to update cash in case the player wins, loses, or ties. 
If they lose subtract the bet 
If they win bet times two 
If there is a tie, the player gets their bet back.
Make sure there is an  event listener  
Make sure once the game begins no more deals, the player only puts in numbers and don't bet more cash then what they have.  

When the game is over turn off the ability to push buttons

Make sure buttons can be pushed once the game reloads.  

For the game cash, the player automatically has 1000 dollars when they start and will be put into local storage. Whenever they play this will be updated until they either run out of money or five rounds are played. Then the top scores are placed in the scores.html with the number of rounds they won and the amount of money they made and is ranked.
