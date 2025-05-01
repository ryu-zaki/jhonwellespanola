import React from 'react'
import SectionTitle from './SectionTitle'
import newWindowIcon from '../assets/Projects/arrow-up-right-from-square.png';
import Projects, { ProjectType } from '../static data/Projects'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
const RecentProject = () => {
  gsap.registerPlugin(ScrollTrigger)
  const recentProjs = React.useRef<HTMLDivElement | null>(null)

    useGSAP(() => {

      const tl = gsap.timeline();

      tl.from('.project-bg', { stagger: .2, duration: .9 ,translateY: "15em", opacity: 0 })

      ScrollTrigger.create({
        animation: tl,  
        trigger: '.proj-section',
        start: 'top center',
      })
    
    }, { scope:  recentProjs})

    return <div ref={recentProjs}>
        <SectionTitle 
          category='Highlights'
          title='Recent Project'
          description=''
        />

        <div className='proj-section grid gap-5 mt-10 justify-center xs:grid-cols-2 xs:gap-2 lg:gap-5 lg:mt-14 xl:mt-20 xl:gap-10'>
          {
            Projects.map((data, index) => {
                return <ProjectBox 
                  imgProj={data.imgProj} 
                  category={data.category} 
                  title={data.title}
                  url={data.url} 
                  key={index} 
                  />
            })
          }
        </div>
    </div>

}

const ProjectBox:React.FC<ProjectType> = ({imgProj, category, title, url}) => {
    
    const  handleVisitLink = () => {
        window.open(url, "_blank");
        console.log(url);
    }

    return (
        <div className={`relative flex bg-linear-[90deg,#222_55%,#aaa]  justify-center items-center before:absolute before:bg-darker-overlay before:inset-0 overflow-hidden rounded-lg max-w-[20em] xs:max-w-full group lg:before:bg-transparent hover:lg:before:bg-dark-overlay hover:lg:before:bg-linear-[0deg,#7B11CD_.2%,transparent_85%] lg:before:duration-500 lg:before:transition-all lg:before:z-10`}>

            <div className='absolute z-10 top-4 left-3 right-3 flex justify-between items-center lg:right-4 lg:left-4 lg:top-5 2xl:top-8 2xl:left-6 2xl:right-6'>
                <p className='text-dark transition-all duration-500 delay-[100ms] bg-white rounded-full py-1 poppins-semibold px-3 text-[.6em] lg:text-[.8em] lg:translate-y-[50px] lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 2xl:text-[1em]'>{category}</p>
                
                <div className='w-5 relative lg:cursor-pointer 2xl:w-8'>
                  <div onClick={handleVisitLink} className='peer absolute z-10 inset-0'></div>
                  <img className='w-full duration-500 transition-all delay-[200ms] lg:translate-y-[50px] lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100' src={newWindowIcon} alt="" />

                  <p className='absolute transition-all duration-300 delay-[100ms] top-[120%] scale-[.5] origin-right opacity-0 whitespace-nowrap right-0 text-dark bg-white rounded-full py-1 px-4 text-xs poppins-semibold peer-hover:scale-100 peer-hover:opacity-100'>{url}</p>
                </div>
                
            </div>
            
            <img className='w-full project-bg' src={imgProj} alt="" />
            
            <h3 className='poppins-semibold absolute z-10 w-fit text-white text-[1.2em] lg:text-[1.6em] lg:translate-y-[50px] transition-all duration-500 delay-[20ms] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 xl:text-[1.9em] 2xl:text-[2.3em]'>{title}</h3>
        </div> 
    )
}

export default RecentProject