import Checklist from '../components/checklist/Checklist';

export default function ChecklistPage() {
  const userId = 1; //will replace with real auth later
  return (
    <div className="page-container">
      <Checklist userId={userId} />
    </div>
  );
}
