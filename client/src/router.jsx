import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import QuizResultsPage from './pages/QuizResultsPage';
import QuizResults from './components/quiz/QuizResults';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/results" element={<QuizResultsPage />} />
        <Route path="/quiz/results" element={<QuizResults />} />
      </Routes>
    </BrowserRouter>
  );
}
