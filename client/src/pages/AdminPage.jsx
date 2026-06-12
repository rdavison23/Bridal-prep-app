import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { getAdminUsers, deleteAdminUser } from '../api/adminApi';
import { UserContext } from '../context/UserContext';

const AdminPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && user.role !== 'admin') {
      navigate('/home');
    }
  }, [user]);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError('');
      //get tokens
      const token = localStorage.getItem('token');

      await deleteAdminUser(id, token);

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError('');

        const usersFromApi = await getAdminUsers();

        setUsers(usersFromApi.users);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  {
    loading && <p>Loading...</p>;
  }
  {
    error && <p style={{ color: 'red' }}>{error}</p>;
  }
  return (
    <div>
      <div
        style={{
          minHeight: '95vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <div>
          <h1
            style={{
              color: '#080600',
            }}>
            User Management
          </h1>
          <p>View and manage registered users.</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}>
          {users &&
            users.map((u) => (
              <div
                className="user-card"
                key={u.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                }}>
                <div>{u.id}</div>
                <div>{u.email}</div>
                <div>{u.created_at}</div>

                <button type="button" onClick={() => handleDelete(u.id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPage;
