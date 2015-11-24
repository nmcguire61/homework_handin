var moves = { 1: 'Rock', 2: 'Paper', 3: 'Sissors', 4: 'Spock', 5: 'Lizard' };


function getUserMove () {
var userMove = document.getElementById('whichMove').value;
console.log('userMove')
};

var submit = document.getElementById('submit');
submit.addEventListener('click', getUserMove, false);

// User takes a turn:
//   Get input from user 
//   save as userMove
//   Set/rotate the  userMove id to 1
// Computer takes a turn:
//   Random pick form the list above
//   save as computerMove
// Compare moves:
//   computerMove.id
//   who_won:
//     if computerMove.id 2 or 4 computer wins
//     if computerMove.id 3 or 5 user wins
//     if 1 draw
// Display userMove, computerMove and result with message
// Play again message/button to refresh page

// record victories?