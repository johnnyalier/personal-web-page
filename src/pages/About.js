import React, { useState } from 'react';
import {contact} from '../resources/data';

const About = () => {
    const [info, setInfo] = useState(contact);
    return (
        <>
            <div>
                <h1>About Page</h1>
                {info.map((myContact) => {
                    return (
                        <div className = 'item'>
                            <h4>Contact Information</h4>
                            <p>{myContact.name}</p>
                            <p>{myContact.alias}</p>
                            <p>{myContact.phone}</p>
                            <p>{myContact.email}</p>
                        </div>
                    );
                })}
            </div>
            <br />
            <div className = 'hobbies'>
                <h4>Hobbies</h4>
                <p>Favourite sport teams</p>
                <p>Socializing</p>
                <p>Travelling</p>
            </div>
            <br />
            <div className = 'hobbies'>
                <h4>Hobbies</h4>
                <p>Favourite sport teams</p>
                <p>Socializing</p>
                <p>Travelling</p>
            </div>
            <br />
            <div className = 'socialMedia'>
                <h4>Social media links</h4>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            <br />
            <div className = 'favourites'>
                <h4>Favourite stuff</h4>
                <p>Books</p>
                <p>Movies</p>
                <p>Sports</p>
                <p>Games</p>
            </div>
        </>
    );
};

export default About;
