import responsiveBg from '../assets/Services/responsive-design-bg.jpg';
import uiImplementationBg from '../assets/Services/ui-implementation-bg.jpg';
import serverSideBg from '../assets/Services/server-side-bg.jpg';
import databaseBg from '../assets/Services/database-bg.jpg';
import authBg from '../assets/Services/auth-bg.jpg'
import cicd from '../assets/Services/cicd-bg.jpg';
import iac from '../assets/Services/iac-bg.png';
import cloudBg from '../assets/Services/cloud-bg.svg';

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
           CreateServiceData({ image: serverSideBg, serviceTitle: "Server-side Logic", info: `I specialize in developing robust server-side logic that powers the core functionality of web applications. From handling complex business rules to managing API requests and database interactions, I build backend systems that are secure, efficient, and scalable. Whether you're launching a startup or scaling an enterprise platform, I ensure your application's backend runs smoothly and reliably.` }),

           CreateServiceData({ image: databaseBg, serviceTitle: "Database Management", info: `I specialize in designing and managing efficient, secure, and scalable databases to support your application’s data needs. From crafting well-structured schemas to optimizing queries and ensuring data integrity, I build systems that store, retrieve, and process data with speed and reliability. Whether it's SQL or NoSQL, I ensure your data layer is optimized for performance, scalability, and future growth.` }),

           CreateServiceData({ image: authBg, serviceTitle: "Deployment & DevOps", info: `I specialize in Deployment & DevOps, ensuring that web applications are reliably hosted, continuously integrated, and smoothly deployed across different environments. I manage servers, automate deployment pipelines, handle environment configurations, and implement monitoring tools to maintain optimal performance and uptime.` })
       ]
    },

    {
        category: "Deployment & DevOps",
        services: [
            CreateServiceData({ image: cicd, serviceTitle: "Continuous Integration & Continuous Deployment", info: 'I specialize in Continuous Integration (CI) & Continuous Deployment (CD), ensuring that code changes are automatically tested, integrated, and deployed seamlessly. With CI, I streamline the process of merging code into a central repository and running tests to identify errors early. For CD, I automate the deployment of changes directly into production, enabling rapid and reliable software delivery.' }),

            CreateServiceData({ image: iac, serviceTitle: "Infrastructure as Code (IaC)", info: 'I specialize in Infrastructure as Code (IaC), enabling the automation and management of infrastructure through code. Using tools like Terraform and AWS CloudFormation, I define and provision resources in a repeatable and consistent manner, ensuring scalable and reliable environments. This approach eliminates manual configuration, reduces errors, and enhances the speed of deployment across multiple environments.' }),

            CreateServiceData({ image: cloudBg, serviceTitle: "Cloud Infrastructure Management", info: 'I specialize in Cloud Infrastructure Management, designing and managing scalable, secure, and cost-efficient cloud environments. Using platforms like AWS, Azure, and Google Cloud, I provision, configure, and monitor cloud resources, ensuring high availability and seamless performance. I also optimize cloud services for efficient resource utilization, security, and scalability, empowering businesses to leverage the full potential of cloud technologies.' })


        ]
     },
]


export type { ServiceData }
 
export default categorizeServices;