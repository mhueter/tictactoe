var state;

document.addEventListener("DOMContentLoaded", function() {
  state = initializeGame();
  const container = document.querySelector('.container');
  convertToBoard(container);
  container.addEventListener('click', handleClick);
});


