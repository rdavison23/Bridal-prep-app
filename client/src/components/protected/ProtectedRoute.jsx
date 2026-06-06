import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const ProtectedRoute = () => {
    const auth = useContext(UserContext);

    if (!auth) {
        return null;
    }

    const { user, loading } = auth;
}

export default ProtectedRoute;