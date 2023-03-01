import React from "react";
import { useState, useRef } from "react";
import { FaUserAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { forwardRef } from "react";

export const Contact = forwardRef((props, ref) => {
  const [item, setItem] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      [name]: value,
    });
  };
  return (
    <>
      <div className="contact" ref={ref}>
        <div className="max-width contactwid" >
          <div className="title">Contact me</div>
          <div className="contact-content flexbox" style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            <div className="column left" style={{minWidth:"350px", padding:"20px 30px"}}>
              <div className="text">Get in Touch</div>
              <p>
                Want to contact me? Send me a message or email me. I will surely
                try to respond your queries{" "}
              </p>
              <div className="icons" style={{marginTop:"20px",}}>
                <div className="row">
                  <i>
                    <FaUserAlt />
                  </i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Usama Ghazan</div>
                  </div>
                </div>
                <div className="row">
                  <i>
                    <FaMapMarkerAlt />
                  </i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Islamabad, Pakistan</div>
                  </div>
                </div>
                <div className="row">
                  <i>
                    <FaEnvelope />
                  </i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">usamaghazan@yahoo.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column right  concrl" style={{minWidth:"300px"}}>
              <form className="form" onSubmit={handleSubmit}>
                <div className="message">Message me</div>
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      name="name"
                      value={item.name}
                      placeholder="Name"
                      onChange={inputChange}
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      name="email"
                      value={item.email}
                      placeholder="Email"
                      onChange={inputChange}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      name="subject"
                      value={item.subject}
                      placeholder="Subject"
                      onChange={inputChange}
                    />
                  </div>
                  <div className="field textarea">
                    <input
                      type="text"
                      name="textarea"
                      value={item.message}
                      placeholder="Message..."
                      onChange={inputChange}
                    />
                  </div>
                </div>
                <button type="submit">Send Message </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
