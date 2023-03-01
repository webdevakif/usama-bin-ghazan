import React from "react";
import { FaPaintBrush, FaChartLine, FaCode } from "react-icons/fa";
import { forwardRef } from "react";
export const Services = forwardRef((props, ref) => {
  return (
    <div className="services" ref={ref}>
      <div className="max-width">
        <div className="title">My services</div>
        <div className="serv-content flex" style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          <div className="card ">
            <i>
              <FaPaintBrush />
            </i>
            <div className="text">Web Design</div>
            <p>I can design websites using tools like Figma, Wireframe etc</p>
          </div>
          <div className="card">
            <i>
              <FaCode />
            </i>
            <div className="text">Web Development</div>
            <p>I can make fully responsive websites using MERN Stack</p>
          </div>
          <div className="card">
            <i>
              <FaChartLine />
            </i>
            <div className="text">Landing Pages</div>
            <p>
              I can design and develop landing pages that give high
              conversion rates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
