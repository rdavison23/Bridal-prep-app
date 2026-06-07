import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthForm from "../components/auth/AuthForm";
import { signupUser } from "../api/authApi";
import { UserContext } from '../context/UserContext';


const SignUpPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const handleSignup = async (formData) => {
        try {
            const result = await signupUser(formData);
            login(result.token, result.user);
            navigate("/quiz");
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <div>
            <AuthForm
                mode="signup"
                onSubmit={handleSignup}
            />
        </div>
    )
}

export default SignUpPage;