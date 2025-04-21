import React from 'react'
import dartImg from '../assets/Goals/Dart-Img.png';
import SectionTitle from './SectionTitle';

function GoalsSection() {

  return (
    <div className='text-left flex flex-col gap-5 items-center md:flex-row md:gap-10 xl:gap-16'>
      <div className='w-fit md:hidden'>
      <SectionTitle category='Vision' title='My Goals' description="" />
      </div>

        <img className='max-w-[15em] sm:max-w-full sm:w-[20em] md:w-[18em] lg:w-[23em] xl:w-[28em] 2xl:w-[30em]' src={dartImg} alt="" />

        <div className='flex flex-col items-start'>
          <div className='hidden md:block'>
            <SectionTitle textAlignment='text-left' category='Vision' title='My Goals' description="" />      
          </div>
         
          <div className='relative flex justify-center before:absolute before:h-[2px] before:w-[8em] before:bg-dark before:-bottom-3 sm:before:w-[12em] md:justify-start md:before:w-[6em] lg:before:-bottom-5 lg:before:h-[3px] xl:before:w-[8em]'>
          <p className='text-sm text-center leading-6 xs:text-base sm:leading-7 md:text-left md:leading-8 xl:text-lg xl:leading-9 2xl:text-[1.4em] 2xl:leading-[2.2em]'>As a dedicated Web developer, my primary goal is to deliver <span className='poppins-semibold text-violet-dark'>exceptional value</span> to various businesses and corporations through my expertise. I am determined to establish an agency and community that not only offers assistance but also empowers clients to enhance their <span className='poppins-semibold text-violet-dark'>online presence</span> effectively.</p>
          </div>
          

        </div>
    </div>
  )
}

export default GoalsSection