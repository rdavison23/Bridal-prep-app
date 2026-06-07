import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");

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