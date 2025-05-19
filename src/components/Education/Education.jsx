import React, { Component } from 'react';
import classes from './Education.module.css';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                     
                    </div>
                    
                  </article> */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Engineering Student at Private University of Marrakesh <span>2023-Present</span>
                      </h2>
                      <div className={classes.description}>
                        Currently pursuing a degree in Computer Engineering.
                      </div>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Integrated Preparatory Program <span>2021-2022</span>
                      </h2>
                      <div className={classes.description}>
                        Completed preparatory studies with a focus on Physical Sciences.
                      </div>
                    </div>
                  </article>
                  <article>
  <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
    <MdWork />
  </div>
  <div className={classes.label}>
    <h2>Baccalaureate</h2>
    <div className={classes.description}>
      Completed the Baccalaureate in Physical Sciences with distinction in 2021.
    </div>
  </div>
</article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;