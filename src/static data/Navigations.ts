
/* Menus Images */
import homeIcon from '../assets/UpperNav/home-dark.png';
import toolsIcon from '../assets/UpperNav/tools-dark.png';
import computerIcon from '../assets/UpperNav/computer-dark.png';
import personalInfo from '../assets/UpperNav/personal-info-dark.png'
import medalIcon from '../assets/UpperNav/medal-dark.png'
import goalsIcon from '../assets/UpperNav/goals.png';

/* Light */
import homeLight from '../assets/UpperNav/home-light.png';
import toolsLight from '../assets/UpperNav/tools-light.png';
import computerLight from '../assets/UpperNav/computer-light.png';
import personalInfoLight from '../assets/UpperNav/personal-info-light.png';
import medalLight from '../assets/UpperNav/medal-light.png';
import goalsLight from '../assets/UpperNav/goals-light.png';



export interface Navigation  {
    imgSrc: string, category: string, routeID: string, darkImg: string
}


const CreateNavigation = (imgSrc: string, category: string, routeID: string, darkImg: string):Navigation  => {

    return (
        {
            imgSrc, category, routeID, darkImg
        }
    )
}

const upperNavigations:Navigation[]  = [
    CreateNavigation(homeIcon, "Home", "home", homeLight),
    CreateNavigation(toolsIcon, "Services", "services", toolsLight),
    CreateNavigation(computerIcon, "Projects", "recent-projects", computerLight),
    CreateNavigation(personalInfo, "About Me", "personal-info", personalInfoLight),
    CreateNavigation(medalIcon, "Certificates", "certificates", medalLight ),
    CreateNavigation(goalsIcon, "Goals", "goals", goalsLight),    
]

export default upperNavigations;