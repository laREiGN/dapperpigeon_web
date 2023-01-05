import React from "react";
import { Link } from "react-router-dom";

import { Instagram, Steam, Youtube } from "../../../assets";
import FooterImage from "../../../assets/images/FooterImage.svg"
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-image">
                <img src={FooterImage} alt="" />
            </div>
            <div className="footer-content">
                <div className="footer-socials">
                    <Link className="footer-social" to={"/"}>
                        <Instagram />
                    </Link>
                    <Link className="footer-social" to={"/"}>
                        <Steam />
                    </Link>
                    <Link className="footer-social" to={"/"}>
                        <Youtube />
                    </Link>
                </div>
                <small className="footer-copyright">
                    Copyright 2022 Dapper Pigeon
                </small>
            </div>
        </footer>
    )
}