import { useState } from "react";
import { Link } from "react-router-dom";
import {
    validateEmail,
    validatePassword,
    validateUsername,
    validateConfirmPassword
} from "../../utils/checkValidation";
import "./AuthForm.css"

const AuthForm = ({ mode, onSubmit }) => {
    const initialData = mode === "signup" ?
        {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        } :
        {
            email: "",
            password: "",
        }

    const [formData, setFormData] = useState(initialData);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (mode === "signup") {
            // check user name
            const usernameError = validateUsername(formData.name);
            if (usernameError) {
                setError(usernameError);
                return;
            }
            const emailError = validateEmail(formData.email);
            if (emailError) {
                setError(emailError);
                return;
            }

            const passwordError = validatePassword(formData.password);
            if (passwordError) {
                setError(passwordError);
                return;
            }

            const conformPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
            if (conformPasswordError) {
                setError(conformPasswordError);
                return;
            }

        } else {
            const emailError = validateEmail(formData.email);
            if (emailError) {
                setError(emailError);
                return;
            }
            const passwordError = validatePassword(formData.password);
            if (passwordError) {
                setError(passwordError);
                return;
            }

        }
        await onSubmit(formData);
    }

    return (
        <div className="auth-form">
            <h1> Welcome to Bridal Prep</h1>
            <form
                onSubmit={handleSubmit}>
                {mode === "signup" &&
                    <div className="form-div">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                }

                <div className="form-div">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-div">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Set your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {mode === "signup" && <div className="form-div">
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="please re-enter password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>}

                {mode === "signup" &&
                    <div>
                        <p className="auth_option" >Already has an account?
                            <span>
                                <Link to="/login">
                                    Login in here
                                </Link>
                            </span>
                        </p>
                        <button>Sign up</button>
                    </div>
                }

                {mode === "login" &&
                    <div>
                        <p className="auth_option" >Don't have an account yet?
                            <span>
                                <Link to="/signup">
                                    Sign up Here
                                </Link>
                            </span>
                        </p>
                        <button>Login in</button>
                    </div>
                }

                {error && <p className="error">{error}</p>}
            </form >
        </div >

    )
}

export default AuthForm;