import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import QuizResultsPage from './pages/QuizResultsPage';
import CreateBudgetPage from './pages/CreateBudgetPage';
import BudgetPage from './pages/BudgetPage';
import ChecklistPage from './pages/ChecklistPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/results" element={<QuizResultsPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/create-budget" element={<CreateBudgetPage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
      </Routes>
    </BrowserRouter>
  );
}
