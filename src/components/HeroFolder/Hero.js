// Hero.jsx

import React from "react";
import me from '../../assets/img/photo.png';
import "./Hero.css";

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className="card-container">
        <div className="photo-container">
          <img className="photo-class" src={me} alt="" />
        </div>
        <div className="text-container">
          <div className="text-title">
            <h1 className="my-name" style={{textShadow: '2px 2px black'}}>Chandrashekhar J.</h1>
            <br />
            <h5 className="para-me" style={{color: 'gainsboro'}}>
              Hi! I'm Chandrashekhar Jenamoni. People call me Shekhar. <br /> I read, I write, I code, and I tell bad jokes that only I laugh at.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
