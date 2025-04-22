import React, { Dispatch, SetStateAction } from "react";
import SectionTitle from "./SectionTitle";
import categorizeServices, { ServiceData } from "../static data/CategorizeServices";
import infoIcon from '../assets/Services/info-violet.png';
import infoIconWhite from '../assets/Services/info-white.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface InfoModalProps {
    info: string;
    title: string;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    modalVisible: boolean
}

const ServicesSection: React.FC = () => {
    
    const [activeCategory, setActiveCategory] = React.useState<string>("Front-end");
     console.log(categorizeServices.find(({category}) => category === activeCategory))
    return <div>
        <SectionTitle 
          title="What can I provide?"
          category="Services"
          description="Whether you need an e-commerce platform, a business website, or a custom web application, I’m here to bring your vision to life."
        />

        <div className="mt-10 xl:mt-16">
            {/* Grid */}
            <div className="flex flex-col gap-5 xs:flex-row xs:flex-wrap xs:justify-center xs:gap-2 lg:gap-8 xl:flex-nowrap">
               {
                 categorizeServices.find(({category}) => category === activeCategory)?.services
                 .map((data, index) => {
                    return <ServiceBox data={data} key={index} />
                 })
               }           
            </div>

            <div className="text-xs flex justify-center gap-4 mt-10 xs:text-base md:gap-8 xl:gap-12 2xl:text-[1.4em] 2xl:gap-14 2xl:mt-14">
                {
                    ["Front-end", "Back-end", "Deployment & DevOps"]
                    .map((category: string, index) => {
                        return <button className={`${activeCategory === category && "bg-violet-dark rounded-md text-white px-6 py-2 2xl:px-10 2xl:py-3"} lg:cursor-pointer`} onClick={() => setActiveCategory(category)} key={index}>{category}</button>
                    })
                }
            </div>
        </div>
    </div>
}


const ServiceBox: React.FC<{ data: ServiceData}> = ({ data }) => {
    
    const { image, serviceTitle, info } = data;
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);

    return (
        <>
         <div className="relative overflow-hidden rounded-md xs:w-[40%]">
           <img className="w-full aspect-[14/9]" src={image} alt="" />
           
           <div className="absolute text-white inset-0 bg-dark-overlay flex flex-col items-end justify-between p-6 lg:p-8">
            <img onClick={() => setModalVisible(true)} className="w-6 lg:cursor-pointer 2xl:w-8" src={infoIconWhite} alt="" />
             <h3 className="self-start poppins-semibold lg:text-lg 2xl:text-[1.6em]">{serviceTitle}</h3>
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