//Grab Tile Elements from HTML and create your variables
var gameTiles = document.getElementsByClassName("tile");
var message = document.getElementById("message");
var resetButton = document.getElementById("reset");
var playerXCombo = "";
var playerOCombo = "";
var playerXTurn = true;
var gameOver = false;

//Reset Button
resetButton.addEventListener("click", function() {
  playerXCombo = "";
  playerOCombo = "";
  message.innerHTML = "";
  for (var i = 0; i < gameTiles.length; i++) {
    gameTiles[i].innerHTML = "";
    gameTiles[i].style.pointerEvents = "auto";
  }
  gameOver = false;
});

//Loop Through Each Tile Element and Give Each Tile Element a Click Listener and give it "makeAMove" function
for (var i = 0; i < gameTiles.length; i++) {
  gameTiles[i].addEventListener("click", makeAMove);
}

//Take user interaction(e) and check if its empty.  If not display div saying, error message.
//If not empty,  then
function makeAMove(e) {
  var currentTile = e.target;

  if (currentTile.textContent == "") {
    if (playerXTurn) {
      // change textContent to X
      currentTile.textContent = "X";
      // add it to player X Combo
      playerXCombo += currentTile.id;

      //Check Win Condition
      checkWin(playerXCombo, currentTile.textContent);
      // turn player X turn to false
      playerXTurn = false;
    } else {
      currentTile.textContent = "O";
      playerOCombo += currentTile.id;
      checkWin(playerOCombo, currentTile.textContent);
      playerXTurn = true;
    }
  } else {
    console.log("Sorry This is already Full");
  }
}

function checkWin(playerCombo, currentTile) {
  console.log(currentTile);
  if (
    playerCombo == "123" ||
    playerCombo == "456" ||
    playerCombo == "789" ||
    playerCombo == "147" ||
    playerCombo == "258" ||
    playerCombo == "369" ||
    playerCombo == "159" ||
    playerCombo == "357"
  ) {
    gameOver = true;
    gameIsOver(currentTile);
  }
}

function gameIsOver(currentTile) {
  if (gameOver) {
    for (var i = 0; i < gameTiles.length; i++) {
      gameTiles[i].style.pointerEvents = "none";
    }
    message.innerHTML = "<p>The Winner is Player " + currentTile + "!" + "</p>";
  }
}
