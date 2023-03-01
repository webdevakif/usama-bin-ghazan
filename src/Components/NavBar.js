import React from "react";
import { navItems } from "../data";
import { FaBars, FaTimes, FaAngleUp } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "./context";

export const NavBar = ({
  homeSection,
  aboutSection,
  servicesSection,
  skillsSection,
  projectSection,
  contactSection,
}) => {
  const [isactive, setIsActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollDown } = useContext(AppContext);

  const openSideBar = () => {
    setIsActive(true);
  };

  const closeSideBar = () => {
    setIsActive(false);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          scrollPosition > 500 ? "scroll-up-btn show" : "scroll-up-btn"
        }
      >
        <i>
          <FaAngleUp onClick={goToTop} />
        </i>
      </div>
      <nav className={scrollPosition > 20 ? "navbar sticky" : "navbar "}>
        <div className="max-width ">
          <div className="flex">
            <h1 className="hidh1"></h1>
            <h1 className="logo">
              Portfo
              <span className={scrollPosition > 20 ? "span-white" : "span"}>
                lio.
              </span>
            </h1>
            <ul className={isactive ? "menu active" : "menu"}>
              {navItems.map((item) => {
                const { id, url, text } = item;
                const scrollDownFunc = (
                  homeSection,
                  aboutSection,
                  servicesSection,
                  skillsSection,
                  projectSection,
                  contactSection
                ) => {
                  for (let i = 0; i < 6; i++) {
                    if (id === 0) {
                      scrollDown(homeSection);
                      break;
                    }else if(id===1){
                      scrollDown(aboutSection)
                      break;

                    }else if(id===2){
                      scrollDown(servicesSection)
                      break;

                    }else if(id===3){
                      scrollDown(skillsSection)
                      break;

                    }else if(id===4){
                      scrollDown(projectSection)
                      break;

                    }else if(id===5){
                      scrollDown(contactSection)
                      break;

                    }
                  }
                };

                return (
                  <li
                    key={id}
                    onClick={() =>
                      scrollDownFunc(
                        homeSection,
                        aboutSection,
                        servicesSection,
                        skillsSection,
                        projectSection,
                        contactSection
                      )
                    }
                  >
                    <a>{text}</a>
                  </li>
                );
              })}
            </ul>
            <div className="menu-btn">
              {isactive ? (
                <FaTimes onClick={closeSideBar} />
              ) : (
                <FaBars onClick={openSideBar} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
