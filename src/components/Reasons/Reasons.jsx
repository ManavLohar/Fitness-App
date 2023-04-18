import React from 'react';
import "./Reasons.css"



import image1 from "../../img/rImage1.png";
import image2 from "../../img/rImage2.png";
import image3 from "../../img/rImage3.png";
import image4 from "../../img/rImage4.png";
import tick from "../../img/tick.png"
import nb from "../../img/nb.png";
import adidas from "../../img/adidas.png";
import nike from "../../img/nike.png";

const Reasons = () => {
  return (
    <div className='reasons' id='Reasons'>
      <div className='left-r'>
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </div>
      <div className='right-r'>
        <span>Some reasons</span>

        <div>
          <span className='stroke-text'>Why</span>
          <span> choose us?</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={tick} />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span style={{
          color: "var(--gray)", fontWeight: "normal"
        }}>OUR PARTNERS</span>

        <div className='partners'>
          <img src={nb} />
          <img src={adidas} />
          <img src={nike} />
        </div>
      </div>
    </div >
  )
}

export default Reasons;