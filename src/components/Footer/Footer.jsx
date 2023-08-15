import React from 'react'
import "./Footer.scss"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoFigma } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';

function Footer() {

  const {ref:footer, inView:element} = useInView()
  return (
    <div className='Footer'>
        <div className={element?"wrapper__view":"wrapper"} ref={footer}>
          <div className="call_text">
            <span>
              <span>Call me:</span><br />
              <span>123-456-789</span>
            </span>
            <span>
              <span>Email:</span><br />
              <span>xxx@xyz.com</span>
            </span>
          </div>
          <div className="link_icon">
            <li><a href="#">< AiFillGithub/></a></li>
            <li><a href="#">< AiFillLinkedin /></a></li>
            <li><a href="#">< BiLogoFigma /></a></li>
          </div>
        </div>
    </div>
  )
}

export default Footer