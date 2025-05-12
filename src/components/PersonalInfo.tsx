import React from 'react'
import SectionTitle from './SectionTitle'
import personalImage from '../assets/Personal Info/personal-img-700.jpg'
import SkillSet from '../static data/SkillSet'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function PersonalInfo() {
  
  const personalInfoRef = React.useRef(null);

  useGSAP(() => {
  
    const mm = gsap.matchMedia();

    mm.add({ desktop: "(min-width: 640px)", mobile: "(max-width: 639px)" }, (context) => {
     const {conditions} = context;
    
      const tl = gsap.timeline({ defaults: { opacity: 0 } });
      if (!conditions?.desktop) {
         tl.from('.mobile-personal-img', { translateY: "2em" })
         .from('.mobile-personal-category', { translateY: "2em" }, '-=.2')
      } else {
        tl.from('.desktop-personal-img', { duration: .6, scale: .2 })
      }

      tl.from('.personal-texts', { translateX: "-30px", stagger: .15 }, '-=.3')
      

      ScrollTrigger.create({
        animation: tl,
        trigger: personalInfoRef.current,
        start: 'top center'
      })
      
    } )
    
  }, { scope: personalInfoRef})

  return (
    <div ref={personalInfoRef}>
      <SectionTitle 
        title='Personal Information'
        category='About Me'
        description=''
      />


      <div className='mt-10 flex flex-col md:flex-row md:items-cendter md:mt-5 lg:gap-10 lg:mt-14 2xl:gap-14'>
        <div className='w-full mobile-personal-img origin-bottom desktop-personal-img overflow-hidden rounded-xl aspect-[11/8] relative xs:w-11/12 mx-auto xs:max-w-[550px] sm:hidden lg:block lg:max-w-full lg:min-w-[23em] lg:aspect-[11/10] 2xl:min-w-[28em]'>
         
          <img className='w-full h-full object-cover' src={personalImage} alt="" />
          <p className='absolute bottom-5 mobile-personal-category text-white text-sm left-5 md:hidden'>Freelancer | Full-Stack Web Developer</p>
        </div>

        <div className='flex flex-col gap-5 mt-5 leading-7 sm:gap-10 lg:gap-5 lg:mt-0 xl:text-lg xl:leading-8'>
          <div className='sm:flex gap-5'>
            <img className='hidden origin-bottom desktop-personal-img w-full h-full object-cover rounded-xl sm:w-[15em] sm:block lg:hidden' src={personalImage} alt="" />
            <div className='md:mt-4 lg:mt-0'>
              <h3 className='hidden personal-texts text-violet-dark font-semibold sm:inline-block lg:text-lg xl:text-xl 2xl:text-[1.3em]'>Freelancer | Full-Stack Web Developer</h3>
              <p className='mt-2 personal-texts 2xl:text-[1.2em] 2xl:leading-[1.8em] 2xl:mt-4'>I am a skilled web developer with rich understanding and experience in ReactJS, NodeJS, ExpressJS, and MongoDB. I seek opportunities that I can provide the value of my services and deliver an <span className='text-violet-dark font-semibold'>efficient and sustainable</span> websites that can help your business grow in our digital world.</p>
            </div>
          </div>
          
          <p className='personal-texts 2xl:text-[1.2em] 2xl:leading-[1.8em]'>You can trust me in building and creating websites that are not only proficient its functionality but also <span className='text-violet-dark font-semibold'>visually appealing</span> and has the ability to hook interest of your customers. Providing all skills I have, I possess an enough skills to develop an Application that can reach my client's standards and expectations.</p>
        </div>
      </div>

      <SkillsSection />

    </div>
  )
}

const SkillsSection = () => {
  
  const [largeImgClass, setLargeImgClass] = React.useState<string>('/src/assets/Personal%20Info/Skills/Large/javascript-icon.png');
  const skilsRef = React.useRef(null);

  const handleChangeBg = (imgLarge: string) => {
    setLargeImgClass(imgLarge)
  }

  useGSAP(() => {
  
    gsap.fromTo('.large-img', {
      scale: .6, opacity: 0, 
    }, { scale: 1, opacity: .75 })

  }, { scope: skilsRef, dependencies: [largeImgClass] })

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" }, (context) => {
       const {conditions} = context;
       const tl = gsap.timeline( { defaults: { opacity: 0 } } );
       
       if (conditions?.desktop) {
         tl.from(".title", { translateX: "-2em" })
         .from('.line', { scaleX: 0, opacity: 1, duration: .8 }, '-=.4')
         .from('.pulsing-ball', { scale: .2 })

       } else {
         tl.from(".title", { translateY: "2em" })
       }

       tl.from('.category-title', { translateX: "-2em", stagger: .2 }, '-=.2')
         .from(".skills", { translateX: "-2em", stagger: .1 }, '-=.4')
         .from('.large-img-con', { scale: .2, opacity: 0 }, '-=.4')

      
    ScrollTrigger.create({
      animation: tl,
      start: "top center",
      trigger: skilsRef.current
    })
    })
    

  }, { scope: skilsRef })


  return (
    <div ref={skilsRef} className='mt-10 xl:mt-16'>
      <div className='relative flex w-full items-center'>
         <h2 className='text-center title w-full font-semibold text-xl relative sm:text-2xl md:text-left md:bg-white md:w-fit md:pr-5 xl:text-3xl 2xl:text-4xl'>My Skills</h2>
         <div className="hidden line origin-left absolute -z-10 left-0 bg-[#ccc] h-[2px] w-full md:block lg:w-[97%]"></div>

         {/* Pulsing Ball */}
         <div className='hidden aspect-square pulsing-ball justify-center items-center bg-violet-dark w-[1.5em] rounded-full z-10 absolute right-0 md:flex 2xl:w-[2em]'></div>
      </div>
      

      <div className='shadow-light overflow-hidden relative flex flex-col gap-7 mt-5 p-5 rounded-xl pb-32 sm:p-10 sm:pb-32 md:pb-10 lg:pr-[18em] lg:gap-10 lg:pb-24 xl:mt-10 xl:gap-12 xl:p-12 xl:pb-28 2xl:p-16 2xl:pb-28'>
         <div className='large-img-con absolute w-42 bottom-3 right-3 aspect-square sm:w-52 sm:bottom-5 sm:right-5 lg:w-[20em] lg:bottom-14 lg:right-10 xl:w-[25em]'>
 <img className='bg-center object-cover large-img w-full h-full' src={largeImgClass} alt="" />
         </div>
        
        

        {
          SkillSet.map(({category, skills}, index) => {
            return (
              <div key={index} className='z-10'>
                <h3 className="font-semibold category-title lg:text-lg xl:text-xl 2xl:text-[1.4em]">{category}</h3>
                <div className='flex gap-2 flex-wrap mt-5 gap-y-3 text-sm sm:gap-x-4 sm:gap-y-5 lg:text-base lg:cursor-pointer 2xl:mt-8 2xl:gap-x-6'>
                 {
                  skills.map(({name, imgIcon, imgLarge}, index) => {
                    return <div onMouseOver={() => handleChangeBg(imgLarge)} onClick={() => handleChangeBg(imgLarge)} key={index} className={`flex skills items-center gap-2 border border-[#ccc] bg-white w-fit px-4 py-1 rounded-md lg:py-2 lg:px-6 lg:hover:${largeImgClass} 2xl:text-[1.2em] 2xl:py-4 2xl:px-8`}>
                      <img className='w-8' src={imgIcon} alt="" />
                      <p>{name}</p>
                    </div>
                  })
                }
                </div>
               
              </div>
            )
          })
        }
        
        {/* Bottom Border */}
        <div className='bg-violet-light h-2 w-full absolute bottom-0 right-0 lg:h-3 2xl:h-4'></div>
      </div>
    </div>
  )
}

export default PersonalInfo