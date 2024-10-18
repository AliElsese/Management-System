import axios from "axios";
import { useEffect, useState } from "react";

export default function Departments() {
    const [departments, setDepartments] = useState([]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get("https://tasksapp.integration25.com/api/department/index", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            setDepartments(res.data.data);
            // console.log(res.data.data);
        })
        .catch((err) => {
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
                                <h5 className="card-title">Departments Table</h5>

                                <table className="table table-bordered table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Manager</th>
                                            <th scope="col">Employees Number</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {departments.map((department, index) => {
                                            return (
                                                <tr key={department.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{department.name}</td>
                                                    <td>{department.manager ? department.manager.name : ''}</td>
                                                    <td>{department.employees ? department.employees.length : ''}</td>
                                                    <td className="d-flex gap-3">
                                                        <button><i className="fa-regular fa-pen-to-square"></i></button>
                                                        <button><i className="fa-solid fa-trash"></i></button>
                                                    </td>
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
