import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthForm from "../components/auth/AuthForm";
import { loginUser } from "../api/authApi";
import { UserContext } from '../context/UserContext.jsx';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const handleLogin = async (formData) => {
        try {
            const result = await loginUser(formData);
            login(result.token, result.user);

            navigate("/quiz")
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <AuthForm
                mode="login"
                onSubmit={handleLogin}
            />
        </div>
    )
}

export default LoginPage;