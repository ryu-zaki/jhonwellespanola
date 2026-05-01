import React from 'react'
import SectionTitle from './SectionTitle'
import laptopImg from '../assets/Projects/laptop-stock.jpg';
import Projects, { ProjectType } from '../static data/Projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import rocketIcon from '../assets/Projects/rocket-lunch.png';
import crossIcon from '../assets/Projects/cross-small.png'
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ScrollTrigger } from 'gsap/ScrollTrigger' 
import { useTheme } from './ThemeContext';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function RecentProjects() {
  
  const projectsSectionRef = React.useRef<null | HTMLDivElement>(null);

  useGSAP(() => {  

  const mm = gsap.matchMedia();

  mm.add({ large: '(min-width: 1024px)',small: "(max-width: 1023px)" }, ({conditions}) => {



    const tl = gsap.timeline({ defaults: { opacity: 0 } });
  

  tl.from('.proj_img', {
    translateY: conditions?.large ? "80px" : "30px", stagger: .15  
  })
  .from('.proj_text', {
    translateX: "50px", stagger: .15
  }, '-=.5')
  .from('.stock_img', { translateX: '80px' }, '-=.2')

  ScrollTrigger.create({
    animation: tl, 
    trigger: projectsSectionRef.current,
    start: "top center"
  })

  })
  

  }, { scope: projectsSectionRef })

  return (
    <div ref={projectsSectionRef}>
       <SectionTitle
         title='Recent Projects'
         description='take a look at my latest projects that reflects my skills as a programmer in a field of web development'
         category='Who am I?'
       />

       {/* Grid Section */}
       <div className='grid mt-10 grid-cols-2 gap-2 xs:grid-cols-6 lg:grid-cols-9 2xl:mt-14'>
           {
             Projects.map((data, index) => {
               return <ProjectBox index={index + 1} data={data} key={index} />
             })
           }
       </div>

       <div className='mt-10 flex flex-col  gap-5 sm:flex-row lg:items-start'>
        <div className='lg:shadow-light lg:p-8 lg:rounded-xl xl:p-10'>
          <h3 className='text-lg proj_text poppins-semibold mb-2 xl:text-xl 2xl:text-[1.4em]'>Showcasing My Latest Work</h3>
          <p className='xl:text-lg proj_text xl:leading-7 2xl:text-[1.4em] 2xl:leading-[1.8em]'>Each project reflects my dedication to clean design, user-focused functionality, and responsive performance. Whether it's a sleek website, an interactive UI, or a dynamic web application, these works highlight <span className='text-violet-light poppins-semibold'>my evolving</span> skills and passion for building engaging digital experiences.</p>
        </div>
        <div className='overflow-hidden w-full lg:pb-3 lg:px-3'>
        <img className='rounded-lg stock_img sm:hidden lg:block lg:w-72 xl:w-[21em] 2xl:w-[26.5em]' src={laptopImg} alt="" />
        </div>
        
       </div>
    </div>
  )
}

const ProjectBox:React.FC<{ data: ProjectType, index: number }> = ({ data, index }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { imgProj, url, title, category, description, imgsSample, source } = data;
 
  
  return (
    <>
    <InfoModal 
        source={source}
        url={url}
        title={title}
        category={category}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        imgsSample={imgsSample}
        description={description}
    />
    <div className={`${index === 3 ? "col-start-2 row-start-1 row-span-2 p-3 xs:col-span-3 xs:col-start-4 lg:col-start-7" : index === 6 ? "col-span-2" : index === 1 ? "xs:col-span-3 xs:row-start-1 xs:col-start-1" : index === 2 ? "xs:row-start-2 xs:col-span-3 lg:col-start-4 lg:row-start-1" : "xs:col-span-2"} w-full relative bg-linear-[0deg,#D9D9D9_5%,#222_100%] rounded-lg lg:p-5 md:cursor-pointer group overflow-hidden`}>
       <div onClick={() => setModalVisible(true)} className="absolute inset-0 z-10"></div>

      <h3 className='absolute top-2 left-2 text-white poppins-semibold text-sm'>0{index}</h3>
      <div className='proj_img'>
      <img className={`w-full h-full object-cover md:group-hover:scale-110 duration-500 transition-all mt-5`} src={imgProj} alt="" />
      </div>
      

       {/* Overlay */}
       <div className="absolute justify-center items-center inset-0 bg-linear-[0deg,#5A0F93_5%,rgba(51,51,51,0.5)_50%] text-white hidden opacity-0 translate-y-[3em] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 lg:flex">
        <p className='absolute top-2 right-2 bg-white text-dark text-[.6em] font-semibold rounded-full px-4 py-1 xl:top-4 xl:right-4 xl:text-xs translate-x-[4em] transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0 delay-300 duration-500'>{category}</p>
        <h2 className='xl:text-xl font-semibold translate-y-[2em] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200 duration-500'>{title}</h2>
       </div>
    </div>
    </>
    
  )
}

const PaginationCircle:React.FC<{ activeSlide: number, setActiveSlide: React.Dispatch<React.SetStateAction<number>>, swiper: SwiperType | undefined}> = ({ activeSlide, setActiveSlide, swiper  }) => {

  const arr:string[] = new Array(6).fill('');
  
  const hadleSwitchPage = (index:number) => {
    setActiveSlide(index + 1);
    swiper?.slideToLoop(index);
  }
 
  return (
    <div className='flex gap-2 justify-center mt-10'>
      {
        arr.map((_, index) => {
           return <div onClick={() => hadleSwitchPage(index)} key={index} className={`${activeSlide === (index + 1) ? "bg-violet-dark md:bg-violet-darker" : "bg-[#aaa] md:bg-white"
           } w-[10px] rounded-full dots aspect-square md:w-[8px]`}></div>
        })
      }
    </div>
  )
}

interface InfoModalType {
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  title: string, 
  category: string,
  description: string, imgsSample: string[], url: string, source: string
}

const InfoModal:React.FC<InfoModalType> = ({ modalVisible, setModalVisible, title, category, description, imgsSample, url, source }) => {
  
  const [mobileSwiper, setMobileSwiper] = React.useState<SwiperType>();
  const [desktopSwiper, setDesktopSwiper] = React.useState<SwiperType>();
  const [activeSlide, setActiveSlide] = React.useState<number>(0); 
  const modalRef = React.useRef(null)
  const desktopRef = React.useRef(null);
  const {theme} = useTheme();
  
  const visitSite = () => {
    window.open(url, '_blank')
  }

  const visitSource = () => {
    window.open(source)
  }

  const modalAnimation = () => {
    const tl = gsap.timeline({ delay: .2, defaults: { opacity: 0 } });
    
    tl
    .from('.text', {
      translateX: "-60px", 
      stagger: .15
    })
    .from('.page', {
      translateY: "60px",
      stagger: .1
    }, '-=.4')
    .from('.dots', {
      translateY: "60px", stagger: .1
    }, '-=.8')
    .from('.desc', {
      translateY: "-60px"
    }, '-=.8')
    .from('.btns', { 
      translateY: "60px", stagger: .15
    }, '-=.8')
  }

  useGSAP(() => {
    if (modalVisible) {
      modalAnimation();
     }
  }, { scope: desktopRef, dependencies: [modalVisible] })

  useGSAP(() => {
   if (modalVisible) {
    modalAnimation();
   }
   

  }, { scope: modalRef, dependencies: [modalVisible] })

  const handleCloseModal = () => {

    setModalVisible(false);
      
  }

  React.useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add({desktop: '(min-width: 768px)', mobile: "(max-width: 766px)"}, ({ conditions }) => {
      const timeout = setTimeout(() => {

        (conditions?.desktop ? desktopSwiper : mobileSwiper)?.slideToLoop(0)
        clearTimeout(timeout)
      }, 500)
    })
    
  }, [modalVisible])
  
  /* Desktop Modal Function */
  const changeSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const target = event.target as HTMLDivElement;

    if (target.id === "next") {
       desktopSwiper?.slideToLoop(activeSlide > 5 ? 0 : activeSlide);
    } else {
      desktopSwiper?.slidePrev();
    }
  }

  return (
    <>
    {
    modalVisible && <div onClick={handleCloseModal} className='fixed inset-0 z-50 bg-dark-overlay w-full h-full'></div>
    
   }
     {/* Modal for desktops */}

     <div ref={desktopRef} className={`${!modalVisible && "scale-0 opacity-0"} ease-out hidden origin-bottom transition-all duration-700 w-[42em] fixed top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2  z-50 rounded-2xl grid-cols-[45%_55%] overflow-hidden md:grid lg:w-[55em] lg:min-h-[30em] xl:w-[65em]`}>
       
       <FontAwesomeIcon onClick={handleCloseModal} className={`${theme === "Dark" ? "text-white" : "text-dark"} z-10 absolute top-3 cursor-pointer right-3 text-[25px] lg:top-5 lg:right-5`} icon={faXmark} />

       <div className={`backdrop-blur-sm transition-none relatve flex bg-dark-overlay items-center w-full h-full`}>
        <p className='absolute top-4 left-4 bg-white text-dark text-xs px-3 rounded-full font-semibold lg:text-sm xl:py-1 xl:px-4'>sample pages</p>
           <SwiperContainer 
             activeSlide={activeSlide}
             setActiveSlide={setActiveSlide}
             imgsSample={imgsSample}
             setSwiper={setDesktopSwiper}
             swiper={desktopSwiper}
           />
        
         <div className='absolute bottom-5 left-5 flex gap-3 text-xs items-center text-white xl:bottom-7 xl:left-7 xl:gap-4'>
           <button id="prev" onClick={changeSlide} className='py-2 relative border-2 border-white rounded-full px-3 hover:bg-white hover:text-dark hover:border-transparent transition-all duration-200 cursor-pointer hover:font-semibold'>
             <FontAwesomeIcon icon={faChevronLeft} />
           </button>
           <button id="next" onClick={changeSlide} className='py-2 border-2 border-white rounded-full px-3 hover:bg-white hover:text-dark hover:border-transparent transition-all duration-200 cursor-pointer hover:font-semibold'>
             <FontAwesomeIcon icon={faChevronRight} />
           </button>
         </div>
       </div>

       <div className={`p-8 ${theme === "Dark" ? "bg-[#222]" : "bg-white"} lg:p-12 xl:pb-20`}>
         <div className='mb-4'>
          <h2 className='text-xl font-semibold lg:text-2xl text xl:text-3xl'>{title}</h2>
          <p className='text-sm font-semibold text-violet-dark text lg:text-base xl:text-lg'>{category}</p>
         </div>

          <p className='text-sm leading-6 lg:text-base lg:leading-8 text xl:text-lg'>{description}</p>

          <ProjectBtns visitSource={visitSource} visitSite={visitSite} />
       </div>
       
     </div>

    
     {/* Modal for Mobile */}
    <div ref={modalRef} className={`${!modalVisible && "translate-y-full"} transition-all ease-out duration-700 fixed z-50 bottom-0 right-0 w-full ${theme === "Dark" ? "bg-[#222]" : "bg-white"} rounded-tr-2xl rounded-tl-3xl flex flex-col gap-8 py-5 xs:rounded-tr-3xl xs:rounded-tl-3xl xs:py-8 md:hidden`}>
      <img onClick={handleCloseModal} draggable={false} className='select-none z-10 absolute top-3 right-3 w-[25px] xs:top-5 xs:right-5' src={crossIcon} alt="" />
       <div className='px-5 xs:px-8'>
          <h2 className="text-lg text font-semibold sm:text-xl">{title}</h2>
          <p className='text-sm text font-semibold text-violet-dark'>{category}</p>
       </div>
     <SwiperContainer 
     activeSlide={activeSlide}
     setActiveSlide={setActiveSlide}
       imgsSample={imgsSample}
       setSwiper={setMobileSwiper}
       swiper={mobileSwiper}
     />
      
      <div className='px-5 xs:px-8'>
       <p className='desc text-sm sm:text-base'>
        {description}
       </p>

       <ProjectBtns visitSource={visitSource} visitSite={visitSite} />
      </div>
       
    </div>
    
    </>
  )
  
}

const ProjectBtns:React.FC<{visitSite: () => void, visitSource: () => void }> = ({ visitSite, visitSource }) => {

  return (
    <div className='flex text-sm gap-3 mt-7 xs:gap-5 lg:text-base lg:mt-10'>
    <button className='btns relative bg-dark cursor-pointer text-white py-1 px-8 rounded-sm flex gap-2 items-center xl:py-2 xl:px-10 xl:gap-3'>
      <div onClick={visitSite} className="absolute z-10 inset-0"></div>
      <img className='w-[15px] lg:w-[18px]' src={rocketIcon} alt="" />
      Visit</button>
    <button className='btns border-2 cursor-pointer rounded-sm border-darker flex gap-2 font-semibold items-center py-1 px-8 xl:py-2 xl:px-10 xl:gap-3'>
     <div onClick={visitSource} className="absolute inset-0"></div>
     <FontAwesomeIcon className="text-[15px] lg:text-[18px]" icon={faGithub} />
      Code</button>
  </div>
  )
}


const SwiperContainer:React.FC<{ activeSlide: number, setActiveSlide: React.Dispatch<React.SetStateAction<number>>, imgsSample: string[], swiper: SwiperType | undefined, setSwiper: React.Dispatch<React.SetStateAction<SwiperType | undefined>> }> = ({ imgsSample, swiper, setSwiper, setActiveSlide, activeSlide }) => {

  

  return (
    <div className='w-full'>
     <Swiper
     modules={[EffectCoverflow]}
     breakpoints={
      {
        550: {
          slidesPerView: 2
        },

        768: {
          slidesPerView: 1.3
        },

        1024: {
          slidesPerView: 1.3,
          spaceBetween: 0
        }
      }
     }
     effect='coverflow'
        loop={true}
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={2}
        onSlideChange={({realIndex}) => setActiveSlide(realIndex + 1)}
        grabCursor={true}
        onSwiper={(s) => setSwiper(s)}
      >

        {
          imgsSample.map((img, index) => {
            return <SwiperSlide className='page' key={index}>
              <img className='w-full' src={img} alt="" />
            </SwiperSlide>
          })
        }
      </Swiper>

      <PaginationCircle 
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        swiper={swiper}
      />
     </div>
  )
}

export default RecentProjects