import logoLight from '../assets/UpperNav/logo-light.png';
import logoDark from '../assets/UpperNav/logo-dark.png';
import logoDarkLG from '../assets/UpperNav/logo-dark-large.png';
import logoLightLG from '../assets/UpperNav/logo-light-large.png';

import crossLight from '../assets/UpperNav/cross-light.png';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import type { Navigation } from '../static data/Navigations';

/* darkmode Images */
import moonActive from '../assets/UpperNav/moon-active.png';
import moonInactive from '../assets/UpperNav/moon-inactive.png';
import sunActive from '../assets/UpperNav/sun-active.png';
import sunInactive from '../assets/UpperNav/sun-inactive.png';
import upperNavigations from '../static data/Navigations';
import { useTheme } from './ThemeContext';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { scroller, Link } from 'react-scroll'

export const handleSocMed = (Link: string) => {
      window.open(Link, "_blank")
    }

function UpperNavigation() {
    
    const [sidenavVisible, setSidenavVisible] = React.useState(false);
    const [navFixed, setNavFixed] = React.useState(false);
    const navbarContainer = React.useRef(null);
    const {theme, toggleTheme, highlightClr } = useTheme();
  
   

    React.useEffect(() => {
     
     if (!navbarContainer.current) return;

     const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
            setNavFixed(!entry.isIntersecting)
       })
     });

     observer.observe(navbarContainer.current);

    }, []);
    
    return (
    <>
    <div ref={navbarContainer} className='lg:h-24'>
    <div className={`pr-3 ${navFixed ? `fixed navbar_animate left-0 top-0 right-0 ${theme === "Dark" ? "bg-[#222]" : "bg-white"} px-2 pr-4 py-3 z-10 sm:px-8 sm:pr-10 lg:py-0` : "relative before:absolute before:bg-gray before:right-0 before:left-0 before:h-[2px] before:bottom-0 py-5 lg:py-0"} z-20 lg:before:hidden`}>
        <div className='flex justify-between items-center container mx-auto lg:hidden'>
           <div className='flex items-center gap-2'>
               <img className='w-7' src={theme === "Dark" ? logoDark : logoLight} alt="" />
               <h2 className='font-bold poppins-semibold text-sm'>Jhonwell <span className={`${highlightClr} poppins-semibold`}>Espanola</span></h2>
           </div>
   
           <div className='w-6 flex flex-col gap-1 relative xs:w-7'>
               <div className={`h-[2px] ${theme === "Dark" ? "bg-white" : "bg-dark"} bg-dark w-full`}></div>
               <div className={`h-[2px] ${theme === "Dark" ? "bg-white" : "bg-dark"} bg-dark w-full`}></div>
               <div className={`h-[2px] ${theme === "Dark" ? "bg-white" : "bg-dark"} bg-dark w-1/2`}></div>
               <div onClick={() => setSidenavVisible(true)} className="absolute inset-0"></div>
           </div>
        </div>
       

        <NavigationBar 
          setSidenavVisible={setSidenavVisible}
          data={{
          navFixed,
          theme,
          toggleTheme, 
          sidenavVisible,
          visibility: "hidden lg:flex"
          }
          }
           
        />

    </div>

    {/* Additional Info */}
    {
      navFixed && (
      <div className={`additionalNav navbar_animate opacity-0 fixed px-2 z-20 text-white top-[3.2em] left-0 right-0 translate-y-0 bg-violet-darker lg:top-[2.6em] xl:top-[3.2em]`}>
        <div className='flex text-sm py-2 justify-between items-center container mx-auto lg:py-1 2xl:text-[1.4em]'>
           <div className="w-full flex items-center gap-5">
               <div className='flex items-center gap-2 relative group'>
                 <FontAwesomeIcon icon={faLinkedin} />
                 <p className='absolute origin-top-left transition-all scale-0 bg-white text-dark text-sm top-[130%] rounded-lg p-2 whitespace-nowrap group-hover:scale-100 lg:static lg:inset-auto lg:scale-100 lg:bg-transparent lg:text-white lg:text-xs 2xl:text-[.6em]'>Jhonwell Española</p>
               </div>

               <div className='flex relative items-center gap-2'>
                 <FontAwesomeIcon icon={faPhone} />
                 <p className='absolute origin-top-left transition-all scale-0 bg-white text-dark text-sm top-[130%] rounded-lg p-2 whitespace-nowrap group-hover:scale-100 lg:static lg:inset-auto lg:scale-100 lg:bg-transparent lg:text-white lg:text-xs 2xl:text-[.6em]'>09460474507</p>
               </div>
           </div>

           <div className='flex gap-4 items-center 2xl:gap-7'>
              <FontAwesomeIcon className='cursor-pointer' onClick={() => handleSocMed("https://www.facebook.com/jhonwell.espanola")} icon={faFacebook} />
              <FontAwesomeIcon className='cursor-pointer' onClick={() => handleSocMed("https://www.instagram.com/jqnwel/")} icon={faInstagram} />
              <FontAwesomeIcon className='cursor-pointer' onClick={() => handleSocMed("https://github.com/ryu-zaki")} icon={faGithub} />
           </div>
        </div>
        </div>
      )
    }
    
    </div>
   
     
     {
        sidenavVisible && <div onClick={() => setSidenavVisible(false)} className={`z-20 fixed inset-0 ${theme === "Dark" ? "bg-darker-overlay" :"bg-dark-overlay"} lg:hidden`}>
        <img onClick={() => setSidenavVisible(false)} draggable={false} className='absolute select-none w-4 right-4 top-4' src={crossLight} alt="" />
     </div>
     }
     
     <NavigationBar 
     setSidenavVisible={setSidenavVisible}
     data={{
          navFixed,
          theme,
          toggleTheme, 
          sidenavVisible,
          visibility: "flex lg:hidden"
          }
          }
      />
     
    </>
    )
}


const NavigationBtn:React.FC<{ setSidenavVisible: React.Dispatch<React.SetStateAction<boolean>>, data: Navigation, navFixed: boolean  }> = ({data, navFixed, setSidenavVisible}) => {
    const {imgSrc, category, routeID, darkImg} = data;
    const { theme } = useTheme();
    const handleSlidePage = () => {
      setSidenavVisible(false)
     scroller.scrollTo(routeID, { offset: -150, smooth: 'eastOut', delay: 0 } );
     
    }

    return (
        <div className='nav-btn group flex relative cursor-pointer items-center gap-3'>

          <Link 
            offset={-150}
            to={routeID}
            spy={true}
            activeClass="active-link"
            className="hidden"
          />

          <div onClick={handleSlidePage} className="absolute inset-0 z-10 "></div>

          <div className={`${theme} w-4 nav-icon rounded-full lg:hidden`}>
                <img src={theme === "Dark" ? darkImg : imgSrc} alt="" />
          </div>
          
          <p className={`${theme === "Dark" ? "text-white" : "text-dark"} lg:relative transition-all lg:transition-none lg:before:absolute lg:before:transition-all lg:before:duration-200 lg:before:-bottom-1 lg:before:w-full lg:before:h-[2px] lg:before:bg-violet-dark  origin-left navbtn ${navFixed ? "lg:text-[.8em] 2xl:text-[1em]" : "lg:text-[.9em] 2xl:text-[1em]"} lg:cursor-pointer`}>{category}</p>
        </div>
    )
}

interface NavigationProps {
  sidenavVisible: boolean,
  theme: string, 
  toggleTheme: () => void,
  visibility: string,
  navFixed: boolean
}

const NavigationBar: React.FC<{ data: NavigationProps, setSidenavVisible: React.Dispatch<React.SetStateAction<boolean>>,}> = ({data, setSidenavVisible}) => {
  const {sidenavVisible, theme, toggleTheme, visibility, navFixed} = data;
  const {highlightClr} = useTheme();
  

  return (
    <>
    <div className={`${!sidenavVisible && "-translate-x-full"} fixed flex justify-center h-screen items-center top-0 left-0 w-11/12 max-w-[16em] ${theme === "Dark" ? "bg-[#f4f4f4]" :'bg-dark'} bottom-0 z-20 transition-all duration-700 lg:hidden`}>
      <img className={"abssolute w-[12em]"} src={theme === "Dark" ? logoLightLG : logoDarkLG} alt="" />
    </div>
 
    <nav className={`${!sidenavVisible ? "-translate-x-full lg:-translate-x-0" : "delay-300"} ${visibility} fixed top-0 bottom-0 left-0 w-11/12 max-w-[16em] bg-white p-5 flex-col gap-10 z-20 lg:relative lg:flex-row lg:justify-between lg:container lg:w-full lg:px-0 lg:mx-auto ${navFixed ? `lg:transition-all duration-700 lg:py-2 lg:bg-transparent` : "lg:transition-none lg:bg-transparent"} overflow-hidden transition-all duration-700`}>
        
        <div className={`${theme === "Dark" ? "scale-[25]" : "scale-0"} absolute w-[9vh] left-0 aspect-square rounded-full bottom-0 -z-10 bg-[#222] transition-all duration-1000 translate-y-1/2 ease-in-out -translate-x-1/2 lg:hidden`}></div>

        <div className='flex gap-2 items-center relative before:absolute before:w-full before:h-[2px] before:bg-light-gray before:bottom-0 pb-4 lg:before:hidden lg:gap-3 lg:pb-0'>
            <img className='w-7 xl:w-9' src={ theme === "Dark" ? logoDark : logoLight} alt="" />

            <div className={`text-sm xl:text-base ${navFixed && "lg:text-xs"}`}>
                <h3 className='poppins-semibold xl:text-[1em] 2xl:text-[1.3em]'>Jhonwell <span className='poppins-semibold text-violet-dark'>Española</span></h3>
                <p className={`text-xs poppins-semibold ${theme === "Dark" ? "text-[#dd]" : "text-gray"} 2xl:text-[.95em] ${navFixed && "lg:hidden"}`}>Full-Stack Web Developer</p>
            </div>
        </div>
        
        <div className='lg:flex lg:justify-between lg:gap-16 lg:items-center 2xl:gap-24'>
            <div className='flex flex-col gap-6 relative before:absolute before:bottom-0 before:h-[2px] before:bg-light-gray before:w-full pb-12 lg:flex-row lg:pb-0 lg:before:hidden lg:gap-10'>
               
              {
                upperNavigations.map((data, index) => {
                    return <NavigationBtn
                    setSidenavVisible={setSidenavVisible}
                    navFixed={navFixed} data={data} key={index} />
                })
              }
                
            </div>

            <div className='mt-8 text-sm lg:mt-0'>
                <h3 className='poppins-semibold lg:hidden'>Display Theme</h3>

                <div className="flex gap-4 items-center mt-5 lg:mt-0">
                    <div className={ `${theme === "Dark" ? "bg-[#444]" : "bg-light-gray"} flex items-center relative rounded-full cursor-pointer w-14 aspect-[10/5] ${navFixed ? "lg:w-12 2xl:w-16" : "2xl:w-16"}`}>
                       <img draggable={false} className={`select-none absolute w-1/4 left-3 ${theme === "Light" && "opacity-0 translate-x-1/2"} transition-all duration-500 ${navFixed && "lg:left-2"}`} src={moonInactive} alt="" />
                       <img draggable={false} className={`select-none absolute w-1/4 right-3 ${theme !== "Light" && `opacity-0 -translate-x-1/2`} transition-all duration-500 ${navFixed && "lg:right-2"}`}  src={sunInactive} alt="" />
                      
                       <div className={`absolute bg-white rounded-full w-[32%] aspect-square left-[.45em] p-1 ${theme === "Dark" && `translate-x-[1.8em] 2xl:translate-x-[2.15em] ${navFixed && "lg:translate-x-[1.45em]"}`} transition-all duration-500`}><img src={theme === "Light" ? moonActive : sunActive} draggable={false} className="select-none" alt="" /></div>

                       <div onClick={toggleTheme} className='absolute inset-0 z-10'></div>
                    </div>

                    <p className={`text-xs poppins-semibold ${highlightClr} text-violet-dark lg:hidden`}>{theme} Mode</p>
                </div>
               
            </div>
            
        </div>
        
    </nav>
    </>
  )
}

export default UpperNavigation