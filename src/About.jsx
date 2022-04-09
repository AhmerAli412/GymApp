import React from 'react'
import aboutimage from './images/about.png'

function About() {
  return (
    <div id='about'>
      <div className='about-image'> 
        <img src={aboutimage} alt=''/>
      </div>
      <div className='about-text'>
          <h1>LEARN MORE ABOUT US</h1>
          <p>hhjj jkuju vhuu vyf gcgh cg er jhvjh ghcvgh cghcvh jhvf hhjj jkuju vhuu vyf gcgh cg er jhvjh ghcvgh cghcvh jhvf hhjj jkuju vhuu vyf gcgh cg er jhvjh ghcvgh cghcvh jhvf</p>
          <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
