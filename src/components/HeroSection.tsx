import React from 'react'

import messenger from '../assets/Hero/messenger.png';
import document from '../assets/Hero/document.png';
import newTabArrow from '../assets/Hero/arrow-up-right.png'

/* Skills Images */
import nodejs from '../assets/Hero/nodejs-icon.png';
import tailwind from '../assets/Hero/tailwind-icon.png';
import mongodb from '../assets/Hero/mongodb-icon.png';
import react from '../assets/Hero/react-icon.png';
import services from '../static data/Services';

function HeroSection() {

  return (
    <div>
       <section>
        <h1>EMPOWERING BUSINESSES,<br />CREATIVITY MEETS FUNCTIONALITY</h1>
        <div>
          <div>
             <img src={nodejs} alt="" />
             <img src={tailwind} alt="" />
             <img src={mongodb} alt="" />
             <img src={react} alt="" />
          </div>

          <p>+10 skills</p>
        </div>

        <p>I specialize in building clean, responsive, and user-friendly websites. I’m constantly learning and evolving, currently diving into TypeScript to level up my skills. Let’s create something amazing together!</p>

        <div>
          <button>
            <img src={messenger} alt="" />
            <span>Message</span>
          </button>

          <button>
            <img src={document} alt='' />
            <span>View Resume</span>
          </button>
        </div>
       </section>


       <section>
          {
            services.map((data, index) => {
              return <ServiceBox data={data} key={index} />
            })
          }
       </section> 
    </div>
  )
}

const ServiceBox = ({data}: { data: { imgSrc: string; category: string} }) => {

  const { imgSrc, category } = data;

  return (
    <div>
      <img src={imgSrc} alt="" />

      <div>
        <h3>{category}</h3>
      </div>
      
      <div><img src={newTabArrow} alt="" /></div>
    </div>
  )
}

export default HeroSection