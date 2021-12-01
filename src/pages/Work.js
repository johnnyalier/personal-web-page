import React from 'react';
import { FaSketch } from 'react-icons/fa';
import {experience} from '../resources/data';

const Work = () => {
  return ( 
    <section className="work-section-center">
      <div className="work-title">
        <h2>Work Experience</h2>
      </div>
      <div className="work-jobs-center">
        {experience.map((job, index) => {
          const {company, date, title, duties} = job;
          return (
            <section key = {index} className = 'job-info'>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p>{date}</p>
              {duties.map((duty, index) => {
                return (
                  <div key = {index} className = 'job-desc'>
                    <p>
                      <FaSketch className = 'job-icon'></FaSketch>
                      {duty}
                    </p>
                  </div>
                );
              })}
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
