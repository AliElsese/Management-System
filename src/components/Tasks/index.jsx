import axios from "axios";
import { useEffect, useState } from "react";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get("https://tasksapp.integration25.com/api/task/index", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            setTasks(res.data.data);
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
                                <h5 className="card-title">Tasks Table</h5>

                                <table className="table table-bordered table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Creator</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Employee</th>
                                            <th scope="col">Start Date</th>
                                            <th scope="col">End Date</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tasks.map((task, index) => {
                                            return (
                                                <tr key={task.id}>
                                                    <th className={task.status == 'completed' ? 'bg-info' : ''} scope="row">{index + 1}</th>
                                                    <td className={task.status == 'completed' ? 'bg-info' : ''}>{task.name}</td>
                                                    <td className={task.status == 'completed' ? 'bg-info' : ''}>{task.creator.name}</td>
                                                    <td className={task.status == 'completed' ? 'bg-info' : ''}>{task.department.name}</td>
                                                    <td className={task.status == 'completed' ? 'bg-info' : ''}>{task.employee.name}</td>
                                                    <td className={task.status == 'completed' ? 'bg-info' : ''}>{task["start date"]}</td>
                                                    <td className={task.status == 'completed' ? 'bg-info' : ''}>{task["end date"]}</td>
                                                    <td className={task.status == 'completed' ? 'bg-info' : ''}>{task.status}</td>
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