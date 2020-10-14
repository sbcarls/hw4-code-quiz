/**
 * Create an array of objects that represent questions.
 * Create a function to display the question on the screen.
 * Add a function to handle selecting an answer that will check answer and call next question.
 */

 // Questions array with question objects.
var questions = [
  {
    question: "Question one?",
    answerChoices: [
      'Answer one',
      'Answer two',
      'Answer three',
      'Answer four',
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Question two?",
    answerChoices: [
      'Answer A',
      'Answer B',
      'Answer C',
      'Answer D',
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Question three?",
    answerChoices: [
      'Answer 1a',
      'Answer 1b',
      'Answer 1c',
      'Answer 1d',
    ],
    correctAnswerIndex: 0,
  },
];

// Hold the index of the current question.
var currentQuestionIndex;

$(document).ready(function() {
  var startBtn = $("#startBtn");

  // Called when user clicks on an answer.
  function handleAnswerSelected() {
    console.log('clicked answer');

    var buttonClicked = $(this);
    var clickedIndex = buttonClicked.attr('data-index');

    console.log(clickedIndex);

    // Check the clickedIndex to see if it equals correctAnswerIndex of the current question.
    if (clickedIndex == questions[currentQuestionIndex].correctAnswerIndex) {
      alert('Correct!');
    } else {
      alert('Incorrect');
    }

    // Increment the currentQuestionIndex.
    currentQuestionIndex = currentQuestionIndex + 1;

    // TODO: Check to make sure the currentQuestionIndex is not greater than the questions array length.
    // If greater than length, end quiz.
    // Else, displayQuestion();

    // Call the displayQuestion function to show next question.
    displayQuestion();
  }

  // Used to put a question on the screen.
  function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    console.log(currentQuestion);

    $('#question').text(currentQuestion.question);

    $('#answerChoices').empty();

    // Loops through choices to create buttons and attach listener.
    currentQuestion.answerChoices.forEach(function(choice, i) {
      var choiceButton = $('<button>').addClass('choice');
      choiceButton.attr('data-index', i);
      choiceButton.text(choice);
      choiceButton.on('click', handleAnswerSelected);
      $('#answerChoices').append(choiceButton);
    });
  }

  // Kicks off the quiz.
  function startQuiz() {
    console.log('Clicked start');

    currentQuestionIndex = 0;

    displayQuestion();
  }
  
  // Attach listener to start button.
  startBtn.on('click', startQuiz);
});
