import logoLight from '../assets/UpperNav/logo-light.png';
import crossLight from '../assets/UpperNav/cross-light.png';
import React from 'react';

/* darkmode Images */
import moonActive from '../assets/UpperNav/moon-active.png';
import moonInactive from '../assets/UpperNav/moon-inactive.png';
import sunActive from '../assets/UpperNav/sun-active.png';
import sunInactive from '../assets/UpperNav/sun-inactive.png';
import upperNavigations from '../static data/Navigations';


function UpperNavigation() {
    
    const [sidenavVisible, setSidenavVisible] = React.useState(false);
    const [navFixed, setNavFixed] = React.useState(false);
    const navbarContainer = React.useRef(null); 

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
    <div ref={navbarContainer} className='h-16 lg:hidden'>
    <div className={`pr-3 ${navFixed ? "fixed navbar_animate left-0 top-0 right-0 bg-white px-2 pr-4 shadow-light py-3 z-10 sm:px-8 sm:pr-10" : "relative before:absolute before:bg-gray before:right-0 before:left-0 before:h-[2px] before:bottom-0 py-5"}`}>
        <div className='flex justify-between items-center container mx-auto'>
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
       
    </div>
    </div>
   
     
     {
        sidenavVisible && <div className='z-20 fixed inset-0 bg-dark-overlay lg:hidden'>
        <img onClick={() => setSidenavVisible(false)} draggable={false} className='absolute select-none w-4 right-4 top-4' src={crossLight} alt="" />
     </div>
     }

     <nav className={`${!sidenavVisible && "-translate-x-full lg:-translate-x-0"} fixed bg-white top-0 bottom-0 left-0 w-11/12 max-w-[16em] p-5 flex flex-col gap-10 z-20 transition-all duration-700 lg:relative lg:flex-row lg:justify-between lg:max-w-full lg:w-full lg:px-0`}>

        <div className='flex gap-2 items-center relative before:absolute before:w-full before:h-[2px] before:bg-light-gray before:bottom-0 pb-4 lg:before:hidden lg:gap-3'>
            <img className='w-7 xl:w-9' src={logoLight} alt="" />

            <div className='text-sm xl:text-base'>
                <h3 className='poppins-semibold xl:text-[1em] 2xl:text-[1.3em]'>Jhonwell <span className='poppins-semibold text-violet-dark'>Española</span></h3>
                <p className='text-xs poppins-semibold text-gray 2xl:text-[.95em]'>Full-Stack Web Developer</p>
            </div>
        </div>
        
        <div className='lg:flex lg:justify-between lg:gap-16 lg:items-center 2xl:gap-24'>
            <div className='flex flex-col gap-6 relative before:absolute before:bottom-0 before:h-[2px] before:bg-light-gray before:w-full pb-12 lg:flex-row lg:pb-0 lg:before:hidden lg:gap-10'>
               
              {
                upperNavigations.map((data, index) => {
                    return <NavigationBtn data={data} key={index} />
                })
              }
                
            </div>

            <div className='mt-8 text-sm lg:mt-0'>
                <h3 className='poppins-semibold lg:hidden'>Display Theme</h3>

                <div className="flex gap-4 items-center mt-5 lg:mt-0">
                    <div className='bg-light-gray flex items-center relative rounded-full cursor-pointer w-14 aspect-[10/5] 2xl:w-16'>
                       <img draggable={false} className="select-none absolute w-1/4 left-3 opacity-0" src={moonInactive} alt="" />
                       <img draggable={false} className="select-none absolute w-1/4 right-3"  src={sunInactive} alt="" />
                       <div className='absolute bg-white rounded-full w-[32%] aspect-square left-[.3em] p-1'><img src={moonActive} alt="" /></div>
                    </div>
                    <p className='text-xs poppins-semibold text-violet-dark lg:hidden'>Light Mode</p>
                </div>
               
            </div>
            
        </div>
        
    </nav>
    </>
    )
}


const NavigationBtn = ({data}: { data: {imgSrc: string; category: string}  }) => {
    

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
          
          <p className={`${category === "Home" && "text-dark poppins-semibold lg:relative lg:before:absolute lg:before:-bottom-1 lg:before:w-full lg:before:h-[2px] lg:before:bg-violet-dark"} navbtn lg:text-[.9em] lg:cursor-pointer 2xl:text-[1.16em]`}>{category}</p>
        </div>
    )
}

export default UpperNavigation