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
         CreateServiceData({ image: responsiveBg, serviceTitle: "Responsive Design", info: 'I offer responsive web design services to ensure your website looks and functions perfectly on all devices—desktops, tablets, and mobile phones. Using modern frameworks like HTML, CSS, JavaScript, and ReactJS, I create dynamic layouts that adapt seamlessly to different screen sizes.' }),

         CreateServiceData({ image: uiImplementationBg, serviceTitle: "UI/UX Implementation", info: ' I specialize in UI/UX implementation, transforming design concepts into fully functional, interactive, and user-friendly websites. I focus on enhancing usability, accessibility, and engagement to provide a seamless experience for your users.' }),

         CreateServiceData({ image: responsiveBg, serviceTitle: "Frontend Frameworks", info: 'I specialize in building high-performance, scalable, and interactive web applications using modern frontend frameworks like ReactJS, TypeScript, and Next.js. Whether you need a simple landing page or a complex web system, I ensure a seamless, fast, and responsive user experience.' }),
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