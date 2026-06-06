import Footer from '../components/layout/Footer';
import StyleQuiz from '../components/quiz/StyleQuiz';

export default function QuizPage() {
  return (
    <>
      <div style={{
        minHeight: "90vh"
      }}>
        <StyleQuiz />
      </div>
      <Footer />
    </>
  );

}
