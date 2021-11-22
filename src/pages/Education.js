import React from 'react';
import {resume} from '../resources/data';

const Education = () => {
  const {education, skills} = resume;
  return (
    <section>
      <div>
        <h3>Education History</h3>
        {education.map((item, index) => {
          const {degree, school, availability} = item;
          return (
            <article key = {index}>
              <h4>{degree}</h4>
              <h4>{school}</h4>
              <p>{availability}</p>
            </article>
          );
        })}
      </div>
      
      <div>
        {skills.map((skill, index) => {
          const {type, details} = skill;
          return (
            <article key = {index}>
              <h3>{type}</h3>
              <ul>
                {details.map((item, index) => {
                  return (
                    <li key = {index}>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>

    </section>
  );
};

export default Education;
