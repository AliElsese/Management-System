import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get("https://tasksapp.integration25.com/api/user/show-employees", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            setUsers(res.data.data);
            // console.log(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <div>
            <main id="main" className="main">
                <section className="section">
                    <div className="">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Users Table</h5>

                                <table className="table table-bordered table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Department_id</th>
                                            <th scope="col">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => {
                                            return (
                                                <tr key={user.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.department_id}</td>
                                                    <td>{user.user_type}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
