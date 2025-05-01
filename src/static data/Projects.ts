
import comfoodyBg from '../assets/Projects/comfoody-bg.png';
import entertainmentBg from '../assets/Projects/entertainment-website-bg.png';
import homeverseBg from '../assets/Projects/homeverse-bg.png';
import weatherBg from '../assets/Projects/weather-website-bg.png';

export interface ProjectType {
    imgProj: string,
    url: string, 
    title: string,
    category: string
}

const CreateProjectInfo = ({ imgProj, url, title, category }: ProjectType) => {
    return ({ imgProj, url, title, category })
}

const Projects: ProjectType[] = [
    CreateProjectInfo({ 
        imgProj: comfoodyBg,
        url: "https://comfoody.onrender.com/",
        title: "Comfoody",
        category: "Ecommerce Website"
     }),
     CreateProjectInfo({ 
        imgProj: entertainmentBg,
        url: "https://entertainment-web-app-5k9k.onrender.com/",
        title: "Entertainify ",
        category: "Entertainment Web App"
     }),
     CreateProjectInfo({ 
        imgProj: homeverseBg,
        url: "https://homeverse.onrender.com/",
        title: "Homeverse",
        category: "Real-Estate Website"
     }),
     CreateProjectInfo({ 
        imgProj: weatherBg,
        url: "https://weather-web-app-sm3m.onrender.com/",
        title: "Weathery",
        category: "Weather Web App"
     }),
]


export default Projects;