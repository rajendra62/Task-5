const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    answer: "Blue Whale"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hypertext Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  
  questionElement.textContent = quizData[currentQuestion].question;
  optionsElement.innerHTML = '';
  
  quizData[currentQuestion].options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => selectOption(option);
    button.style.margin = '0 5px 0 0'; // Right margin only
    button.style.padding = '5px 10px'; // Compact padding
    optionsElement.appendChild(button);
  });
  
  // Add this to style the options container
  optionsElement.style.display = 'flex';
  optionsElement.style.flexWrap = 'wrap';
  optionsElement.style.gap = '5px';
}

function selectOption(selected) {
  const optionsElement = document.getElementById('options');
  const buttons = optionsElement.getElementsByTagName('button');
  
  // Disable all buttons to prevent multiple selections
  Array.from(buttons).forEach(button => {
    button.disabled = true;
    // Highlight correct answer in green
    if (button.textContent === quizData[currentQuestion].answer) {
      button.style.backgroundColor = '#4CAF50'; // Green
    }
    // Highlight selected incorrect answer in red
    if (button.textContent === selected && selected !== quizData[currentQuestion].answer) {
      button.style.backgroundColor = '#f44336'; // Red
    }
  });

  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  
  // Move to next question after a short delay
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1000); // 1 second delay
}

function showResults() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <div id="results">
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score} out of ${quizData.length}</p>
      <button onclick="resetQuiz()">Try Again</button>
    </div>
  `;
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <h1>Quiz</h1>
    <div id="question"></div>
    <div id="options"></div>
  `;
  
  loadQuestion();
}

// Add this to start the quiz when the page loads
window.onload = loadQuestion;