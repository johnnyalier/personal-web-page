import React, { useState } from 'react';
import {contact, hobbies, favourites, social} from '../resources/data';

const About = () => {
    const [info, setInfo] = useState(contact);
    return (
        <section className = 'about-section-center'>
            <div className = 'contact'>
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
                <div className="item">
                    <h4>Hobbies</h4>
                    {hobbies.map((hobby, index) => {
                        return (
                            <p key = {index}>{hobby}</p>
                        );
                    })}
                </div>
            </div>
            <br />
            <div className = 'socialMedia'>
                <div className="item">
                    <h4>Social media links</h4>
                    <ul>
                        {social.map((socialIcon) => {
                            const {id, url, name} = socialIcon;
                            return (
                                <p key = {id} className = 'media-item'>
                                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                                </p>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <br />
            <div className = 'favourites'>
                <div className="item">
                    <h4>Favourite stuff</h4>
                    {favourites.map((favourite, index) => {
                        return (
                            <p key = {index}>{favourite}</p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
