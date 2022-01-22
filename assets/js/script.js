// define variables for classes in html file.  create variable for questions list
var buttonStart = document.querySelector(".buttonStart");

// create a timer

// display high score at upper left screen

// "click to begin" starts game.  need event listener
buttonStart.addEventListener("click", gameStart);

// switch screens by clearing intro page and replace with first question page.  timer needs to start at this point
function gameStart() {
  console.log("BUTTON WORKS");
}
// if then loops.  correct adds to score and pulls next question.  incorrect deducts from time and pulls next question

// if all questions correct then win, if timer runs out then game over

// current score is compared to high score.  if current score is > than high score then
//congratulate & announce high score, input initials, store score in local storage
// if current score is < high score, report score and ask if want to play again or quit
// if play again then reset game
// if quit then main menu
