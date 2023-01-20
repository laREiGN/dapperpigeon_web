import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Steam, Youtube } from "../../../assets";

import './Header.css'

export default function Header() {

    const [headerCollapsed, setHeaderCollapsed] = useState(true);
    const [scrollDirection, setScrollDirection] = useState(null);

    function toggleHeader() {
        setHeaderCollapsed(!headerCollapsed);
    }

    function useScrollDirection() {
        useEffect(() => {
            let lastScrollY = window.pageYOffset;

            const updateScrollDirection = () => {
                const scrollY = window.pageYOffset;
                const direction = scrollY > lastScrollY ? "down" : "up";
                if (direction !== scrollDirection && (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)) {
                    setScrollDirection(direction);
                } else if (scrollY <= 0) {
                    setScrollDirection("up");
                }

                setHeaderCollapsed(true);

                lastScrollY = scrollY > 0 ? scrollY : 0;
            };

            window.addEventListener("scroll", updateScrollDirection); // add event listener
            return () => {
                window.removeEventListener("scroll", updateScrollDirection); // clean up
            }
        }, []);

        return scrollDirection;
    };

    return (
        <header className={`${useScrollDirection() === "down" ? "hide" : "show"} header`}>
            <nav>
                <div className={`${headerCollapsed ? "collapsed" : "expanded"} header-item-container`}>
                    <div className="header-logo">
                        <div 
                            className={`${headerCollapsed ? "expand" : "collapse"} menu-icon`}
                            onClick={toggleHeader}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h1>DAPPER PIGEON</h1>
                    </div>
                    <div className="header-socials flex-row">
                        <a className="social" href="https://www.instagram.com/dapper_pigeon_productions/" target="_blank" rel="noreferrer">
                            <Instagram />
                        </a>
                        <a className="social" href="https://store.steampowered.com/app/2244690/Forest_of_Frequencies/" target="_blank" rel="noreferrer">
                            <Steam />
                        </a>
                        <a className="social" href="https://www.youtube.com/@DapperPigeon" target="_blank" rel="noreferrer">
                            <Youtube />
                        </a>
                    </div>
                    <div className="header-nav-container">
                        <ul className="header-nav">
                            <div className="link-container">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "link active-link" : "link")}
                                    to={"/"}>
                                    <p>HOME</p>
                                </NavLink>
                            </div>
                            {/* <div className="link-container">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "link active-link" : "link")}
                                    to={"/game"}>
                                    <p>GAME</p>
                                </NavLink>
                            </div> */}
                            <div className="link-container">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "link active-link" : "link")}
                                    to={"/news"}>
                                    <p>NEWS</p>
                                </NavLink>
                            </div>
                            <div className="link-container">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "link active-link" : "link")}
                                    to={"/team"}>
                                    <p>ABOUT US</p>
                                </NavLink>
                            </div>
                            <div className="link-container">
                                <NavLink className="btn primary" to={"/contact"}>
                                    <p>CONTACT</p>
                                </NavLink>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}