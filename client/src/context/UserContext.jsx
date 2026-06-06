import { useState } from 'react'

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <UserContext.Provider>

        </UserContext.Provider>
    )
};

export default UserProvider;