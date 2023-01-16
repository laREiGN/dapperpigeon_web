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
                    <a className="footer-social" href="https://www.instagram.com/dapper_pigeon_productions/" target="_blank" rel="noreferrer">
                        <Instagram />
                    </a>
                    <a className="footer-social" href="https://www.youtube.com/@DapperPigeon" target="_blank" rel="noreferrer">
                        <Steam />
                    </a>
                    <a className="footer-social" href="https://www.youtube.com/@DapperPigeon" target="_blank" rel="noreferrer">
                        <Youtube />
                    </a>
                </div>
                <small className="footer-copyright">
                    Copyright 2022 Dapper Pigeon
                </small>
            </div>
        </footer>
    )
}