import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import QuizResultsPage from './pages/QuizResultsPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/results" element={<QuizResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
