import React, { useState } from 'react'
import Home from '../../pages/Homepage/Home'
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

import './Layout.css'
import Menus from '../Menus/Menus';
const Layout = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = async () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className="siderbar-section">
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div className="sidebar-toggle-icons">

                        <p onClick={handleToggle}>
                            {toggle ? (<FaAnglesLeft size={30} />) : (<FaAnglesRight size={30} />)}
                        </p>
                    </div>
                    <Menus toggle={toggle} />
                </div>
                <div className="container">
                    <Home />
                </div>
            </div>
        </>
    )
}

export default Layout
