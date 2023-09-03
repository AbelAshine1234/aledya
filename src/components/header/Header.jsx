import "./header.css";

import React from 'react'
import bg1Icon from '../assets/bg1.jpg';

export default function header() {
  return (
    <div>
        <div className="titles">
            <span className="headerTitleBG">Leapfrog Africa</span>
            <span className="headerTitleSM">Leapfrog Africa</span>
        </div>
        <img className="bgimg" src={bg1Icon} alt="technological background" />
    </div>
  )
}
