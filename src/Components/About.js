import React from 'react';
import profileone from '../images/profile-1.JPG';
import Typewriter from 'typewriter-effect';
import { forwardRef } from 'react';
export const About = forwardRef((props, ref) => {
  return (
    <div className='about' ref={ref}>
      <div className='max-width'>
        <h2 className='title'>About me</h2>
        <div className='about-content'>
          <div className='left'>
            <img src={profileone} alt='profile'  />
          </div>
          <div className='description'>
            <div className='text'>
              I'm Usama and I'm a{' '}
              <span>
                <Typewriter
                  options={{
                    strings: ['Developer', 'Freelancer', 'UI/UX Designer'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 60,
                  }}
                />
              </span>{' '}
            </div>
            <p>
              I am an enthusiastic and passionate Software Engineer who is
              studying in final year at{' '}
              <span>COMSATS University Islamabad</span> in Software Engineering
              Majors. Although I can code in other fields like Machine Learning
              Models and App Development, my main specialization is doing Web
              Development. I am a highly skilled professional developer who
              loves to take on the challenges and solve them. While doing my
              graduation, I had the pleasure of working at multiple projects of
              Web Development which has polished my skills and enhanced my
              experience. I am keen to learn new technologies and adopt to
              changing environments.
            </p>
            <a href='/' className='aboutresume'>My Resume</a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
});
