import { useState } from 'react'

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (token, loggedInUser) => {
        localStorage.setItem('token', token);
        setUser(loggedInUser);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <UserContext.Provider>

        </UserContext.Provider>
    )
};

export default UserProvider;