import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/home" className="navbar-logo">
        Bridal Prep
      </NavLink>

      <div className="navbar-links">
        <NavLink
          to="/quiz"
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }>
          Quiz
        </NavLink>
        <NavLink
          to="/create-budget"
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }>
          Budget
        </NavLink>
        <NavLink
          to="/confidence"
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }>
          Confidence
        </NavLink>
        <NavLink
          to="/checklist"
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }>
          Checklist
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
