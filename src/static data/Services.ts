
/* Services Images */
import frontend from '../assets/Hero/front-end.png';
import ecommerce from '../assets/Hero/e-commerce.png';
import mobileResponsive from '../assets/Hero/mobile-responsive.png';
import realEstate from '../assets/Hero/real-estate.png';


interface ServiceData {
    imgSrc: string;
    category: string
}

export const CreateServiceData = (imgSrc: string, category: string) => {
   return ({
    imgSrc, category
   })
} 


const services: ServiceData[] = [
    CreateServiceData(frontend, "Frontend Development"),
    CreateServiceData(ecommerce, "Ecommerce Websites"),
    CreateServiceData(mobileResponsive, "Mobile Responsive"),
    CreateServiceData(realEstate, "Real Estate Websites"),
];

export default services;