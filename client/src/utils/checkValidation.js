export const validateUsername = (username) => {
    if (!username.trim()) {
        return "Username is required";
    }

    return ""
}

export const validateEmail = (email) => {
    if (!email.trim()) {
        return "Email is required";
    }
    const emailRegex = /\S+@\S+\.\S+/

    if (!emailRegex.test(email)) {
        return "Please enter a valid email";
    }

    return ""
}

export const validatePassword = (password) => {
    if (!password) {
        return "Password is required";
    }

    if (password.length < 10) {
        return "Password must be at least 10 characters";
    }

    return "";
}

export const validateConfirmPassword = (
    password,
    confirmPassword
) => {
    if (password !== confirmPassword) {
        return "Passwords do not match";
    }

    return "";
};