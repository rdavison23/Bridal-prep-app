import { useNavigate } from 'react-router-dom';
import AuthForm from "../components/auth/AuthForm";
import { loginUser } from "../api/authApi";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        try {
            console.log(formData);
            await loginUser(formData);
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