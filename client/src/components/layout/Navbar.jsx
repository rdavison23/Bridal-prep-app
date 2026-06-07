import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import './navbar.css';

function Navbar() {
  const { user, loading, logout } = useContext(UserContext);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink to="/home" className="navbar-logo" aria-label="Bridal Prep home">
        Bridal Prep
      </NavLink>

      <div className="navbar-links">
        {user ? (
          <>
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
              to="/checklist"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }>
              Checklist
            </NavLink>

            <NavLink
              to="/confidence"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }>
              Confidence
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
