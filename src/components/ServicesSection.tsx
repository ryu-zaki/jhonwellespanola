import React from "react";
import SectionTitle from "./SectionTitle";
import categorizeServices, { ServiceData } from "../static data/CategorizeServices";
import infoIcon from '../assets/Services/info-violet.png';
import infoIconWhite from '../assets/Services/info-white.png';

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
                    ["Front-end", "Back-end", "Full-stack"]
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
           <img className="w-full" src={image} alt="" />
           
           <div className="absolute text-white inset-0 bg-dark-overlay flex flex-col items-end justify-between p-6 lg:p-8">
            <img className="w-6 2xl:w-8" src={infoIconWhite} alt="" />
             <h3 className="self-start poppins-semibold lg:text-lg 2xl:text-[1.4em]">{serviceTitle}</h3>
           </div>
           
         </div>
         
         {
            modalVisible && <InfoModal info={info} title={serviceTitle} />
         }
         
        </>
        
    )
}

const InfoModal: React.FC<{ info: string, title: string }> = ({ info, title }) => {

    return (
        <div>
            <div>
                <img src={infoIcon} alt="" />
                <h3>{title}</h3>
            </div>
           <p>{info}</p>
        </div>
    )
}

export default ServicesSection