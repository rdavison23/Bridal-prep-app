import Checklist from '../components/checklist/Checklist';
import Footer from '../components/layout/Footer';

export default function ChecklistPage() {
  // const userId = 1; //will replace with real auth later
  const userId = localStorage.getItem("userId");
  return (
    <div>
      <div className="page-container"
        style={{
          minHeight: "95vh"
        }}
      >
        <Checklist userId={userId} />
      </div>
      <Footer />
    </div>
  );
}
