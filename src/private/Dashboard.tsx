import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      bienvenue sur le dashboard
      <Link to="/note-de-frais" className="btn btn-soft btn-primary  ">
        notes de frais
      </Link>
    </div>
  );
}

export default Dashboard;
