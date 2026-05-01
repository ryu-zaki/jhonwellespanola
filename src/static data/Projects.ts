
import comfoodyBg from '../assets/Projects/comfoody-bg.png';
import entertainmentBg from '../assets/Projects/entertainment-website-bg.png';
import homeverseBg from '../assets/Projects/homeverse-bg.png';
import attendeaseBg from '../assets/Projects/attendease-bg.png';
import balaiMarioBg from '../assets/Projects/balai-mario-bg.png'
import raztapahanBg from '../assets/Projects/raztapahan-bg.png';
import pawlarBg from '../assets/Projects/pawlar-bg.png';

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
import pawlarPage1 from '../assets/Projects/Sample Pages/pawlar/1.png';
import pawlarPage2 from '../assets/Projects/Sample Pages/pawlar/2.png';
import pawlarPage3 from '../assets/Projects/Sample Pages/pawlar/3.png';
import pawlarPage4 from '../assets/Projects/Sample Pages/pawlar/4.png';
import pawlarPage5 from '../assets/Projects/Sample Pages/pawlar/5.png';
import pawlarPage6 from '../assets/Projects/Sample Pages/pawlar/6.png';

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
import attendeasePage1 from '../assets/Projects/Sample Pages/attendease/1.png';
import attendeasePage2 from '../assets/Projects/Sample Pages/attendease/2.png';
import attendeasePage3 from '../assets/Projects/Sample Pages/attendease/3.png';
import attendeasePage4 from '../assets/Projects/Sample Pages/attendease/4.png';
import attendeasePage5 from '../assets/Projects/Sample Pages/attendease/5.png';
import attendeasePage6 from '../assets/Projects/Sample Pages/attendease/6.png';

// #endregion

export interface ProjectType {
    imgProj: string,
    url: string, 
    title: string,
    category: string,
    description: string,
    imgsSample: string[],
    source: string
}

const CreateProjectInfo = ({ imgProj, url, title, category, description, imgsSample, source }: ProjectType) => {
    return ({ imgProj, url, title, category, description, imgsSample, source })
}

const Projects: ProjectType[] = [
    CreateProjectInfo({ 
      imgProj: pawlarBg,
      url: "https://pawlar-website.onrender.com/",
      title: "Pawlar",
      category: "Iot-Based Project",
      description: "An integrated IoT system for smart pet management and wellness where owners can enhance pet care through a smart collar that enables real-time GPS tracking, secure pet door access, and an intelligent feeder that generates personalized schedules based on the pet's behavioral data.", 
      imgsSample: [pawlarPage1,pawlarPage2, pawlarPage3, pawlarPage4, pawlarPage5, pawlarPage6],
      source: "https://github.com/ryu-zaki/Pawlar"
   }),
      CreateProjectInfo({ 
        imgProj: attendeaseBg,
        url: "https://entertainment-web-app-5k9k.onrender.com/",
        title: "AttendEase",
        category: "Employee Management System",   
        description: "An Employee Management System with Payroll Integration, using Visual Basic and the .NET Framework for modern offices and organizations. The proposed system will be developed as a Windows Forms Application and will use SQL Server 2022 for database management.", imgsSample: [attendeasePage1, attendeasePage2, attendeasePage3, attendeasePage4, attendeasePage5, attendeasePage6],
        source: "https://github.com/ryu-zaki/Entertainment-Web-App"
       }),
     CreateProjectInfo({ 
      imgProj: raztapahanBg,
      url: "https://raztapahan-static.onrender.com/",
      title: "Raztapahan",
      category: "Franchising Website",
      description: "A Franchising Website designed to showcase multiple franchise opportunities and attract potential partners. Business owners can easily update franchise details, customize content, and highlight brand strengths to engage future franchisees. Visit and explore the sleek design and powerful features that bring your brand’s expansion to life!", imgsSample: [raztaPage1, raztaPage2, raztaPage3, raztaPage4, raztaPage5, raztaPage6],
      source: "https://github.com/ryu-zaki/raztapahan-static.git"
   }),
     CreateProjectInfo({ 
        imgProj: comfoodyBg,
        url: "https://comfoody.onrender.com/",
        title: "Comfoody",
        category: "Ecommerce Website",
        description: "An E-Commerce website that can handle multiple requests and orders of users. Admin can alter the items and monitor every user and order in this online shop. Visit and Explore the stunning desigs abd efficient functionalities!", imgsSample: [comPage1, comPage2, comPage3, comPage4, comPage5, comPage6]
        ,source: "https://github.com/ryu-zaki/Comfoody"
      }),
       CreateProjectInfo({ 
      imgProj: balaiMarioBg,
      url: "https://balai-mario.onrender.com/",
      title: "Balai Mario",
      category: "Ecommerce Website",
      description: "A web app that enables users to order or reserve their favorite food at Balai Mario with an extensive features such as user accounts handling and online payment", imgsSample: [balaiPage1,balaiPage2, balaiPage3, balaiPage4, balaiPage5, balaiPage6],
      source: "https://github.com/ryu-zaki/Balai-Mario"
   }),
     CreateProjectInfo({ 
        imgProj: homeverseBg,
        url: "https://homeverse.onrender.com/",
        title: "Homeverse",
        category: "Real-Estate Website",description: "A real estate web app that showcases property listings, project details, and investment opportunities to potential buyers and investors. Features include detailed property information, high-quality images, location maps, and inquiry forms to help users make informed decisions.", imgsSample: [homePage1, homePage2, homePage3, homePage4, homePage5, homePage6],
        source: "https://github.com/ryu-zaki/Homeverse"
     }),
]


export default Projects;