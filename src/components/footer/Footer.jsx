import React from 'react'
import "./footer.css";


export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sibun</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#project" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/ig_sibun/?next=%2F" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram-alt"></i>
        </a>
        <a href="https://www.linkedin.com/in/sibunnayak/" className="footer__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/Sibunnayak" className="footer__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-github"></i>
        </a>
            </div>

            <span className="footer__copy">&#169; Copyright 2023. All rigths reserved</span>
        </div>
    </footer>
  )
}
