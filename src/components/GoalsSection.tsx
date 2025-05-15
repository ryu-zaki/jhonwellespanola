
import { useGSAP } from '@gsap/react';
import dartImg from '../assets/Goals/Dart-Img.png';
import SectionTitle from './SectionTitle';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react';
import { useTheme } from './ThemeContext';

function GoalsSection() {

  const goalsSecRef = React.useRef(null);
  const {highlightClr} = useTheme();
  useGSAP(() => {

    const tl = gsap.timeline({ defaults: { opacity: 0 } });
    tl.from('.img', { scale: .3 })
    .from('.text', { translateY: "4em", stagger: .2 }, '-=.4')
    .from('.line', { scaleX: 0, opacity: 1 }, '-=.2')

    ScrollTrigger.create({
      animation: tl,
      trigger: goalsSecRef.current,
      start: "top center",
    })

  }, { scope: goalsSecRef })

  return (
    <div ref={goalsSecRef} className='text-left flex flex-col gap-5 items-center md:flex-row md:gap-10 xl:gap-16'>
      <div className='w-fit text md:hidden'>
      <SectionTitle category='Vision' title='My Goals' description="" />
      </div>

        <img className='img max-w-[15em] sm:max-w-full sm:w-[20em] md:w-[18em] lg:w-[23em] xl:w-[28em] 2xl:w-[30em]' src={dartImg} alt="" />

        <div className='flex flex-col items-start'>
          <div className='text hidden md:block'>
            <SectionTitle textAlignment='text-left' category='Vision' title='My Goals' description="" />      
          </div>
         
          <div className='relative text flex justify-center  md:justify-start'>
          <p className='text-sm text-center leading-6 xs:text-base sm:leading-7 md:text-left md:leading-8 xl:text-lg xl:leading-9 2xl:text-[1.4em] 2xl:leading-[2.2em]'>As a dedicated Web developer, my primary goal is to deliver <span className={`poppins-semibold ${highlightClr}`}>exceptional value</span> to various businesses and corporations through my expertise. I am determined to establish an agency and community that not only offers assistance but also empowers clients to enhance their <span className={`poppins-semibold ${highlightClr}`}>online presence</span> effectively.</p>
          <div className='absolute line md:origin-left h-[2px] w-[8em] bg-dark -bottom-3 sm:w-[12em] md:w-[6em] lg:-bottom-5 lg:h-[3px] xl:w-[8em]'></div>
          </div>
          

        </div>
    </div>
  )
}

export default GoalsSection