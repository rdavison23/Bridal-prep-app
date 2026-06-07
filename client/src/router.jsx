import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import QuizPage from './pages/QuizPage';
import QuizResultsPage from './pages/QuizResultsPage';
import CreateBudgetPage from './pages/CreateBudgetPage';
import BudgetPage from './pages/BudgetPage';
import ChecklistPage from './pages/ChecklistPage';
import ConfidenceSection from './components/confidence/ConfidenceSection';
import ConfidencePage from './components/confidence/ConfidencePage';
import HomeDashboard from './pages/HomeDashboard';
import ProtectedRoute from './components/protected/ProtectedRoute';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />} >
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/home" element={<HomeDashboard />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/results" element={<QuizResultsPage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/create-budget" element={<CreateBudgetPage />} />
          <Route path="/checklist" element={<ChecklistPage />} />
          <Route path="/confidence" element={<ConfidenceSection />} />
          <Route path="/confidence/:guideId" element={<ConfidencePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
