import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';

import classes from './Projects.module.css';
import chess from '../images/chess.png';
import image2 from '../images/image2.png';
import image1 from '../images/image1.png';

import courseApp from '../images/courseApp.png';
import solanaaid from '../images/solanaaid.png';
import github from '../images/github.png';

// Web projects
const webItem = [
  {
    
    title: 'SGDI',
    techStack: 'FASTAPI ,TypeScript, ReactJS, supabase, Tailwind CSS',
    desc: 'SGDI is a web application that allows users to create and manage their own digital docs.',
    
    image: image1,
    color: '#0FFFFF',
    githubLink: 'https://github.com/BOUKHAL/SGDI'
  },
  {
    
    title: 'electronic store',
    techStack: 'TypeScript, ReactJS, supabase, Tailwind CSS',
    desc: 'An electronic store web application that allows users to browse and purchase electronic products.',
    image: image2,
    
    color: '#d5ebda',
    githubLink:
      'https://github.com/Herchan321/e-commerce_app'
  },
  
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank' rel='noopener noreferrer'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} alt='GitHub' />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
    </div>
  );
}