import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
    const handleLogin = async () => {
        console.log("trying to signup")
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