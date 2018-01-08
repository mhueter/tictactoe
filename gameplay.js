/**
 * Click handler for allowing players to take turns
 * @param {Object} event - a DOM click event
 */
function handleClick(event) {
  const clickedNode = event.target;
  if (clickedNode.parentNode.className === 'column') {
    playTurn(clickedNode);
  }
}

/**
 * Check if an event target is an eligible game node,
 *   if so, execute a player's turn
 * @param {Object} cell - a tic-tac-toe cell (div)
 */
function playTurn(cell) {
  if (!cell.innerText) {
    cell.innerText = state.currentPlayer;
    const coordinates = cell.id.split('|');
    const row = coordinates[0];
    const col = coordinates[1];
    state.board[row][col] = state.currentPlayer;
  }
  processResult();
}

/**
 * A function that checks the board after each turn
 *  to see if there are any winners or if it's a draw
 *  and then call other helper functions to manage the gameOver
 */
function processResult() {
  if (didWin(state.board)) {
    endGame(state.currentPlayer);
  } else if (state.turn === 9) {
    endGame();
  } else {
    setTurn(state.currentPlayer);
  }
}

/**
 * A function to mark the game as over, and render the startOver button
 * @param {String} winner - who won the game, defaults to Nobody 
 */
function endGame(winner = 'Nobody') {
  alert(`${winner} wins!`);
  addStartOverButton();
}

/**
 * Determine whose turn it is based on the last turn
 * @param {String} lastTurn - 'X' or 'O', the last player to take a turn
 */
function setTurn(lastTurn) {
  if (lastTurn === 'X') {
    state.currentPlayer = 'O';
  } else {
    state.currentPlayer =  'X';
  }
  state.turn++;  
}
