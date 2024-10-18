export default function SideBar({setSideBar_Id}) {

    return (
        <div>
            <aside id="sidebar" className="sidebar top-0">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a onClick={() => setSideBar_Id("1")} className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Departments</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => setSideBar_Id("2")} className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Users</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => setSideBar_Id("3")} className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Tasks</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
