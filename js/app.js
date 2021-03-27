/**
 * Step One Init Game
 * ---> player one and player two will both have blank playing fields
 * ---> var score = 0;
 * ---> var bullet = 0;
 * ---> playerOne and playerTwo screens = blank
 * ---> <button>Shoot<button> disabled for playerOne, as they have no bullets
 *      if(playerOne Bullets > 0){
 *      button on} else {button off}
 * 
 * Step Two
 * ---> playerOne (human) will choose between the options to "shoot", "load", or "block"
 * 
 * 
 * 
 * (PLAYER ONE HUMAN)
 * if (playerOne === "load") && (playerTwo === "load" || "block") {
 *      playerOne loads 1 bullet
 *      bullet + 1
 * } else {
 *      playerOne loses (as they were loading and playerTwo shot)
 *      displayMsg("You've been shot")
 * }
 * 
 * if (playerOne === "shoot") && (playerTwo === "shoot" || "block") {
 *      playerOne loses 1 bullet 
 *      bullet - 1
 * } else {
 *      playerOne wins (as they shot while playerTwo was loading)
 *      displayMsg("You shot your opponent!")
 *      score + 1
 *      if (score === 5){
 *          displayMsg("You won!!!") 
 *          and end game
 *      } 
 * }
 * 
 
 * 
 * PLAYER TWO (COMPUTER)
 *  if (playerTwo === "load") && (playerOne === "load" || "block") {
 *      playerTwo loads 1 bullet
 *      bullet + 1
 * } else {
 *      playerTwo loses (as they were loading and playerOne shot)
 * }
 * 
 * if (playerTwo === "shoot") && (playerOne === "shoot" || "block") {
 *      playerTwo loses 1 bullet 
 *      bullet - 1
 * } else {
 *      playerTwo wins (as they shot while playerOne was loading)
 *      score + 1
 *      if (score === 5){
 *          displayMsg("Player Two has won the game!!!")
 *  }
 * }
 * 
 
^^^ instead of doing that, make game object two keys - human and pc objects with two keys - score and bullet

make a function that calls on the object human or pc and sayd "if object" makes this choice, this happens - vs all this pseudo code
 * 
 * 
 * 
 * 
 * When either player loads without getting shot, their bullet count will increase by one
 * var bullet = 0 + 1 - button only available for playerOne when they have at least one bullet (otherwise will be disabled)
 * 
 * When either player shoots while other is loading, the shooter wins the round
 * var score = 0 + 1
 * 
 * Which ever player reaches 5 points first wins the game
 * score = 5
 * 
 * 
 */