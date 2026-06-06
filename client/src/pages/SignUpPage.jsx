import AuthForm from "../components/auth/AuthForm";
import { signupUser } from "../api/authApi";
const SignUpPage = () => {
    const handleSignup = async (formData) => {
        try {
            const result = await signupUser(formData);
            localStorage.setItem("token", result.token);
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