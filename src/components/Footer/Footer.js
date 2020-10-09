import React from "react";
import {images} from "../../utils/images";
import {faYoutube, faGoogle, faTwitter, faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "react-scroll-up";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__top-inner">
                        <div className="footer__col">
                            <div className="title uppercase">About us</div>
                            <div className="cont">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sectetur,
                                    adipisci velit, sed quia non numquam eius
                                </p>
                            </div>
                        </div>
                        <div className="footer__col">
                            <div className="title uppercase">Categories</div>
                            <div className="cont">
                                <ul>
                                    <li><a href="/#" className="link link--light">Electronics</a></li>
                                    <li><a href="/#" className="link link--light">Home & Tools</a></li>
                                    <li><a href="/#" className="link link--light">Beauty & Health</a></li>
                                    <li><a href="/#" className="link link--light">Toys & Kids</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__col">
                            <div className="title uppercase">Accept Payments</div>
                            <div className="cont">
                                <div className="payments">
                                    <img src={images['mastercard.png']} alt="mc"/>
                                    <img src={images['paypal.png']} alt="mc"/>
                                    <img src={images['visa.png']} alt="mc"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-inner">
                        <div className="copyright">
                            2016 - Mircod. All Rights Reserved.
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                               className="link link--light">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"
                               className="link link--light">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"
                               className="link link--light">
                                <FontAwesomeIcon icon={faGoogle}/>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"
                               className="link link--light">
                                <FontAwesomeIcon icon={faYoutube}/>
                            </a>
                        </div>
                        <div className="social social--links">
                            <a href="/#" className="link link--light">Blog</a>
                            <a href="/#" className="link link--light">About us</a>
                        </div>
                        <ScrollToTop showUnder={160}>
                            <div className="btn-up">
                                <FontAwesomeIcon icon={faArrowUp}/>
                            </div>
                        </ScrollToTop>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
