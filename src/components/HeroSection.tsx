
import messenger from '../assets/Hero/messenger.png';
import document from '../assets/Hero/document.png';
import newTabArrow from '../assets/Hero/arrow-up-right.png'

/* Skills Images */
import nodejs from '../assets/Hero/nodejs-icon.png';
import tailwind from '../assets/Hero/tailwind-icon.png';
import mongodb from '../assets/Hero/mongodb-icon.png';
import react from '../assets/Hero/react-icon.png';
import services from '../static data/Services';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTheme } from './ThemeContext';
function HeroSection() {

 useGSAP(() => {
  
  const tl = gsap.timeline({ defaults: { opacity: 0 } });

  tl
  .from('.hero-details', { stagger: .2, translateX: "-50px" })
  .from('.hero-btns', { stagger: .2, translateY: "1em" }, '-=.2')
  .from('.services', { translateY: '100px', stagger: .2 }, '-=.2')
  .from('.service-label', { translateX: "-50px", stagger: .2 }, '-=1')
  .from('.service-label--line', { scaleX: 0, stagger: .2 }, '-=.8')

 })

 const { highlightClr, theme } = useTheme();

  return (
    <div className='mt-10 flex flex-col gap-10 lg:mt-0 2xl:mt-7'>
       <section className={`flex flex-col relative gap-5 md:border ${theme === "Dark" ? "md:border-gray" : "md:border-[#222]"} md:rounded-xl md:p-10 lg:gap-8 lg:rounded-2xl xl:gap-5 xl:p-12 2xl:p-16`}>
      
        <h1 className='hero-details text-[1.3em] poppins-bold xs:text-[1.7em] lg:text-[2.2em] lg:leading-9 xl:text-[2.5em] xl:leading-[1.2em] 2xl:text-[2.8em]'>EMPOWERING BUSINESSES,<br />CREATIVITY MEETS FUNCTIONALITY</h1>
        <div className='hero-details flex gap-2 2xl:gap-8 2xl:items-center 2xl:mt-3'>
          <div className='flex gap-2 2xl:gap-4'>
             <img className='w-6 2xl:w-8' src={nodejs} alt="" />
             <img className='w-6 2xl:w-8' src={tailwind} alt="" />
             <img className='w-6 2xl:w-8' src={mongodb} alt="" />
             <img className='w-6 2xl:w-8' src={react} alt="" />
          </div>

          <p className={`${highlightClr} poppins-semibold 2xl:text-xl`}>+10 skills</p>
        </div>

        <p className='text-sm leading-7 hero-details xs:text-base xl:mt-5 xl:text-lg xl:leading-8 2xl:text-[1.4em] 2xl:leading-[1.8em]'>I specialize in building clean, responsive, and <span className={`${highlightClr} poppins-semibold`}>scalable web applications</span>, both on the frontend and backend. I’m always expanding my skill set, currently diving into advanced JavaScript frameworks to enhance my development workflow. Let’s collaborate and create something amazing together!</p>

        <div className='flex gap-4 text-sm xs:mt-3 xs:gap-6 2xl:text-lg 2xl:gap-8'>
          <button className={'hero-btns flex p-3 px-4 cursor-pointer rounded-md items-center gap-2 bg-violet-dark text-white xs:px-6 xl:gap-3 2xl:px-8'}>
            <img className='w-4 xl:w-5 2xl:w-6' src={messenger} alt="" />
            <span>Message</span>
          </button>

          <button className={`hero-btns flex overflow-hidden pr-5 p-3 px-4 ${theme === "Dark" ? "bg-[#444]" : "bg-white"}  rounded-md cursor-pointer items-center shadow-light gap-2 relative before:absolute before:right-0 before:w-[7px] before:h-full before:bg-violet-dark xs:px-6 xl:gap-3 2xl:px-8 2xl:py-4`}>
            <img className='w-4 xl:w-5 2xl:w-6' src={document} alt='' />
            <span>View Resume</span>
          </button>
        </div>
       </section>


       <section className='grid grid-cols-2 gap-3 md:grid-cols-4'>
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
  
  const splitWord = category.split(" ");

  return (
    <div className='relative services overflow-hidden rounded-lg lg:rounded-xl'>
      <img src={imgSrc} alt="" />
       
       <div className="absolute justify-between text-white text-sm p-3 flex flex-col inset-0 bg-dark-overlay xs:p-5 md:p-4 lg:p-5 lg:px-7 2xl:p-10">
         <div className='relative'>
            <h3 className='service-label xs:text-[1.2em] md:text-[1em] lg:text-[1.4em] 2xl:text-[1.8em]'>
              
              {
                splitWord.map((word, index) => {
                  return index === splitWord.length - 1 ? <span key={index}><br/>{word}</span> : <span key={index}>{word}</span>
                })
              }
            </h3>
            <div className='origin-left service-label--line absolute bg-violet-light -bottom-2 w-1/2 h-[1px] max-w-[2em] md:max-w-[5em] md:h-[3px]'></div>
         </div>
      
         <div className='self-end bg-white p-2 rounded-full xs:p-3 xl:cursor-pointer 2xl:p-5'><img draggable={false} className='w-3 select-none md:w-3' src={newTabArrow} alt="" /></div>
       </div>
     
    </div>
  )
}

export default HeroSection