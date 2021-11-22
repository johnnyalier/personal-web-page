import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import {resume} from '../resources/data';

const Work = () => {
  const {experience} = resume;
  return ( 
    <section className="section">
      <div className="title">
        <h2>Work Experience</h2>
      </div>
      <div className="jobs-center">
        {experience.map((job, index) => {
          const {company, date, title, duties} = job;
          return (
            <article key = {index} className = 'job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{date}</p>
              {duties.map((duty, index) => {
                return (
                  <div key = {index} className = 'job-desc'>
                    <FaAngleDoubleRight className = 'job-icon'></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
