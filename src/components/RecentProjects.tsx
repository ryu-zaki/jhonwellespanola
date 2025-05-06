import React from 'react'
import SectionTitle from './SectionTitle'
import laptopImg from '../assets/Projects/laptop-stock.jpg';
import Projects, { ProjectType } from '../static data/Projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import rocketIcon from '../assets/Projects/rocket-lunch.png';
import githubIcom from '../assets/Projects/github.png';
import crossIcon from '../assets/Projects/cross-small.png'
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

function RecentProjects() {

  return (
    <div>
       <SectionTitle
         title='Recent Projects'
         description='take a look at my latest projects that reflects my skills as a programmer in a field of web development'
         category='Who am I?'
       />

       {/* Grid Section */}
       <div className='grid mt-10 grid-cols-2 gap-2 gap-5-5'>
           {
             Projects.map((data, index) => {
               return <ProjectBox index={index + 1} data={data} key={index} />
             })
           }
       </div>

       <div className='mt-10 flex flex-col gap-5'>
        <div>
          <h3 className='text-lg poppins-semibold mb-2'>Showcasing My Latest Work</h3>
          <p>Each project reflects my dedication to clean design, user-focused functionality, and responsive performance. Whether it's a sleek website, an interactive UI, or a dynamic web application, these works highlight <span className='text-violet-light poppins-semibold'>my evolving</span> skills and passion for building engaging digital experiences.</p>
        </div>
        <img className='rounded-lg' src={laptopImg} alt="" />
       </div>
    </div>
  )
}

const ProjectBox:React.FC<{ data: ProjectType, index: number }> = ({ data, index }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { imgProj, url, title, category, description, imgsSample } = data;
 
   
  const visitSite = () => {
    window.open(url, '_blank')
  }
  return (
    <>
    <InfoModal 
        title={title}
        category={category}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        imgsSample={imgsSample}
        description={description}
    />
    <div className={`${index === 3 ? "col-start-2 row-start-1 row-span-2 p-3" : index === 6 ? "col-span-2" : ""} w-full relative bg-linear-[0deg,#D9D9D9_5%,#222_100%] rounded-lg`}>
       <div onClick={() => setModalVisible(true)} className="absolute inset-0 z-10"></div>

      <h3 className='absolute top-2 left-2 text-white poppins-semibold text-sm'>0{index}</h3>
      <img className={`w-full h-full object-cover`} src={imgProj} alt="" />

       {/* Overlay */}
       <div className="absolute inset-0 hidden">
        <p>{category}</p>
        <h2>{title}</h2>
        <button onClick={visitSite}>Visit site</button>
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
           return <div onClick={() => hadleSwitchPage(index)} key={index} className={`${activeSlide === (index + 1) ? "bg-violet-dark" : "bg-[#aaa]"
           } w-[10px] rounded-full dots aspect-square`}></div>
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
  description: string, imgsSample: string[]
}

const InfoModal:React.FC<InfoModalType> = ({ modalVisible, setModalVisible, title, category, description, imgsSample }) => {

  const [swiper, setSwiper] = React.useState<SwiperType>();
  const [activeSlide, setActiveSlide] = React.useState<number>(0); 
  const modalRef = React.useRef(null)

  useGSAP(() => {
   if (modalVisible) {
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
   

  }, { scope: modalRef, dependencies: [modalVisible] })

  const handleCloseModal = () => {

    setModalVisible(false);
    const timeout = setTimeout(() => {
      swiper?.slideToLoop(0)
      clearTimeout(timeout)
    }, 500)
      
    
    
  }

  return (
    <>
    {
    modalVisible && <div onClick={handleCloseModal} className='fixed inset-0 z-50 bg-dark-overlay w-full h-full'></div>
    
   }
    <div ref={modalRef} className={`${!modalVisible && "translate-y-full"} transition-all ease-out duration-700 fixed z-50 bottom-0 right-0 w-full bg-white rounded-tr-2xl rounded-tl-3xl flex flex-col gap-8 py-5`}>
      <img onClick={handleCloseModal} draggable={false} className='select-none z-10 absolute top-3 right-3 w-[25px]' src={crossIcon} alt="" />
       <div className='px-5'>
          <h2 className="text-lg text font-semibold">{title}</h2>
          <p className='text-sm text font-semibold text-violet-dark'>{category}</p>
       </div>
     <div>
     <Swiper
     modules={[EffectCoverflow]}
     effect='coverflow'
        loop={true}
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={2}
        onSlideChange={({realIndex}) => setActiveSlide(realIndex + 1)}
        grabCursor={true}
        onSwiper={(s) => {setSwiper(s);}}
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
      
      <div className='px-5'>
       <p className='desc text-sm'>
        {description}
       </p>

       <div className='flex text-sm gap-3 mt-7'>
        <button className='btns bg-violet-dark text-white py-1 px-8 rounded-sm flex gap-2 items-center'>
          <img className='w-[15px]' src={rocketIcon} alt="" />
          Visit</button>
        <button className='btns border-2 rounded-sm border-violet-darker flex gap-2 font-semibold items-center py-1 px-8 '>
         <img src={githubIcom} alt="" className="w-[15px]" />
          Code</button>
      </div>
      </div>
       
    </div>
    
    </>
  )
  
}

export default RecentProjects