import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {images} from '../../utils/images'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faSearch} from '@fortawesome/free-solid-svg-icons'

import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="wrapper">
                        <a href="/#">
                            <img className="header__logo" src={images['mircod.png']} alt="logo"/>
                        </a>
                        <a href="/#">Sign In</a>
                    </div>
                </div>
            </div>
            <div className="header__nav">
                <div className="container">
                    <div className="header__nav-inner">
                        <Navbar collapseOnSelect expand="lg">
                            <Navbar.Brand href="#home">
                                <img className="header__logo mobile" src={images['mircod.png']} alt="logo"/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link className="link current" href="/#">Constructor</Nav.Link>
                                    <Nav.Link className="link" href="/#">Help</Nav.Link>
                                    <Nav.Link className="link" href="/#">User panels</Nav.Link>
                                    <Nav.Link className="link" href="/#">Faq</Nav.Link>
                                    <Nav.Link className="link" href="/#">About</Nav.Link>
                                    <Nav.Link className="link" href="/#">Blog</Nav.Link>
                                    <div className="link mobile">
                                        <div className="header__funcs mobile">
                                            <a href="/#" className="func orange link">
                                                <FontAwesomeIcon icon={faHeart}/>
                                            </a>
                                            <a href="/#" className="func orange link">
                                                <FontAwesomeIcon icon={faSearch}/>
                                            </a>
                                        </div>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="header__funcs">
                            <a href="/#" className="func orange link">
                                <FontAwesomeIcon icon={faHeart}/>
                            </a>
                            <a href="/#" className="func orange link">
                                <FontAwesomeIcon icon={faSearch}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
