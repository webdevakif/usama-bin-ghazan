import React from 'react';
import Typewriter from 'typewriter-effect';
import { forwardRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Home = forwardRef((props, ref) => {
  return (
    <>
      <div className=' home container ' ref={ref}>
        <div className='max-width'>
          <div className='home-text'>
            <div className='text-1'>Hello, my name is</div>
            <div className='text-2'>Usama BG</div>
            <div className='text-3'>
              And I'm a <br />
              <span>
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'Freelancer',
                      'UI/UX Designer',
                    ],
                    autoStart: true,
                    loop: true,
                    typespeed: 100,
                    backspeed: 60,
                  }}
                />
              </span>{' '}
            </div>
          </div>
          <div className='btn'>
            <i>
              <FaGithub />
            </i>
            <a href='https://github.com/UsamaGhazan' target={'_blank'}>
              View on Github
            </a>
          </div>
          <div className='btn linkedin'>
            <i>
              <FaLinkedin />
            </i>
            <a
              href='https://www.linkedin.com/in/usama-bin-ghazan-8436791a0/'
              target={'_blank'}
            >
              View on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
});
