import Checklist from '../components/checklist/Checklist';

export default function ChecklistPage() {
  const userId = 1;
  //const userId = localStorage.getItem("userId");
  return (
    <div className="page-container" style={{}}>
      <Checklist userId={userId} />
    </div>
  );
}
