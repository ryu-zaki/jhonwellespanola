import React from 'react'
import SectionTitle from './SectionTitle'
import { CertData, FlexDirection } from '../static data/Certificates'
import certificatesData from '../static data/Certificates'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function Certificates() {
  
  
    return (
    <div className='w-full'>
        <SectionTitle 
        description=''
        category='My Achivements'
        title='Certifications' />

        
        <div className='flex flex-col gap-10 mt-10 sm:gap-20 md:w-full xl:mt-24'>
          {
            certificatesData.map(({ img, scope, description, direction }, index) => {
                return <CertificateBox 
                key={index}
                direction={direction}
                img={img} 
                description={description}  
                scope={scope}
                />
            })
          }
        </div>
    </div>
  )
}

const CertificateBox: React.FC<CertData> = ({ img, description, scope, direction }) => {
  
    const certRef = React.useRef(null);
  
    useGSAP(() => {

     const tl = gsap.timeline({ defaults: { opacity: 0 } });
     tl.from('.img', {
       translateY: "7em"
     })
     .from('.details', {
      translateX: "-2em",
      stagger: .2
    }, '-=.4')

     ScrollTrigger.create({
      animation: tl,
      trigger: certRef.current,
      start: "top center"
     })

    }, { scope: certRef })

    return (
        <div ref={certRef} className={`${(direction === FlexDirection.Normal) ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col gap-10  md:w-full md:items-center md:gap-5 lg:gap-10`}>
          <img className='rounded-xl img border border-dark sm:w-[550px] sm:mx-auto md:mx-0 md:w-[43%] lg:w-[25em] xl:w-[30em] 2xl:w-[33em]' src={img} alt="" />

          <div className='text-sm xs:text-base  lg:text-base xl:text-lg 2xl:text-[1.4em]'>
          
            {description}

           <div className='details shadow-2xs mt-10 bg-white shadow-light p-5 rounded-lg space-y-5 sm:p-8 md:mt-5 xl:p-10 xl:mt-14'>
           {
                scope.map(({title, subDescription}, index) => {
                    return <div className='bg-white' key={index}>
                        <h3 className='poppins-semibold mb-2'>{title}</h3>
                        
                        <p className='relative pl-5 flex items-center before:absolute before:w-2 before:aspect-square before:bg-violet-dark before:rounded-full before:left-0'>{subDescription}</p>
                    </div>

                })
            }
           </div>
            
          </div>
        </div>
    )
}

export default Certificates