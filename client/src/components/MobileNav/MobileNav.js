import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import "./MobileNav.css"
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from 'react-scroll'
import { FcAbout, FcBusinessContact, FcEngineering, FcGraduationCap, FcHome, FcOrgUnit, FcVoicePresentation } from 'react-icons/fc'
const MobileNav = () => {
    const [open, setOpen] = useState(false);

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };

    // handle menu clicks
    const handleMenuClick = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (
                        <AiOutlineMenuFold
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    ) : (
                        <GiHamburgerMenu
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    )}
                    <span className='mobile-nav-title'>My Portfolio App</span>
                </div>
                {open && (
                    <div className="mobile-nav-menu">
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                        activeClass="active"
                                    >
                                        <FcHome />
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                        activeClass="active"
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="education"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                        activeClass="active"
                                    >
                                        <FcGraduationCap />
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="stack"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                        activeClass="active"
                                    >
                                        <FcEngineering />
                                        Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                        activeClass="active"
                                    >
                                        <FcOrgUnit /> Project
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                        activeClass="active"
                                    >
                                        <FcVoicePresentation /> Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                        activeClass="active"
                                    >
                                        <FcBusinessContact />
                                        Contact
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default MobileNav
