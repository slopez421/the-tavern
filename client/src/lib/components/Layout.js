import { Outlet } from "react-router";
import Navbar from "./Navbar";
import FilterMenu from "./FilterMenu";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="App">
                <Outlet />
            </main></>
    )
}

export default Layout