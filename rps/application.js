var moves = { 1: "Rock", 2: "Paper", 3 "Sissors", 4: "Spock", 5: "Lizard" };


function getUserMove () {
var userMove = document.getElementById('whichMove').value;
console.log('userMove')
};

var submit = document.getElementById('submit');
submit.addEventListener('click', getUserMove, false);

// User takes a turn:
//   Get input from user 
//   save as userMove
//   Set/rotate the  userMove id to 3
// Computer takes a turn:
//   Random pick form the list above
//   save as computerMove
// Compare moves:
//   userMove - computerMove
//   who_won:
//     if 2 or -1 computer wins
//     if 1 or -2 user wins
//     if 0 draw
// Display userMove, computerMove and result with message
// Play again message to refresh page

// record victories?