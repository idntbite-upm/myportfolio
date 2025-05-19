import React from 'react';
import classes from './Interest.module.css';
// ScrollAnimation is commented out as per your updated code
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id="interest">
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      
      <div className={classes.Interest}>
        <div className={classes.web}>
          <h3>Soft Skills</h3>
          <ul className={classes.skillsList}>
            <li>Problem Solving</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Creativity</li>
          </ul>
        </div>
        
        <div className={classes.app}>
          <h3>Web Development</h3>
          <p>
            Javascript/ Typescript, HTML/ CSS, ReactJs, Next.js, Tailwind
            CSS, UI Libraries (React-Bootstrap), PHP, Laravel, MySQL, REST APIs,
            Axios, JSON, unit testing, and debugging.
          </p>
        </div>
        
        <div className={classes.other}>
          <h3>Expanded Expertise</h3>
          <p>
            Docker, GitHub, Frontend System Design, Express.js, Node.js, MongoDB, MERN Stack,
            SQL, NOSQL, Socket.io
          </p>
        </div>
      </div>
    </div>
  );
}