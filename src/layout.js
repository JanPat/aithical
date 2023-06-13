import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar.js";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;