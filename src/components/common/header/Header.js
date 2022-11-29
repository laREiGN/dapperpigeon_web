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
                            <p>HOME</p>
                        </NavLink>
                        <NavLink  
                            className={({ isActive }) => (isActive ? "link active-link" : "link")}
                            to={"/game"}>
                            <p>GAME</p>
                        </NavLink>
                        <NavLink  
                            className={({ isActive }) => (isActive ? "link active-link" : "link")}
                            to={"/news"}>
                            <p>NEWS</p>
                        </NavLink>
                        <NavLink  
                            className={({ isActive }) => (isActive ? "link active-link" : "link")}
                            to={"/team"}>
                            <p>OUR TEAM</p>
                        </NavLink>
                        <NavLink className="btn" to={"/"}>
                            <p>CONTACT</p>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </header>
    )
}