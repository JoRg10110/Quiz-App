let questions = [
          {
            "question": "Was ist die Hauptstadt von Deutschland?",
            "answer_1": "Berlin", 
            "answer_2": "München", 
            "answer_3": "Hamburg", 
            "answer_4": "Köln",
            "right_answer": 1
          },
          {
            "question": "Wie viele Kontinente gibt es auf der Erde?",
            "answer_1": "5", 
            "answer_2": "7", 
            "answer_3": "6", 
            "answer_4": "8",
            "right_answer": 2
          },
          {
            "question": "Welches chemische Element hat das Symbol 'O'?",
            "answer_1": "Silber", 
            "answer_2": "Osmium", 
            "answer_3": "Sauerstoff", 
            "answer_4": "Gold",
            "right_answer": 1
          },
          {
            "question": "Wer schrieb 'Die Verwandlung'?",
            "answer_1": "Goethe", 
            "answer_2": "Schiller", 
            "answer_3": "Kafka", 
            "answer_4": "Mann",
            "right_answer": 3
          },
          {
            "question": "Was ist die Quadratwurzel von 64?",
            "answer_1": "6", 
            "answer_2": "7", 
            "answer_3": "8", 
            "answer_4": "9",
            "right_answer": 3
          },
          {
            "question": "Welcher Planet ist der größte in unserem Sonnensystem?",
            "answer_1": "Erde", 
            "answer_2": "Mars", 
            "answer_3": "Jupiter", 
            "answer_4": "Saturn",
            "right_answer": "3"
          },
          {
            "question": "In welchem Jahr fiel die Berliner Mauer?",
            "answer_1": "1989", 
            "answer_2": "1988", 
            "answer_3": "1987", 
            "answer_4": "1990",
            "right_answer": 1
          }
      
]

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_FAIL = new Audio("audio/wrong-47985.mp3");
let AUDIO_SUCCESS = new Audio ("audio/wrong-answer-129254.mp3");


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){

  if (gameIsOver()) {
    showEndScreenn();

  } else { // Show Question
    updateProgressBar();
    updateToNextQuestion();
  }
}
function showEndScreenn() {
      document.getElementById('end-screen').style = '';
      document.getElementById('question-body').style = 'display: none';
      document.getElementById('amounOfQuestions').innerHTML = questions.length;
      document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
      document.getElementById('header-image').src = './img/award-148546_640.png';
      
}

function updateToNextQuestion(){
  let question = questions[currentQuestion];
  
  document.getElementById('question-number').innerHTML = currentQuestion + 1;
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar(){
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);

  document.getElementById('progress-bar').innerHTML = `${percent} %`;
  document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
      document.getElementById(selection).parentNode.classList.add('bg-success');
      rightQuestions++;
      AUDIO_SUCCESS.play();

    } else {
      document.getElementById(selection).parentNode.classList.add('bg-danger');
      document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
      AUDIO_FAIL.play();
    }
      document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
  currentQuestion++;

  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
  showQuestion();

}

function resetAnswerButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartGame() {
  document.getElementById('header-image').src = './img/school-supplies-7069763_640.jpg';
  document.getElementById('question-body').style = '';
  document.getElementById('end-screen').style = 'display: none';

  rightQuestions = 0;
  currentQuestion = 0;
  init();
}