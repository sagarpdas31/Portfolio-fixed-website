
// export default MobileNav;

import React, { useState } from "react";
import { Link } from "react-scroll";
import "./MobileNav.css";
import {
    FcAbout, FcBusinessContact, FcEngineering,
    FcGraduationCap, FcHome, FcOrgUnit,
    FcVoicePresentation, FcDiploma1,
} from "react-icons/fc";

const navGroups = [
    {
        label: "Navigation",
        items: [
            { to: "home", icon: <FcHome />, label: "Home" },
            { to: "about", icon: <FcAbout />, label: "About" },
            { to: "education", icon: <FcGraduationCap />, label: "Education" },
            { to: "stack", icon: <FcEngineering />, label: "Stack" },
        ],
    },
    {
        label: "Work",
        items: [
            { to: "project", icon: <FcOrgUnit />, label: "Projects" },
            { to: "work", icon: <FcVoicePresentation />, label: "Experience" },
            { to: "certification", icon: <FcDiploma1 />, label: "Certification" },
        ],
    },
    {
        label: null,
        items: [
            { to: "contact", icon: <FcBusinessContact />, label: "Contact" },
        ],
    },
];

const scrollProps = {
    spy: true, smooth: false, offset: -64, duration: 0, activeClass: "active",
};

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    const close = () => setOpen(false);

    return (
        <nav className="mobile-nav">
            {/* HEADER */}
            <div className="mnav-header">
                <div className="mnav-left">
                    <button
                        className={`burger ${open ? "open" : ""}`}
                        onClick={() => setOpen(p => !p)}
                        aria-label="Toggle menu"
                    >
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </button>
                    <span className="mnav-title">Portfolio</span>
                    <span className="mnav-dot" />
                </div>
            </div>

            {/* OVERLAY */}
            <div
                className={`mnav-overlay ${open ? "open" : ""}`}
                onClick={close}
            />

            {/* DRAWER */}
            <div className={`mnav-drawer ${open ? "open" : ""}`}>
                {navGroups.map((group, gi) => (
                    <div key={gi}>
                        {group.label && (
                            <p className="mnav-section-label">{group.label}</p>
                        )}
                        {group.items.map(({ to, icon, label }) => (
                            <Link
                                key={to}
                                to={to}
                                {...scrollProps}
                                onClick={() => { setActive(to); close(); }}
                                className={`mnav-item ${active === to ? "active" : ""}`}
                            >
                                <span className="mnav-icon">{icon}</span>
                                <span>{label}</span>
                            </Link>
                        ))}
                        {gi < navGroups.length - 1 && <div className="mnav-divider" />}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default MobileNav;