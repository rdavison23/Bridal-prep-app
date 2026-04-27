import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';
import { sumbitQuiz } from '../../api/quizApi';

export default function styleQuiz() {
  const navigate = useNavigate();

  const question = [
    {
      id: 1,
      text: 'Which dress silhouette feels most like you?',
      options: ['A-line', 'Ballgown', 'Mermaid', 'Sheath'],
    },
    {
      id: 2,
      text: 'What style are you drawn to?',
      options: ['Romantic', 'Modern', 'Classic', 'Boho'],
    },
    {
      id: 3,
      text: 'How much detail do you like?',
      options: ['Minimal', 'Some sparkle', 'Lace', 'All-out glam'],
    },
  ];
}

const [current, setCurrent] = useState(0);
const [answers, setAnswers] = useState([]);

function handleAnswer(options) {
  const updated = [...answers];
  updated[current] = options;
  setAnswers(updated);
}

if (current < questions.length - 1) {
  setCurrent(current + 1);
} else {
  handleSubmit(updated);
}

async function handleSubmit(finalAnswers) {
  const result = await sumbitQuiz(finalAnswers, 1);

  navigate('/quiz/results', { state: result });
}

return (
  <div className="quiz-container">
    <QuizQuestion question={questions[current]} onSelect={handleAnswer} />
  </div>
);
