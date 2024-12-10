// TODO: 10 Fragen Struktur
const questions = [
  {
    id: 1,
    question: "Wann wurde Swisscom geründet?",
    answers: [
      {
        id: "a",
        text: "1. Januar 1998",
        correct: true,
      },
      {
        id: "b",
        text: "1. August 2000",
        correct: false,
      },
      {
        id: "c",
        text: "20. Mai 1975",
        correct: false,
      },
      {
        id: "d",
        text: "15. Dezember 2012",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Wo ist der Hauptsitz von Swisscom?",
    answers: [
      {
        id: "a",
        text: "New York",
        correct: false,
      },
      {
        id: "b",
        text: "Zürich, Bellevueplatz",
        correct: false,
      },
      {
        id: "c",
        text: "Ittigen, Bern",
        correct: true,
      },
      {
        id: "d",
        text: "Bahnhofstrasse, Zürich",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Wie viele Filialen/Büros hat Swisscom in der gesamten Schweiz?",
    answers: [
      {
        id: "a",
        text: "150 Filialen",
        correct: false,
      },
      {
        id: "b",
        text: "120 Filialen",
        correct: false,
      },
      {
        id: "c",
        text: "30 Filialen",
        correct: false,
      },
      {
        id: "d",
        text: " 210 Filialen",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Wie viele Mitarbeiter hat Swisscom?",
    answers: [
      {
        id: "a",
        text: "18,339",
        correct: false,
      },
      {
        id: "b",
        text: "25,790",
        correct: false,
      },
      {
        id: "c",
        text: "19,729",
        correct: true,
      },
      {
        id: "d",
        text: "20,690",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Wie heisst der CEO von Swisscom?",
    answers: [
      {
        id: "a",
        text: "Kristoff Aescher",
        correct: false,
      },
      {
        id: "b",
        text: "Christoph Aeschlimann",
        correct: true,
      },
      {
        id: "c",
        text: "Urs Schäppi",
        correct: false,
      },
      {
        id: "d",
        text: "Christoph Schäppi",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Wie ist das Swisscom Ausbildungsmodell aufgebaut?",
    answers: [
      {
        id: "a",
        text: "Du wirst eingeteilt in verschiedene Abteilungen",
        correct: false,
      },
      {
        id: "b",
        text: "Man arbeitet eigenständig",
        correct: false,
      },
      {
        id: "c",
        text: "Du hast verschiedene Projekte, die du zugeteilt bekommst.",
        correct: false,
      },
      {
        id: "d",
        text: "Du kannst dich selber auf Projekte bewerben.",
        correct: true,
      },
    ],
  },
];

let currentQuestion;
let currentQuestionPoint = -1;
let score = 0;

// TODO: 11 Frage Rendern
function renderQuestion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("div");

  questionTitle.classList.add("question-title");
  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answer");
  const answersCopy = [];
  question.answers.forEach((answer) => {
    answersCopy.push(answer);
  });
  question.answers.forEach((answer) => {
    const answerDiv = document.createElement("button");
    answerDiv.id = answer.id;
    answerDiv.setAttribute("onclick", `validate("${answer.id}")`);
    answerDiv.classList.add("answer");
    answerDiv.appendChild(document.createTextNode(answer.text));
    questionAnswers.appendChild(answerDiv);
  });

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);
  document.getElementById("display-question").appendChild(questionDiv);
}

// TODO: 12 "Next" Logik
function nextQuestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPoint + 1 < questions.length) {
    currentQuestionPoint++;
    currentQuestion = questions[currentQuestionPoint];
    renderQuestion(currentQuestion);
  } else {
    showResult();
    currentQuestionPoint = 0;
    currentQuestion = questions[currentQuestionPoint];
  }
}
// TODO: 13 Fragen beantworten Logik
function validate(answerid) {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  if (correctAnswer.id === answerid) {
    alert("RICHTIG");
    score++;
    document.getElementById(answerid).classList.add("correct");
  } else {
    alert("FALSCH");
    document.getElementById(answerid).classList.add("incorrect");
    document.getElementById(correctAnswer.id).classList.add(correct);
  }
}
function showResult() {
  document.getElementById("display-question").innerHTML = `
        <div class="result">
          <h2>Dein Resultat:</h2>
          <p>Du hast ${score} von ${questions.length} Punkten erreicht!</p>
          <img src="./thumbs-up.jpg" alt="" class="about-image" />
        </div>
        
         
      `;
  document.querySelector(".Footer").style.display = "none";
  // Versteckt die Buttons
}
// TODO: 14 Lösung anzeigen
function showSolution() {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  document.getElementById(correctAnswer.id).classList.add("correct");
}
