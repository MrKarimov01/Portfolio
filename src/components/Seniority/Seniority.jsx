import React,{ useState } from "react";
import "./Seniority.scss";

function Seniority() {
  const [color1, setColor1] = useState(false)
  const [color2, setColor2] = useState(false)
  const [color3, setColor3] = useState(false)
  const [color4, setColor4] = useState(false)
  return (
    <div className="seniority">
      <h1 className="Aboutme_text">About me</h1>
      <div className="history__about">
        <div className="year__history">
          <div className="num_year">
            <span className={color1?"sen_color":""}>2020</span>
            <span className={color2?"sen_color":""}>2021</span>
            <span className={color3?"sen_color":""}>2022</span>
            <span className={color4?"sen_color":""}>2023</span>
          </div>
          <div className="line_year">
            <div className="box_year">
            <div className={color1?"in__box sen_bgcolor":"in__box"}
             onMouseEnter={() => setColor1(true)}
             onMouseLeave={() => setColor1(false)}></div>
            </div>
            
            <div className="box_year">
              <div className={color2?"in__box sen_bgcolor":"in__box"}
              onMouseEnter={() => setColor2(true)}
              onMouseLeave={() => setColor2(false)}></div>
            </div>
            <div className="box_year">
              <div className={color3?"in__box sen_bgcolor":"in__box"}
              onMouseEnter={() => setColor3(true)}
              onMouseLeave={() => setColor3(false)}></div>
            </div>
            <div className="box_year">
              <div className={color4?"in__box sen_bgcolor":"in__box"}
              onMouseEnter={() => setColor4(true)}
              onMouseLeave={() => setColor4(false)}></div>
            </div>
            
            <i>
              <div></div>
            </i>
          </div>
        </div>
        <div className="texts__history">
          <span className={color1?"sen_color":""}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <span  className={color2?"sen_color":""}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <span  className={color3?"sen_color":""}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <span  className={color4?"sen_color":""}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Seniority;
