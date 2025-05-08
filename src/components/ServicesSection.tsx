import React, { Dispatch, SetStateAction } from "react";
import SectionTitle from "./SectionTitle";
import categorizeServices, { ServiceData } from "../static data/CategorizeServices";
import infoIcon from '../assets/Services/info-violet.png';
import infoIconWhite from '../assets/Services/info-white.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import chevIcon from '../assets/Services/angle-small-down.png';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

interface InfoModalProps {
    info: string;
    title: string;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    modalVisible: boolean
}

const ServicesSection: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger)
    const [ btnCat ] = React.useState(["Front-end", "Back-end", "Deployment"]);
    const [isClick, setIsClick] = React.useState(false);

    const [activeCategory, setActiveCategory] = React.useState<string>("Front-end");
     console.log(categorizeServices.find(({category}) => category === activeCategory))
     const serviceSectionCon = React.useRef<HTMLDivElement | null>(null);
     console.log(isClick)

    useGSAP(() => {
     if (isClick) {
      const tl = gsap.timeline({ defaults: { opacity: 0, stagger: .1 } });
   
      tl.from('.service-box', {
        scale: .2,
      })
      .from('.service-box-details', {
       opacity: 0, translateX: "-60px"
      }, '-=.3')
     }
    

    }, { dependencies: [activeCategory, isClick], scope: serviceSectionCon })
    
    useGSAP(() => {
      if (!isClick) {
        const tl = gsap.timeline( {defaults: { duration: .7, translateY: "6em", opacity: 0 }} );

        tl.from('.center_proj', { })
        tl.from('.side_proj', {}, '-=.45')

        ScrollTrigger.create({
         animation: tl,
         trigger: serviceSectionCon.current,
         start: "top center",
        })
      }
     

    }, {scope: serviceSectionCon})


    return <div ref={serviceSectionCon}>
        <SectionTitle 
          title="What can I provide?"
          category="Services"
          description="Whether you need an e-commerce platform, a business website, or a custom web application, I’m here to bring your vision to life."
        />

        <div className="flex service-con flex-col mt-10 xl:mt-16 xs:items-center lg:mt-16">
            {/* Grid */}
            <div className="flex flex-wrap justify-center gap-2 xs:flex-row xs:justify-center xs:gap-3 lg:flex-nowrap lg:gap-3 xl:flex-nowrap">
               {
                 categorizeServices.find(({category}) => category === activeCategory)?.services
                 .map((data, index) => {
                    return <ServiceBox index={index} data={data} key={index} />
                 })
               }           
            </div>

            <div className="text-xs hidden justify-center gap-4 mt-10 xs:text-base md:flex md:gap-8 xl:gap-12 2xl:text-[1.4em] 2xl:gap-14 2xl:mt-14">
                {
                    
                    btnCat.map((category: string, index) => {
                        return <button className={`${activeCategory === category ? "bg-violet-dark rounded-md text-white px-6 py-2 2xl:px-10 2xl:py-3" : "hover:text-violet-dark hover:font-semibold"} transition-all duration-500 lg:cursor-pointer`} onClick={() => {setIsClick(true); setActiveCategory(category)}} key={index}>{category}</button>
                    })
                }
            </div>

            <CategorySwitch 
              setIsClick={setIsClick}
              activeCategory={activeCategory} 
              btnCat={btnCat}
              setActiveCategory={setActiveCategory}
              
            />
        </div>
    </div>
}

const CategorySwitch:React.FC<{ activeCategory: string, btnCat: string[], setActiveCategory: React.Dispatch<React.SetStateAction<string>>, setIsClick: React.Dispatch<React.SetStateAction<boolean>> }> = ({ activeCategory, btnCat, setActiveCategory, setIsClick }) => {

    const [optionVisible, setOptionVisible] = React.useState(false);

    const switchCategory = (item: string) => {
        setOptionVisible(false);
        setIsClick(true);
        setActiveCategory(item);
    }
    

    return (
           <div className="relative mt-8 text-[.8em] border-[#444] rounded-md border w-fit md:hidden">
               <div className="flex relative items-center p-2 px-4 gap-2">
                 <div onClick={() => setOptionVisible(prev => !prev)} className="z-10 absolute inset-0"></div>
                 <p className="poppins-semibold">{activeCategory}</p>
                 <img className={`${!optionVisible && "-rotate-90" } transition-all duration-200 w-6`} src={chevIcon} alt="" />
               </div>
              
               <div className={`${!optionVisible && "scale-0"} origin-top-left transition-all duration-300 w-full absolute top-[130%] shadow-light p-2 pr-7 bg-white rounded-lg`}>
                     {
                        btnCat.filter((item: string) => item != activeCategory).map((item, index) => {
                            return <p key={index} className="p-2 pl-4" onClick={() => switchCategory(item)}>{item}</p>
                        })
                     }
               </div>         
            </div>
    )
} 




const ServiceBox: React.FC<{ data: ServiceData, index: number}> = ({ data, index }) => {
    
    const { image, serviceTitle, info } = data;
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);

    return (
        <>
         <div className={`${index === 1 ? "center_proj" : "side_proj"} w-[48%] relative origin-top service-box overflow-hidden rounded-md lg:rounded-xl`}>
           <img className="w-full aspect-[14/12]  xs:aspect-[14/9]" src={image} alt="" />
           
           <div className="absolute text-white inset-0 bg-dark-overlay flex flex-col items-end justify-between p-2 xs:p-6 lg:p-8">
            <img onClick={() => setModalVisible(true)} className="service-box-details w-4 xs:w-5 md:w-6 lg:cursor-pointer 2xl:w-8" src={infoIconWhite} alt="" />
             <h3 className="service-box-details text-sm self-start md:text-base poppins-semibold lg:text-lg 2xl:text-[1.6em]">{serviceTitle}</h3>
           </div>
           
         </div>
         
        <InfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} info={info} title={serviceTitle} />
         
        </>
        
    )
}

const InfoModal: React.FC<InfoModalProps> = ({ info, title, setModalVisible, modalVisible }) => {
    
    return (
        <>
         {
            modalVisible && <div onClick={() => setModalVisible(false)} className="fixed inset-0 bg-dark-overlay z-20"></div>
         } 

          <div className={`${modalVisible ? "-translate-y-1/2" : "translate-y-0 scale-0 opacity-0"} fixed w-11/12 p-5 transition-all duration-700 container overflow-hidden py-8 bg-white top-1/2 left-1/2 -translate-x-1/2  z-20 rounded-xl before:absolute before:bottom-0 before:left-0 before:h-2 before:bg-gray-400 before:w-full xs:px-7 sm:max-w-[620px] sm:py-10 lg:before:h-3 lg:pb-14 2xl:max-w-[700px] 2xl:px-10`}>
           <div className={`${!modalVisible && "opacity-0 -translate-y-[10px]"} transition-all delay-[300ms] duration-700 flex gap-2 items-center text-violet-dark sm:gap-3`}>
                <img draggable={false} className="w-5 sm:w-6 2xl:w-8" src={infoIcon} alt="" />
                <h3 className="poppins-semibold xs:text-lg sm:text-xl 2xl:text-[1.8em]">{title}</h3>
            </div>
           
            <FontAwesomeIcon onClick={() => setModalVisible(false)} className="absolute text-lg top-3 right-3 lg:text-2xl lg:top-5 lg:right-5 lg:cursor-pointer 2xl:text-3xl" icon={faXmark} />

           <p className={`${!modalVisible && "opacity-0 -translate-y-[10px]"} delay-400 duration-500 transition-all mt-4 text-sm leading-6 xs:text-base xs:leading-7 lg:leading-8 xl:text-lg xl:leading-9 2xl:text-[1.4em]`}>{info}</p>
        </div>
        </>
        
    )
}

export default ServicesSection