import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';
import { sumbitQuiz } from '../../api/quizApi';
import './quiz.css';

export default function StyleQuiz() {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      text: 'Which dress silhouette feels most like you?',
      options: [
        { label: 'A-line', style: 'romantic' },
        { label: 'Ballgown', style: 'classic' },
        { label: 'Mermaid', style: 'modern' },
        { label: 'Sheath', style: 'boho' },
      ],
    },
    {
      id: 2,
      text: 'What style are you drawn to?',
      options: [
        { label: 'Romantic', style: 'romantic' },
        { label: 'Modern', style: 'modern' },
        { label: 'Classic', style: 'classic' },
        { label: 'Boho', style: 'boho' },
      ],
    },
    {
      id: 3,
      text: 'How much detail do you like?',
      options: [
        { label: 'Minimal', style: 'modern' },
        { label: 'Some sparkle', style: 'romantic' },
        { label: 'Lace', style: 'classic' },
        { label: 'All-out glam', style: 'romantic' },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleAnswer(option) {
    const updated = [...answers];
    updated[current] = option;
    setAnswers(updated);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      handleSubmit(updated);
    }
  }

  async function handleSubmit(finalAnswers) {
    try {
      const result = await sumbitQuiz({
        userId: null,
        answers: finalAnswers,
        quizVersion: 1,
      });

      navigate('/quiz/results', {
        state: {
          styleProfile: result.styleProfile,
          images: result.images,
          quizVersion: result.quizVersion,
        },
      });
    } catch (err) {
      console.error('Quiz submit failed:', err);
    }
  }

  return (
    <div className="quiz-container">
      <h1>Style Quiz</h1>
      <QuizQuestion
        question={questions[current]}
        onSelect={handleAnswer}
        current={current}
        total={questions.length}
      />{' '}
    </div>
  );
}
