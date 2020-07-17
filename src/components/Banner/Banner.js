import React from 'react';
import './Banner.css';

import Skills from '../Skills/Skills';

const Banner = () => {
  return (
    <div className='banner-wrapper'>
      <div className='banner-slug'>
        <h1>SPENCER KENEALY</h1>
        <p>Web Developer Living in Los Angeles</p>
        <Skills />
      </div>
    </div>
  );
};

export default Banner;