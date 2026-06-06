import AuthForm from "../components/auth/AuthForm";

const SignUpPage = () => {
    const handleSignup = async () => {
        console.log("trying to signup")
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