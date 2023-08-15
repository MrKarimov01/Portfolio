import React from 'react'
import "./Seniority.scss"

function Seniority() {
  return (
    <div className='seniority' >
      
        <h1>About me</h1>
        <div className="history__about">
          <div className="year__history">
            <div className="num_year">
              <span>2020</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
            </div>
            <div className="line_year">
              <div className="box_year"><div className="in__box"></div></div>
              <div className="box_year"><div className="in__box"></div></div>
              <div className="box_year"><div className="in__box"></div></div>
              <div className="box_year"><div className="in__box"></div></div>
              <i><div></div></i>
            </div>
          </div>
          <div className="texts__history">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>
        </div>
     
    </div>
  )
}

export default Seniority