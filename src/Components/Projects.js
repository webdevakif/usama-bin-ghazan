import React, { useState } from 'react';
import { projects } from '../data';
import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

export const Projects = forwardRef((props, ref) => {
  const [project, setProject] = useState(projects);
  return (
    <>
      <div className='projects' ref={ref}>
        <div className='max-width' style={{minWidth:"250px", padding:"0 0"}}>
          <div className='title'>Projects</div>
          <div className='card-wrapper'>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className='mySwiper'
            >
              <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
              {projects.map((project) => {
                const { id, image, title, desc, icons, url } = project;
                return (
                  <div style={{minWidth:'500px',}}>
                  <SwiperSlide className='card' key={id}>
                    <a href={url} target='_blank'>
                      <div className='image'>
                        <img src={image} alt='' />
                      </div>
                      <div className='detail'>
                        <div className='head'>{title}</div>
                        <div className='description'>{desc}</div>
                      </div>
                      <div className='icons'>
                        <i>
                          {icons.html ? (
                            <img className='border' src={icons.html} alt='' />
                          ) : (
                            ''
                          )}
                        </i>
                        <i>
                          {icons.css ? (
                            <img className='border' src={icons.css} alt='' />
                          ) : (
                            ''
                          )}
                        </i>
                        <i>
                          {icons.mongodb ? (
                            <img
                              className='border'
                              src={icons.mongodb}
                              alt='ccc'
                            />
                          ) : (
                            ''
                          )}
                        </i>
                        <i>
                          {icons.express ? (
                            <img
                              className='border'
                              src={icons.express}
                              alt='ccc'
                            />
                          ) : (
                            ''
                          )}
                        </i>
                        <i>
                          {icons.react ? (
                            <img
                              className='border'
                              src={icons.react}
                              alt='ccc'
                            />
                          ) : (
                            ''
                          )}
                        </i>
                        <i>
                          {icons.node ? (
                            <img
                              className='border'
                              src={icons.node}
                              alt='ccc'
                            />
                          ) : (
                            ''
                          )}
                        </i>
                      </div>
                    </a>
                  </SwiperSlide>
                  </div>
                );
              })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
});
