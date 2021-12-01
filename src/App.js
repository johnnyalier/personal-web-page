import React from "react";
import Pages from  './pages';
import {social} from './resources/data';
import {FaRegCopyright} from 'react-icons/fa'
function App() {
    const year = new Date().getFullYear();
    return (
        <div className = 'pages'>
            <Pages />
            <footer className = 'footer'>
                <div className="footer-center">
                    <ul className = 'footer-icons'>
                        {social.map((socialIcon) => {
                            const {id, url, icon} = socialIcon;
                            return (
                            <li key = {id} className = 'footer-item'>
                                <a href={url} target="_blank" rel="noopener noreferrer">{icon}</a>
                            </li>
                            );
                        })}
                    </ul>
                    <div className="copyright">
                        <p>
                            <FaRegCopyright />
                            {year} All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;