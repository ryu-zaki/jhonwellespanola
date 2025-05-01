import SectionTitle from './SectionTitle'
import personalImg from '../assets/Personal Info/personal-img.jpg';
import personalImgDesktop from '../assets/Personal Info/personal-img-700.jpg';
import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function PersonalInfo() {
  
  const personalSection = React.useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline( { defaults: { opacity: 0, stagger: .2 } } );

    tl.from(".personal_text", {
      translateX: "-50px"
    })
    .from('.personal_scale', {
      scale: .38 
    }, '-=.2')
    .from('.desc-bar', { translateY: '4em' }, '-=.4')

    ScrollTrigger.create({
      animation: tl,
      trigger: personalSection.current,
      start: 'top center',
    })

  }, {  scope: personalSection})

  return (
    <div ref={personalSection} className='flex flex-col gap-8 md:gap-0'>
      <div className="md:flex md:gap-16 items-center lg:items-start lg:gap-20 xl:gap-32 2xl:gap-36">
      <div>
        <div className='flex text-left justify-between items-center sm:justify-start sm:gap-10'>
        <div className="personal_text">
        <SectionTitle
          title='Personal Information' 
          category='Who am I?'
          description='' 
          textAlignment='text-left'
        />

        </div>
        
        <img className='w-[60px] rounded-full xs:w-[70px] md:hidden' src={personalImg} alt="" />
        </div>
        
        <div className="mt-5 text-sm relative leading-6 pb-5 xs:text-base xs:leading-7 md:flex md:justify-between md:gap-20 md:items-center lg:items-start md:mt-2 lg:leading-8 xl:text-lg xl:leading-9  2xl:text-[1.4em] 2xl:leading-[1.8em] 2xl:pb-10">
            <p className='personal_text'>I am a skilled Full-stack Web Developer with rich understanding and exprience in React.js, Node.js, Express.js, and MongoDB. I seek opportunities that i can provide the value of my services and deliver an <span className='text-violet-dark poppins-semibold'>efficient and sustainable websites</span> that can help your business grow in our digital world.</p>
          <div className='absolute personal_scale origin-left bottom-0 w-[6em] h-[3px] bg-dark'></div>
        </div>
        </div>

        <img className='personal_scale origin-center hidden md:block md:rounded-lg md:min-w-[15em] lg:min-w-[17em] xl:min-w-[22em]' src={personalImgDesktop} alt="" />
      </div>
        <div className='relative desc-bar leading-6 before:absolute before:w-[10px] before:aspect-square before:bg-violet-dark before:rounded-full before:right-3 before:top-3 shadow-light shadow-2xl p-5 rounded-xl text-sm xs:text-base xs:leading-7 xs:p-6 md:mt-16 md:before:top-4 md:before:right-4 md:before:w-[13px] lg:p-8 lg:leading-8 xl:text-lg xl:leading-9  2xl:text-[1.4em] 2xl:leading-[2em] 2xl:p-14'>
            <p>You can trust me in building and creating websites that are not only proficient in its functionality but also <span className='text-violet-dark poppins-semibold'>visually appealing</span> and has the ability to hook the interest of your customers. Providing all skills I have, I possess an enough skills to develop an Application that can reach my clients' standards and expectations.</p>
        </div>
        
    </div>
  )
}

export default PersonalInfo