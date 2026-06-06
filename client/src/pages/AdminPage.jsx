import { useState, useEffect } from "react";
import { getAdminUsers, deleteAdminUser } from "../api/adminApi";
const sampleUsers = [
    {
        id: 1, email: "test1@test.com", created_at: "2026-05-05"
    },
    {
        id: 2, email: "test2@test.com", created_at: "2026-06-05"
    },
    {
        id: 3, email: "test3@test.com", created_at: "2026-06-05"
    },
]

const AdminPage = () => {

    const [users, setUsers] = useState(sampleUsers);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            setError("")
            //get tokens
            const token = localStorage.getItem("token");

            await deleteAdminUser(id, token);

            setUsers((prev) =>
                prev.filter((user) => user.id !== id)
            );
        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             setLoading(true);
    //             setError("")

    //             const token = localStorage.getItem("token");
    //             const usersFromApi = await getAdminUsers(token);

    //             setUsers(usersFromApi);

    //         } catch (err) {
    //             setError(err.message);
    //             console.error(err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchUsers();
    // }, []);


    { loading && <p>Loading...</p> }
    { error && <p style={{ color: "red" }}>{error}</p> }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div>
                <h1>User Management</h1>
                <p>View and manage registered users.</p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",

            }}>
                {users && users.map((u) => (
                    <div className="user-card" key={u.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                        }}>
                        <div>{u.id}</div>
                        <div>{u.email}</div>
                        <div>{u.created_at}</div>

                        <button
                            type="button"
                            onClick={() => handleDelete(u.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div >

    )
}

export default AdminPage;