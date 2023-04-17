import React from 'react';

import image1 from "../../img/rImage1.png"
import image2 from "../../img/rImage2.png"
import image3 from "../../img/rImage3.png"
import image4 from "../../img/rImage4.png"

const Reasons = () => {
  return (
    <div className='reasons' id='Reasons'>
        <div className='left-r'>
            <img src={image1}></img>
            <img src={image2}></img>
            <img src={image3}></img>
            <img src={image4}></img>
        </div>
        <div className='right-r'></div>
    </div>
  )
}

export default Reasons;