/**
 * Create a new button used to start the game over
 */
function addStartOverButton() {
  const container = document.querySelector('.container');
  const button = document.createElement('button');
  button.innerText = 'Start Over';
  button.className = 'startOver';
  button.addEventListener('click', resetGame);
  container.appendChild(button);
}

/**
 * Event handler callback for returning the game to a new initial state
 * @param {Object} event - a DOM event object
 */
function resetGame(event) {
  // clear cells
  const cells = document.querySelectorAll('.cell');
  cells.forEach(function(cell) {
    cell.innerText = '';
  });

  // re-init
  state = initializeGame();

  // do this part asynchronously so the reference to the button persists long enough
  setTimeout(function() {
    const startOverButton = document.querySelector('.startOver');
    startOverButton.remove();
  }, 1);
}
