import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const { user, loading, logout } = useContext(UserContext);

  if (loading) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <footer className="footer">
      <p className="footer-text">
        Bridal Prep &copy; {new Date().getFullYear()}
      </p>

      {user && (
        <button type="button" onClick={handleLogout} className="footer-logout">
          Logout
        </button>
      )}
    </footer>
  );
};

export default Footer;
