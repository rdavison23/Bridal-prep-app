import { Link } from "react-router-dom";
import "./AuthForm.css"
const AuthForm = ({ mode, onSubmit }) => {
    return (
        <div className="auth-form">
            <h1> Welcome to Bridal Prep</h1>
            <form
                onSubmit={onSubmit}>
                {mode === "signup" &&
                    <div className="form-div">
                        <label htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
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
                        placeholder="please enter a username"
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
            </form >
        </div >

    )
}

export default AuthForm;