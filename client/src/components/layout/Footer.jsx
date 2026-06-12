import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from '../../context/UserContext';

const Footer = () => {
    // const navigate = useNavigate();
    const { logout } = useContext(UserContext);

    const handleLogout = () => {
        logout();
        // navigate("/");
    }
    return (
        <div>
            <footer>
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </footer>
        </div>
    )
}

export default Footer;