
/* Menus Images */
import homeIcon from '../assets/UpperNav/home-dark.png';
import toolsIcon from '../assets/UpperNav/tools-dark.png';
import computerIcon from '../assets/UpperNav/computer-dark.png';
import phoneIcon from '../assets/UpperNav/phone-flip-dark.png';

interface Navigation  {
    imgSrc: string, category: string
}


const CreateNavigation = (imgSrc: string, category: string):Navigation  => {

    return (
        {
            imgSrc, category
        }
    )
}

const upperNavigations:Navigation[]  = [
    CreateNavigation(homeIcon, "Home"),
    CreateNavigation(toolsIcon, "Skills"),
    CreateNavigation(computerIcon, "Projects"),
    CreateNavigation(phoneIcon, "Contacts"),   
]

export default upperNavigations;