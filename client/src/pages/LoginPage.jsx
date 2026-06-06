import AuthForm from "../components/auth/AuthForm";
import { loginUser } from "../api/authApi";
const LoginPage = () => {
    const handleLogin = async (formData) => {
        console.log(formData);

        await loginUser(formData);
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