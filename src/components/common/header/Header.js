import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={'assets/logos/DPLogoSmall.png'} alt="Dapper Pigeon Logo"/>
            <div className="navBar">
                <ul>
                    <Link className="link" to={"/"}>
                        <li>
                            <h1>Home</h1>
                        </li>
                    </Link>
                    <Link className="link" to={"/blog"}>
                        <li>
                            <h1>Blog</h1>
                        </li>
                    </Link>
                    <Link className="link" to={"team"}>
                        <li>
                            <h1>Team</h1>
                        </li>
                    </Link>
                </ul>
            </div>
            <div></div>
        </header>
    )
}