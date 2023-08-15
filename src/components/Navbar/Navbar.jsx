import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import logo from "./../../assets/images/logo.svg"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiLogoFigma } from 'react-icons/bi';
import { BsChevronBarLeft } from 'react-icons/bs';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

function Navbar() {
  const locetion = useLocation().pathname
  useEffect(()=>{
    setHam(false)
  },[locetion])
  const [background,setBackground] = useState(false)
  const [ham, setHam] = useState(false)
  const {ref:nav , inView: element1} = useInView()
  console.log(ham);
  const changeBackground = ()=>{
    if(window.scrollY >=100){
      setBackground(true)
    }
    else if(window.scrollY <=100){
      setBackground(false)
    }
  }
  window.addEventListener('scroll' ,changeBackground)
    
  return (
    
    <div className='Navbar'>
      <nav ref={nav} className={element1?"nav_show" :""}>
        <Link to={"/"} className='logo'>
          
            <img src={logo} />
            Portfolio
         
        </Link>
        <ul className='nav-bar '>
          <li><NavLink to={"projects"} className="Nav_Link">Projects</NavLink> <i></i></li>
          <li><NavLink to={"technologies"} className="Nav_Link">Technologies</NavLink> <i></i></li>
          <li><NavLink to={"aboutme"} className="Nav_Link">About me</NavLink> <i></i></li>
        </ul>
        <ul className='icon'>
          <li><a href="#">< AiFillGithub/></a></li>
          <li><a href="#">< AiFillLinkedin /></a></li>
          <li><a href="#">< BiLogoFigma /></a></li>
        </ul>
        <GiHamburgerMenu className='hamburger' onClick={()=>setHam(true)}/>
        <i className={background?"nav_line_bottom":""}></i>
      </nav>



      {/* .................................................................................. */}
      <div className={ham?"nav-phone":"nav-phone displaynone"}>
        <BsChevronBarLeft className='back_hamburger' onClick={()=>setHam(false)}/>
        <ul className='nav-bar-phone'>
            <li><NavLink to={"projects"} className="Nav_Link">Projects</NavLink> <i></i></li>
            <li><NavLink to={"technologies"} className="Nav_Link">Technologies</NavLink> <i></i></li>
            <li><NavLink to={"aboutme"} className="Nav_Link">About me</NavLink> <i></i></li>
          </ul>
          <ul className='icon-phone'>
            <li><a href="#">< AiFillGithub/></a></li>
            <li><a href="#">< AiFillLinkedin /></a></li>
            <li><a href="#">< BiLogoFigma /></a></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar