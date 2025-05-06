
import comfoodyBg from '../assets/Projects/comfoody-bg.png';
import entertainmentBg from '../assets/Projects/entertainment-website-bg.png';
import homeverseBg from '../assets/Projects/homeverse-bg.png';
import weatherBg from '../assets/Projects/weather-website-bg.png';
import balaiMarioBg from '../assets/Projects/balai-mario-bg.png'
import raztapahanBg from '../assets/Projects/raztapahan-bg.png';

// #region Comfoody Pages
import comPage1 from '../assets/Projects/Sample Pages/comfoody/1.png'
import comPage2 from '../assets/Projects/Sample Pages/comfoody/2.png'
import comPage3 from '../assets/Projects/Sample Pages/comfoody/3.png'
import comPage4 from '../assets/Projects/Sample Pages/comfoody/4.png'
import comPage5 from '../assets/Projects/Sample Pages/comfoody/5.png'
import comPage6 from '../assets/Projects/Sample Pages/comfoody/6.png'
// # endregion

// #region Balai Mario Pages
import balaiPage1 from '../assets/Projects/Sample Pages/balai mario/1.png'
import balaiPage2 from '../assets/Projects/Sample Pages/balai mario/2.png'
import balaiPage3 from '../assets/Projects/Sample Pages/balai mario/3.png'
import balaiPage4 from '../assets/Projects/Sample Pages/balai mario/4.png'
import balaiPage5 from '../assets/Projects/Sample Pages/balai mario/5.png'
import balaiPage6 from '../assets/Projects/Sample Pages/balai mario/6.png'
// #endgion

// #region Raztapahan Pages
import raztaPage1 from '../assets/Projects/Sample Pages/raztapahan/1.png'
import raztaPage2 from '../assets/Projects/Sample Pages/raztapahan/2.png'
import raztaPage3 from '../assets/Projects/Sample Pages/raztapahan/3.png'
import raztaPage4 from '../assets/Projects/Sample Pages/raztapahan/4.png'
import raztaPage5 from '../assets/Projects/Sample Pages/raztapahan/5.png'
import raztaPage6 from '../assets/Projects/Sample Pages/raztapahan/6.png'
// #endregion

// #region Entertainment Pages
import enterPage1 from '../assets/Projects/Sample Pages/entertainment/1.png';
import enterPage2 from '../assets/Projects/Sample Pages/entertainment/2.png';
import enterPage3 from '../assets/Projects/Sample Pages/entertainment/3.jpg';
import enterPage4 from '../assets/Projects/Sample Pages/entertainment/4.jpg';
import enterPage5 from '../assets/Projects/Sample Pages/entertainment/5.jpg';
import enterPage6 from '../assets/Projects/Sample Pages/entertainment/6.jpg';
// #endregion


// #region Homeverse Pages
import homePage1 from '../assets/Projects/Sample Pages/homeverse/1.png';
import homePage2 from '../assets/Projects/Sample Pages/homeverse/2.png';
import homePage3 from '../assets/Projects/Sample Pages/homeverse/3.png';
import homePage4 from '../assets/Projects/Sample Pages/homeverse/4.png';
import homePage5 from '../assets/Projects/Sample Pages/homeverse/5.png';
import homePage6 from '../assets/Projects/Sample Pages/homeverse/6.png';
// #endregion

// #region Weather app Pages
import weatherPage1 from '../assets/Projects/Sample Pages/weather app/1.png';
import weatherPage2 from '../assets/Projects/Sample Pages/weather app/2.png';
import weatherPage3 from '../assets/Projects/Sample Pages/weather app/3.png';
import weatherPage4 from '../assets/Projects/Sample Pages/weather app/4.png';
import weatherPage5 from '../assets/Projects/Sample Pages/weather app/5.png';
import weatherPage6 from '../assets/Projects/Sample Pages/weather app/6.png';
// #endregion

export interface ProjectType {
    imgProj: string,
    url: string, 
    title: string,
    category: string,
    description: string,
    imgsSample: string[]
}

const CreateProjectInfo = ({ imgProj, url, title, category, description, imgsSample }: ProjectType) => {
    return ({ imgProj, url, title, category, description, imgsSample })
}

const Projects: ProjectType[] = [
   CreateProjectInfo({ 
      imgProj: balaiMarioBg,
      url: "https://balai-mario.onrender.com/",
      title: "Balai Mario",
      category: "Ecommerce Website",
      description: "A web app that enables users to order or reserve their favorite food at Balai Mario with an extensive features such as user accounts handling and online payment", imgsSample: [balaiPage1,balaiPage2, balaiPage3, balaiPage4, balaiPage5, balaiPage6]
   }),
    CreateProjectInfo({ 
        imgProj: comfoodyBg,
        url: "https://comfoody.onrender.com/",
        title: "Comfoody",
        category: "Ecommerce Website",
        description: "An E-Commerce website that can handle multiple requests and orders of users. Admin can alter the items and monitor every user and order in this online shop. Visit and Explore the stunning desigs abd efficient functionalities!", imgsSample: [comPage1, comPage2, comPage3, comPage4, comPage5, comPage6]
     }),
     CreateProjectInfo({ 
      imgProj: raztapahanBg,
      url: "https://raztapahan-static.onrender.com/",
      title: "Raztapahan",
      category: "Franchising Website",
      description: "A Franchising Website designed to showcase multiple franchise opportunities and attract potential partners. Business owners can easily update franchise details, customize content, and highlight brand strengths to engage future franchisees. Visit and explore the sleek design and powerful features that bring your brand’s expansion to life!", imgsSample: [raztaPage1, raztaPage2, raztaPage3, raztaPage4, raztaPage5, raztaPage6]
   }),
     CreateProjectInfo({ 
        imgProj: entertainmentBg,
        url: "https://entertainment-web-app-5k9k.onrender.com/",
        title: "Entertainify ",
        category: "Entertainment Web App",   
        description: "A web app that lets users explore for the latest movies, shows, and events with ease. Packed with essential features including user account management, and an optimized data structure for a smooth entertainment experience.", imgsSample: [enterPage1, enterPage2, enterPage3, enterPage4, enterPage5, enterPage6]
     }),
     CreateProjectInfo({ 
        imgProj: homeverseBg,
        url: "https://homeverse.onrender.com/",
        title: "Homeverse",
        category: "Real-Estate Website",description: "A real estate web app that showcases property listings, project details, and investment opportunities to potential buyers and investors. Features include detailed property information, high-quality images, location maps, and inquiry forms to help users make informed decisions.", imgsSample: [homePage1, homePage2, homePage3, homePage4, homePage5, homePage6]
     }),
     CreateProjectInfo({ 
        imgProj: weatherBg,
        url: "https://weather-web-app-sm3m.onrender.com/",
        title: "Weathery",
        category: "Weather Web App", description: "A dynamic weather web app that provides real-time updates on temperature, wind speed, humidity, and atmospheric pressure. Includes a visual statistical graph, cloud status tracking, and an interactive calendar to help users monitor weather patterns over time with clarity and precision.", imgsSample: [weatherPage1, weatherPage2, weatherPage3, weatherPage4, weatherPage5, weatherPage6]
     }),
]


export default Projects;