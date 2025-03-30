import responsiveBg from '../assets/Services/responsive-design-bg.jpg';
import uiImplementationBg from '../assets/Services/ui-implementation-bg.jpg';
import frameworkBg from '../assets/Services/frontend-frameworks-bg.jpg';



interface ServiceData {
    image: string;
    serviceTitle: string;
    info: string;
}

const CreateServiceData = ({image, serviceTitle, info}: ServiceData)  => {

    return ({
        image, serviceTitle, info
    })
}

const categorizeServices: {category: string, services: ServiceData[]}[] = [
    {
      category: "Front-end",
      services: [
         CreateServiceData({ image: responsiveBg, serviceTitle: "Responsive Design", info: '' }),
         CreateServiceData({ image: uiImplementationBg, serviceTitle: "UI/UX Implementation", info: '' }),
         CreateServiceData({ image: responsiveBg, serviceTitle: "Frontend Frameworks", info: '' }),
      ]
    },

    {
       category: "Back-end",
       services: [
           CreateServiceData({ image: "", serviceTitle: "", info: '' })
       ]
    },

    {
        category: "Full-stack",
        services: [
            CreateServiceData({ image: "", serviceTitle: "", info: '' })
        ]
     },
]


export type { ServiceData }
 
export default categorizeServices;