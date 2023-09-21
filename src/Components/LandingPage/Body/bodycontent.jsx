import React from 'react'
import './bodycontent.css'
import { BsStars } from "react-icons/bs";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RiContactsFill,RiHandCoinFill } from "react-icons/ri";

const Bodycontent = () => {
  return (
    <div className="header-cont">
      <div className="body-sub-cont">
        
        <div className="body-heading">
        
          <h1 className='body-header'>What we offer?</h1>
        </div>
        <div className="features-cont">
          
          <div className="feature-subcont">
            <FaLocationCrosshairs className='body-icons'/>
            <h2>Real-time <br /> Tracking</h2>
            <p>Precise live location tracking of currently running buses using GPS module.</p>
          </div>

          <div className="feature-subcont">
            <RiContactsFill className='body-icons'/>
            <h2>Emergency Contacts</h2>
            <p>User can report any miss-behaviour by any other person.</p>
          </div>
          
          <div className="feature-subcont">
            <RiHandCoinFill className='body-icons'/> 
            <h2>Accessibilty Features</h2>
            <p>Speech-to-text <br/>&<br /> Talk-back</p>
          </div>

          <div className="feature-subcont">
            <BsStars className='body-icons'/> 
            <h2>User-Friendly Interface</h2>
            <p>User can switch between interface of our clean linear mapview and 3-D mapview.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Bodycontent