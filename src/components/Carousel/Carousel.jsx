import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello.jpg';
import Pencil from '../images/Pencil.jpg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
    <div id='start'>
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img className={classes.image} src={'https://img.freepik.com/vecteurs-premium/nom-asma-dans-art-calligraphie-arabe-diwani_587453-445.jpg'} alt='myImage' />
          <div className={classes.h1}>
              <a
                href='https://drive.google.com/file/d/1K-u020GwRI7tuou-1vEtMtqFfEF5Tl0l/view?usp=sharing'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
          </div>
        </div>
       
      </Carousel>
    </div>
  );
}
