import { useState, useEffect } from 'react'
import { getMe } from '../api/authApi';

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

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                const response = await getMe(token);
                setUser(response.data.user);
            } catch (error) {
                logout();
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading, login, logout }}>
            { children }
        </UserContext.Provider>
    )
};

export default UserProvider;