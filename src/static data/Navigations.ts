
/* Menus Images */
import homeIcon from '../assets/UpperNav/home-dark.png';
import toolsIcon from '../assets/UpperNav/tools-dark.png';
import computerIcon from '../assets/UpperNav/computer-dark.png';
import personalInfo from '../assets/UpperNav/personal-info-dark.png'
import medalIcon from '../assets/UpperNav/medal-dark.png'
import goalsIcon from '../assets/UpperNav/goals.png';



export interface Navigation  {
    imgSrc: string, category: string, routeID: string
}


const CreateNavigation = (imgSrc: string, category: string, routeID: string):Navigation  => {

    return (
        {
            imgSrc, category, routeID
        }
    )
}

const upperNavigations:Navigation[]  = [
    CreateNavigation(homeIcon, "Home", "home"),
    CreateNavigation(toolsIcon, "Services", "services"),
    CreateNavigation(computerIcon, "Projects", "recent-projects"),
    CreateNavigation(personalInfo, "About Me", "personal-info"),
    CreateNavigation(medalIcon, "Certificates", "certificates" ),
    CreateNavigation(goalsIcon, "Goals", "goals"),    
]

export default upperNavigations;