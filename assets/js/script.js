// quiz questions

var quizQuestions = [
  {
    question:
      "Who drew the cover art for Spider-Man's first appearance in Amazing Fantasy #15?",
    option: ["Steve Ditko", "Jack Kirby", "John Romita Sr", "John Romita Jr"],
    answer: "Jack Kirby",
  },
  {
    question: "Who is not an original member of the first X-Men team?",
    option: ["Wolverine", "Angel", "Beast", "Marvel Girl"],
    answer: "Wolverine",
  },
  {
    question: "What is the name of Thor's alter ego?",
    option: ["Jim Hammond", "Marc Spector", "Henry McCoy", "Donald Blake"],
    answer: "Donald Blake",
  },
  {
    question:
      "Stan Lee's first credited work in the comic book industry was in...",
    option: [
      "Fantastic Four #1",
      "Captain America Comics #3",
      "Marvel Comics #1",
      "Amazing Fantasy #15",
    ],
    answer: "Captain America Comics #3",
  },
  {
    question:
      "Who is regarded as the most intelligent character in the Marvel Universe?",
    option: ["Bruce Banner", "Reed Richards", "Tony Stark", "Amadeus Cho"],
    answer: "Reed Richards",
  },
  {
    question:
      "Which character is a founding member of the original Avengers team?",
    option: ["Wasp", "Captain America", "Black Widow", "Hawkeye"],
    answer: "Wasp",
  },
  {
    question: "Steve Ditko is co-creator of which comic book character?",
    option: ["Hulk", "Professor Xavier", "Spider-Man", "Black Panther"],
    answer: "Spider-Man",
  },
  {
    question: "Who are the two earliest created Marvel characters",
    option: [
      "Mr. Fantastic and the Invisible Woman",
      "Captain America and Bucky Barnes",
      "Spider-Man and the Hulk",
      "The Human Torch and the Sub Mariner",
    ],
    answer: "The Human Torch and the Sub Mariner",
  },
  {
    question: "The main Marvel continuity is referred to as...",
    option: ["The Ultimate Universe", "The MCU", "Earth-616", "Earth-X"],
    answer: "Earth-616",
  },
  {
    question:
      "What was first Marvel comic book published under the Marvel Comics name?",
    option: [
      "Marvel Comics #1",
      "Fantastic Four #1",
      "Amazing Spider-Man #1",
      "Captain America Comics #1",
    ],
    answer: "Fantastic Four #1",
  },
];

// define variables for classes in html file.  create variable for questions list
var questionStaged = quizQuestions[1];
var buttonStart = document.querySelector(".buttonStart");
var welcome = document.querySelector(".welcome");
var questionDisplay = document.querySelector(".textQuestion");
var textAnswer = document.querySelector(".textAnswer");

// display high score at upper left screen

buttonStart.addEventListener("click", gameStart); //event listener, button reacts to mouse click

function gameStart() {
  // function activated from button click
  welcome.textContent = ""; // clears the welcome screen
  countDown(); // starts the timer
  quiz(); // starts the quiz function
}

// create a timer (Get the questions before working on timer)
function countDown() {
  var reverse_counter = 30; //set the counter to 30
  var timerRules = setInterval(function () {
    document.getElementById("progBar").value = 30 - --reverse_counter; // subtracts 1 second from 30
    if (reverse_counter <= 0) clearInterval(timerRules); // prevents a negative count down

    document.getElementById("counting").innerHTML = reverse_counter; // prints the seconds remaining
  }, 1000); // set to 1 second
}

function quiz() {
  textAnswer.textContent = ""; // clears screen prior to loading each question
  questionDisplay.textContent = questionStaged.question; // the text content for questionDisplay (which prints to the HTML), pulls the question from the question list
  questionStaged.option.forEach(function (choice) {
    // loops the function for each item in the array
    // the relevant answer "option[s]" are pulled and assigned a button with attributes and listeners for each "choice"
    var choiceButton = document.createElement("Button"); // allows for the dynamic creation of the choice buttons in the HTML
    choiceButton.setAttribute("class", "buttonColors"); // sets the colors of the button choices
    choiceButton.textContent = choice; // the option text from the quiz questions is written in each button choice
    textAnswer.append(choiceButton); // sends the text of the answer choices to the HTML
    choiceButton.setAttribute("points", choiceButton.textContent); // places the questions point with the answers
    choiceButton.addEventListener("click", questionRules); // adds the event listener to listen which button choice is clicked
  });
}

// if then loops.  correct adds to score and pulls next question.  incorrect deducts from time and
//pulls next question

function questionRules() {
  console.log("YOU MADE IT TO THE QUESTION RULES SECTION");
}

// if all questions correct then win, if timer runs out then game over

// current score is compared to high score.  if current score is > than high score then
//congratulate & announce high score, input initials, store score in local storage
// if current score is < high score, report score and ask if want to play again or quit
// if play again then reset game
// if quit then main menu
