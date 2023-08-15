import React from 'react'
import "./About.scss"
import { useInView } from 'react-intersection-observer'


function About() {


  const {ref:html, inView:element1} = useInView()
  const {ref:css, inView:element2} = useInView()
  const {ref:java, inView:element3} = useInView()
  const {ref:react, inView:element4} = useInView()
  const {ref:photoshop, inView:element5} = useInView()
  const {ref:github, inView:element6} = useInView()
  const {ref:abouttext, inView:element7} = useInView()
  return (
    <div className='About'> 
      <h1 className='techonol'>Technologies</h1>
      <div className="reating_box">
        <div className="reating_about">
          <span>
            <h4>Html</h4>
            <p>Advanced</p>
          </span>
          <div className="reating_resalte">
      
            <div className={element1?"reting_in_Show":"reting_in"} ref={html}></div>
          </div>
        </div>

        <div className="reating_about2">
          <span>
            <h4>CSS, Sass & Bootstrap</h4>
            <p>Advanced</p>
          </span>
          <div className="reating_resalte2">
            <div className={element2?"reting_in2_Show":"reting_in2"} ref={css}></div>
          </div>
        </div>
        <div className="reating_about3">
          <span>
            <h4>JavaScript, JQuery</h4>
            <p>Advanced</p>
          </span>
          <div className="reating_resalte3">
            <div className={element3?"reting_in3_Show":"reting_in3"} ref={java}></div>
          </div>
        </div>
        <div className="reating_about4">
          <span>
            <h4>React</h4>
            <p>Regular</p>
          </span>
          <div className="reating_resalte4">
            <div className={element4?"reting_in4_Show":"reting_in4"} ref={react}></div>
          </div>
        </div>
        <div className="reating_about5">
          <span>
            <h4>UI design in Photoshop</h4>
            <p>Regular</p>
          </span>
          <div className="reating_resalte5">
            <div className={element5?"reting_in5_Show":"reting_in5"} ref={photoshop}></div>
          </div>
        </div>
        <div className="reating_about6">
          <span>
            <h4>GitHub</h4>
            <p>Beginner</p>
          </span>
          <div className="reating_resalte6">
            <div className={element6?"reting_in6_Show":"reting_in6"} ref={github}></div>
          </div>
        </div>

      </div>
      
      <h3 className='text_about'>Additional technologies and skills</h3>
      <div className="about_reating">
          <ul>
            <li className={element7?"abouttext":"" } ref={abouttext}>Git</li>
            <li className={element7?"abouttext2":"" } ref={abouttext}>Quick learning</li>
            <li className={element7?"abouttext3":"" } ref={abouttext}>RWD</li>
          </ul>
          <ul>
            <li className={element7?"abouttext":"" } ref={abouttext}>Wordpress</li>
            <li className={element7?"abouttext2":"" } ref={abouttext}>Engagement</li>
   
          </ul>
          <ul>
            <li className={element7?"abouttext":"" } ref={abouttext}>Teamwork</li>
            <li className={element7?"abouttext2":"" } ref={abouttext}>B2 english</li>
          </ul>
      </div>
    </div>
  )
}

export default About