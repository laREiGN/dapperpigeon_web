import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Instagram, Steam, TikTok, Youtube } from "../../../assets";

import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="headerLeft flex-row">
                <div className="headerLogo">
                    <h1>DAPPER PIGEON</h1>
                </div>
                <div className="headerSocials flex-row">
                    <Link className="social" to={"/"}>
                        <Instagram />
                    </Link>
                    <Link className="social" to={"/"}>
                        <Steam />
                    </Link>
                    <Link className="social" to={"/"}>
                        <TikTok />
                    </Link>
                    <Link className="social" to={"/"}>
                        <Youtube />
                    </Link>
                </div>
            </div>
            <div className="headerRight flex-row">
                <div className="headerNavigationContainer">
                    <ul className="navBar">
                        <NavLink 
                            className={({ isActive }) => (isActive ? "link active-link" : "link")}
                            to={"/"}>
                            <li>
                                <h1>HOME</h1>
                            </li>
                        </NavLink>
                        <NavLink  
                            className={({ isActive }) => (isActive ? "link active-link" : "link")}
                            to={"/game"}>
                            <li>
                                <h1>GAME</h1>
                            </li>
                        </NavLink>
                        <NavLink  
                            className={({ isActive }) => (isActive ? "link active-link" : "link")}
                            to={"/news"}>
                            <li>
                                <h1>NEWS</h1>
                            </li>
                        </NavLink>
                        <NavLink  
                            className={({ isActive }) => (isActive ? "link active-link" : "link")}
                            to={"/team"}>
                            <li>
                                <h1>OUR TEAM</h1>
                            </li>
                        </NavLink>
                        <NavLink className="link contact" to={"/"}>
                            <li>
                                <h1>CONTACT</h1>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </header>
    )
}