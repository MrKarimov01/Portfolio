import "./Footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoFigma } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import React from "react";

function Footer() {
  const { ref: footer, inView: element } = useInView();
  return (
    <div className="Footer">
      <div className={element ? "wrapper__view" : "wrapper"} ref={footer}>
        <div className="call_text">
          <span>
            <span>Call me:</span>
            <br />
            <span>93-425-32-25</span>
          </span>
          <span>
            <span>Email:</span>
            <br />
            <span>
              <a href="https://mail.google.com/"> xxx@xyz.com</a>
            </span>
          </span>
        </div>
        <div className="link_icon">
          <li>
            <a href="https://github.com/MrKarimov01/">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogoFigma />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
