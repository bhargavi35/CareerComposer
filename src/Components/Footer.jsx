import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="containers py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">
              © 2023 Developed with love by Bhargavi. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-end icons">
            <a
              href="https://github.com/bhargavi35"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhargavichella/"
              target="_blank"
              rel="noreferrer"
              className="text-light"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
          <p className="b">CareerComposer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
