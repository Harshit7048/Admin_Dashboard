import './sidebar.css'
import { Link } from 'react-router-dom'
export default function SideBar() {
    return <div className='sidebar-in'>
        <div className="logo">
            Shopee
        </div>
        <h2>
            Dashboard
        </h2>
        <Link to={"/"}>Ecommerce</Link>
        <h2>Pages</h2>
        <Link to={"/employees"}>Employees</Link>
        <Link to={"/employees"}>Employees</Link>
        <Link to={"/employees"}>Employees</Link>
        <Link to={"/employees"}>Employees</Link>


    </div>
}