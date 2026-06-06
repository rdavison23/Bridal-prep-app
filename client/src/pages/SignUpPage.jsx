import AuthForm from "../components/auth/AuthForm";
import { signupUser } from "../api/authApi";
const SignUpPage = () => {
    const handleSignup = async (formData) => {
        console.log(formData);

        await signupUser(formData);
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