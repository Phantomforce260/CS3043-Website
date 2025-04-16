import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/CS3043-Website">Home</Link></li>
                    <li><Link to="/CS3043-Website/info">Example</Link></li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
}