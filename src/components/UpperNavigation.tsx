import logoLight from '../assets/UpperNav/logo-light.png';
import crossLight from '../assets/UpperNav/cross-light.png';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

/* darkmode Images */
import moonActive from '../assets/UpperNav/moon-active.png';
import moonInactive from '../assets/UpperNav/moon-inactive.png';
import sunActive from '../assets/UpperNav/sun-active.png';
import sunInactive from '../assets/UpperNav/sun-inactive.png';
import upperNavigations from '../static data/Navigations';
import { useTheme } from './ThemeContext';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


function UpperNavigation() {
    
    const [sidenavVisible, setSidenavVisible] = React.useState(false);
    const [navFixed, setNavFixed] = React.useState(false);
    const navbarContainer = React.useRef(null);
    const {theme, toggleTheme} = useTheme(); 

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
    <div className={`pr-3 ${navFixed ? "fixed navbar_animate left-0 top-0 right-0 bg-white px-2 pr-4 py-3 z-10 sm:px-8 sm:pr-10 lg:py-0" : "relative before:absolute before:bg-gray before:right-0 before:left-0 before:h-[2px] before:bottom-0 py-5 lg:py-0"} bg-white z-20 lg:before:hidden`}>
        <div className='flex justify-between items-center container mx-auto lg:hidden'>
           <div className='flex items-center gap-2'>
               <img className='w-7' src={logoLight} alt="" />
               <h2 className='font-bold poppins-semibold text-sm'>Jhonwell <span className='text-violet-dark    poppins-semibold'>Espanola</span></h2>
           </div>
   
           <div className='w-6 flex flex-col gap-1 relative xs:w-7'>
               <div className='h-[2px] bg-dark w-full'></div>
               <div className='h-[2px] bg-dark w-full'></div>
               <div className='h-[2px] bg-dark w-1/2'></div>
               <div onClick={() => setSidenavVisible(true)} className="absolute inset-0"></div>
           </div>
        </div>
       

        <NavigationBar 
          navFixed={navFixed}
          theme={theme} 
          toggleTheme={toggleTheme} 
          sidenavVisible={sidenavVisible} 
          visibility="hidden lg:flex" 
        />

    </div>

    {/* Additional Info */}
    {
      navFixed && (
      <div className={`additionalNav navbar_animate opacity-0 fixed px-2 z-10 text-white top-[3.2em] left-0 right-0 translate-y-0 bg-violet-darker lg:top-[2.6em] xl:top-[3.2em]`}>
        <div className='flex text-sm py-2 justify-between items-center container mx-auto lg:py-1'>
           <div className="w-full flex items-center gap-5">
               <div className='flex items-center gap-2 relative group'>
                 <FontAwesomeIcon icon={faLinkedin} />
                 <p className='absolute origin-top-left transition-all scale-0 bg-white text-dark text-sm top-[130%] rounded-lg p-2 whitespace-nowrap group-hover:scale-100 lg:static lg:inset-auto lg:scale-100 lg:bg-transparent lg:text-white lg:text-xs'>Jhonwell Espanola</p>
               </div>

               <div className='flex relative items-center gap-2'>
                 <FontAwesomeIcon icon={faPhone} />
                 <p className='absolute origin-top-left transition-all scale-0 bg-white text-dark text-sm top-[130%] rounded-lg p-2 whitespace-nowrap group-hover:scale-100 lg:static lg:inset-auto lg:scale-100 lg:bg-transparent lg:text-white lg:text-xs'>09514406062</p>
               </div>
           </div>

           <div className='flex gap-4 items-center'>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
           </div>
        </div>
        </div>
      )
    }
    
    </div>
   
     
     {
        sidenavVisible && <div className='z-20 fixed inset-0 bg-dark-overlay lg:hidden'>
        <img onClick={() => setSidenavVisible(false)} draggable={false} className='absolute select-none w-4 right-4 top-4' src={crossLight} alt="" />
     </div>
     }
     
     <NavigationBar 
     navFixed={navFixed}
     theme={theme} 
     toggleTheme={toggleTheme} 
     sidenavVisible={sidenavVisible} 
     visibility="flex lg:hidden" />
    </>
    )
}


const NavigationBtn = ({data, navFixed}: { data: {imgSrc: string; category: string}, navFixed: boolean  }) => {
    

    const {imgSrc, category} = data;

    return (
        <div className='flex items-center gap-3'>
          {
            category === "Home" ? (
              <div className='w-9 bg-violet-overlay p-[10px] rounded-full lg:hidden'>
                <img src={imgSrc} alt="" />
              </div>
            ) : <img className='w-4 lg:hidden' src={imgSrc} alt="" />
          }
          
          <p className={`${category === "Home" && "text-dark poppins-semibold lg:relative lg:before:absolute lg:before:-bottom-1 lg:before:w-full lg:before:h-[2px] lg:before:bg-violet-dark"} navbtn ${navFixed ? "lg:text-[.8em]" : "lg:text-[.9em] 2xl:text-[1.16em]"} lg:cursor-pointer`}>{category}</p>
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

const NavigationBar: React.FC<NavigationProps> = ({sidenavVisible, theme, toggleTheme, visibility, navFixed}) => {

  return (
    <nav className={`${!sidenavVisible && "-translate-x-full lg:-translate-x-0"} ${visibility} fixed bg-white top-0 bottom-0 left-0 w-11/12 max-w-[16em] p-5 flex-col gap-10 z-20 lg:relative lg:flex-row lg:justify-between lg:container lg:w-full lg:px-0 lg:mx-auto ${navFixed ? "lg:transition-all duration-700 lg:py-2" : "lg:transition-none"} transition-all duration-700`}>
    
        <div className='flex gap-2 items-center relative before:absolute before:w-full before:h-[2px] before:bg-light-gray before:bottom-0 pb-4 lg:before:hidden lg:gap-3 lg:pb-0'>
            <img className='w-7 xl:w-9' src={logoLight} alt="" />

            <div className={`text-sm xl:text-base ${navFixed && "lg:text-xs"}`}>
                <h3 className='poppins-semibold xl:text-[1em] 2xl:text-[1.3em]'>Jhonwell <span className='poppins-semibold text-violet-dark'>Española</span></h3>
                <p className={`text-xs poppins-semibold text-gray 2xl:text-[.95em] ${navFixed && "lg:hidden"}`}>Full-Stack Web Developer</p>
            </div>
        </div>
        
        <div className='lg:flex lg:justify-between lg:gap-16 lg:items-center 2xl:gap-24'>
            <div className='flex flex-col gap-6 relative before:absolute before:bottom-0 before:h-[2px] before:bg-light-gray before:w-full pb-12 lg:flex-row lg:pb-0 lg:before:hidden lg:gap-10'>
               
              {
                upperNavigations.map((data, index) => {
                    return <NavigationBtn navFixed={navFixed} data={data} key={index} />
                })
              }
                
            </div>

            <div className='mt-8 text-sm lg:mt-0'>
                <h3 className='poppins-semibold lg:hidden'>Display Theme</h3>

                <div className="flex gap-4 items-center mt-5 lg:mt-0">
                    <div className={`bg-light-gray flex items-center relative rounded-full cursor-pointer w-14 aspect-[10/5] ${navFixed ? "lg:w-12" : "2xl:w-16"}`}>
                       <img draggable={false} className={`select-none absolute w-1/4 left-3 ${theme === "Light" && "opacity-0 translate-x-1/2"} transition-all duration-500 ${navFixed && "lg:left-2"}`} src={moonInactive} alt="" />
                       <img draggable={false} className={`select-none absolute w-1/4 right-3 ${theme !== "Light" && `opacity-0 -translate-x-1/2`} transition-all duration-500 ${navFixed && "lg:right-2"}`}  src={sunInactive} alt="" />
                      
                       <div className={`absolute bg-white rounded-full w-[32%] aspect-square left-[.3em] p-1 ${theme === "Dark" && `translate-x-[2.03em] ${navFixed && "lg:translate-x-[1.7em]"}`} transition-all duration-500`}><img src={theme === "Light" ? moonActive : sunActive} draggable={false} className="select-none" alt="" /></div>

                       <div onClick={toggleTheme} className='absolute inset-0 z-10'></div>
                    </div>

                    <p className='text-xs poppins-semibold text-violet-dark lg:hidden'>Light Mode</p>
                </div>
               
            </div>
            
        </div>
        
    </nav>
  )
}

export default UpperNavigation