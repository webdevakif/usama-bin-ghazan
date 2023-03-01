import React from "react";
import { forwardRef } from "react";

export const Skills = forwardRef((props, ref) => {
  return (
    <>
      <div className="skills" ref={ref} style={{minWidth:"100%", maxWidth:"100%", margin:"0 auto"}}>
        <div className="max-width" style={{width:"100%", margin:"0", maxWidth:"100%", padding:"10px"}}>
          <div className="title extile">My Skills</div>
          <div className="skill-content flex" style={{minWidth:"100%", width:"100%",flexWrap:"wrap",margin:"0 auto"}}>
            <div className="column left skillleftfix" style={{minWidth:"450px", padding:"30px 20px", margin:"0 auto", width:"45%", display:"flex", flexDirection:'column', alignContent:"center", alignItems:"center",justifyContent:"center"}}>
              <div className="text">My creative skills & experiences.</div>
              <p style={{margin:"0 auto"}}>
                I have expertise in html css and Javascript. On frontend I use
                technologies like ReactJs, Material UI/Chakra UI. On backend I use Nodejs and ExpressJs.
                I use MongoDb Database which is quite efficient.
              </p>
              <a className="skillresume" href="/">My Resume</a>
            </div>

            <div className="column right" style={{minWidth:"330px", padding:"30px 20px", margin:"0 auto", width:"45%"}}>
              <div className="bars">
                <div className="info">
                  <span>ReactJs</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>NodeJs</span>
                  <span>80%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>ExpressJs</span>
                  <span>80%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>MongoDb</span>
                  <span>80%</span>
                </div>
                <div className="line react"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
