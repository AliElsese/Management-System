import { useState } from "react";
import Departments from "../../components/Departments";
import SideBar from "../../components/Sidebar";
import Tasks from "../../components/Tasks";
import Users from "../../components/Users";

export default function Home() {
    const [SideBar_Id, setSideBar_Id] = useState('1');

    return (
        <div className='home'>
            <SideBar setSideBar_Id = {setSideBar_Id} />

            {
                SideBar_Id == "1" ? 
                <Departments />
                :
                SideBar_Id == "2" ?
                <Users />
                :
                <Tasks />
            }
        </div>
    )
}
