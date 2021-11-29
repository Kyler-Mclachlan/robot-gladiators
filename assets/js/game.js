// Game states
// Win - player has defeated all enemy-robots
    // fight all enemy-robots
    // defeat each enemy-robot
// Lose - player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;

if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robot Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;


var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
      
        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
        } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
      
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
      
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm = window.confirm("Are you sure you'd like to quit;");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
        window.alert(playerName + " has chosen to skip the fight!");
      } else {
        window.alert("You need to choose a valid option. Try again!");
      }
};

//calling the function//

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}