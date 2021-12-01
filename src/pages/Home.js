import React, {useState, useEffect} from 'react';
import { FaAngleLeft, FaAngleRight, FaSketch } from 'react-icons/fa';
import {experience} from '../resources/data';
import '../resources/css_folder/home.css';

const Home = () => {
  const [jobs, setJobs] = useState(experience);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = jobs.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, jobs]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return (
      () => clearInterval(slider)
    );
  }, [index])
  return (
    // <div>
    //     <img src={logo} alt="" />
    //     <h1>Home Page</h1>
    // </div>
    <section className="home-section">
      <div className="home-title">
        <h2>
          <span></span> Work Experience
        </h2>
      </div>
      <div className="home-section-center">
        {jobs.map((job, jobIndex) => {
          const {company, date, title, duties} = job;
          let position = 'home-nextSlide';
          if (jobIndex === index) {
            position = 'home-activeSlide';
          }
          if (jobIndex === index - 1 || (index === 0 && jobIndex === jobIndex.length - 1)) {
            position = 'home-lastSlide';
          }
          return (
            <article key = {jobIndex} className = {position}>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p>{date}</p>
              {duties.map((duty, index) => {
                return (
                  <div key = {index} className = 'home-job-desc'>
                    <p>
                      <FaSketch className = 'job-icon'></FaSketch>
                      {duty}
                    </p>
                  </div>
                );
              })}
            </article>
          );
        })}
        <button className = 'home-prev' onClick = {() => setIndex(index - 1)}> <FaAngleLeft /></button>
        <button className = 'home-next' onClick = {() => setIndex(index + 1)}> <FaAngleRight /></button>
      </div>
    </section>
  );
};

export default Home;
