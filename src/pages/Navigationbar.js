import React, { useState, useRef, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from '../resources/pictures/logo5.png';
import {links, social} from '../resources/data';


const Navigationbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() =>{
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`
        }else{
        linksContainerRef.current.style.height = '0px'
        }
    }, [showLinks])
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo5" className = 'logo'/>
                    <button className = 'nav-toggle' onClick = {() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
            
            
                <div className="links-container" ref = {linksContainerRef}>
                    <ul className = 'links' ref = {linksRef}>
                        {links.map((link) => {
                            const {id, url, text} = link;
                            return (
                                <li key = {id}>
                                    <Link to = {url}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <ul className = 'social-icons'>
                    {social.map((socialIcon) => {
                        const {id, url, icon} = socialIcon;
                        return (
                        <li key = {id}>
                            <a href={url} target="_blank" rel="noopener noreferrer">{icon}</a>
                        </li>
                        );
                    })}
                </ul>
            </div>            
        </nav>
    );
};

export default Navigationbar;
