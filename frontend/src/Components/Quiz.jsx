import React, { useState } from 'react';
import './../Css/Quiz.css';

const questions = [
 
  {
    id: 1,
    category: "HTML",
    question: "What is the purpose of HTML",
    options: [
      "To build dynamic webpages",
      "To build static webpages",
      "To style pages",
      "To modify content ",
    ],
    answer: "To build static webpages",
  },

  {
    id: 2,
    category: "HTML",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 3,
    category: "HTML",
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    answer: "<style>",
  },
  
  {
    id: 4,
    category: "CSS",
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color",
  },
  {
    id: 5,
    category: "CSS",
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
  },

  {
    id: 6,
    category: "JavaScript",
    question: "Which method is used to write content in the browser?",
    options: ["console.log()", "alert()", "document.write()", "window.print()"],
    answer: "document.write()",
  },
  {
    id: 7,
    category: "JavaScript",
    question: "What is the correct syntax to change the content of an HTML element with id='demo'?",
    options: [
      "document.getElementById('demo').innerHTML = 'Hello World!';",
      "document.getElementByTagName('demo').innerHTML = 'Hello World!';",
      "#demo.innerHTML = 'Hello World!';",
      "document.querySelector('demo').innerText = 'Hello World!';",
    ],
    answer: "document.getElementById('demo').innerHTML = 'Hello World!';",
  },
  
  {
    id: 8,
    category: "React",
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    answer: "useState",
  },
  {
    id: 9,
    category: "React",
    question: "What is the correct syntax to import a component in React?",
    options: [
      "import {Component} from './Component'",
      "require('./Component')",
      "import Component from './Component'",
      "include './Component'",
    ],
    answer: "import Component from './Component'",
  },
   {
    id: 10,
    category: "React",
    question: "What is React?",
    options: [
      "A node.js library",
      "Framework",
      "A middleware",
      "None of the above",
    ],
    answer: "A node.js library",
  },
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    setSelectedOptions({ ...selectedOptions, [currentIndex]: option });
  };

  const goToQuestion = (index) => setCurrentIndex(index);
  const goPrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  const goNext = () => currentIndex < questions.length - 1 && setCurrentIndex(currentIndex + 1);
  const handleSubmit = () => setSubmitted(true);

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedOptions[idx] === q.answer) score++;
    });
    return score;
  };

  return (
    <div className="quiz-container">
      <div className="sidebar">
        <h2>Questions</h2>
        <ul>
          {questions.map((q, idx) => (
            <li
              key={q.id}
              onClick={() => goToQuestion(idx)}
              className={`${idx === currentIndex ? 'active' : ''}`}
            >
              {idx + 1}. {q.category}
            </li>
          ))}
        </ul>
      </div>

      <div className="quiz-main">
        <h3>{currentQuestion.category} Quiz</h3>
        <p className="question-text">{currentQuestion.question}</p>

        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`option ${
                selectedOptions[currentIndex] === option ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>

        <div className="navigation">
          <button onClick={goPrev} disabled={currentIndex === 0} className="button24">Previous</button>
          <button onClick={goNext} disabled={currentIndex === questions.length - 1} className="button24">Next</button>
          {currentIndex === questions.length - 1 && (
            <button className="button24 submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>

        {submitted && (
          <div className="result">
            <h4>🎉 Your Score: {calculateScore()} / {questions.length}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
