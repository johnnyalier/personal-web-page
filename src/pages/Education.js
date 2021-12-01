import React from 'react';
import {education, skills} from '../resources/data';
import { FaSketch } from 'react-icons/fa';

const Education = () => {
  return (
    <section className = 'education-section-center'>
      <div className = 'history'>
        <div className="item">
          <h3>Education History</h3>
          {education.map((item, index) => {
            const {degree, school, availability} = item;
            return (
              <section key = {index}>
                <h4>{degree}</h4>
                <h4>{school}</h4>
                <p>{availability}</p>
              </section>
            );
          })}
        </div>
      </div>
      
      <div className = 'skills'>
        {skills.map((skill, index) => {
          const {type, details} = skill;
          return (
            <div className="skill">
              <section key = {index} className = 'item'>
                <h3 className = 'skill-header'>{type}</h3>
                <ul>
                  {details.map((item, index) => {
                    return (
                      <li key = {index}>
                        <p>
                          <FaSketch className = 'job-icon'></FaSketch>
                          {item}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Education;
