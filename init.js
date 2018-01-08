/**
 * Covert the divs to a 2-dimensional array
 * @param {Node} container - a dom node container holding the board of divs
 */
function convertToBoard(container) {
  const columns = container.children;
  for (let colIdx = 0; colIdx < 3; colIdx++) {
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      // set IDs on each cell in the format x|y
      columns[colIdx].children[rowIdx].id = `${rowIdx}|${colIdx}`;
    }
  }
}

/**
 * Set up the initial game state from a fresh object
 */
function initializeGame() {
  const defaultBoard = [[null, null, null],
                        [null, null, null],
                        [null, null, null]];
  const defaultState = {
    currentPlayer: 'X',
    turn: 1,
    board: defaultBoard
  };
  
  return defaultState;
}
