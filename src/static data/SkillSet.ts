
import htmlIcon from '../assets/Personal Info/Skills/Small/html-icon.png';
import cssIcon from '../assets/Personal Info/Skills/Small/css-icon.png';
import jsIcon from '../assets/Personal Info/Skills/Small/javascript-icon.png';
import reactIcon from '../assets/Personal Info/Skills/Small/react-icon.png';
import tailwindIcon from '../assets/Personal Info/Skills/Small/tailwind-icon.png';

import nodeIcon from '../assets/Personal Info/Skills/Small/nodejs-icon.png';
import expressIcon from '../assets/Personal Info/Skills/Small/express-icon.png';
import ejsIcon from '../assets/Personal Info/Skills/Small/ejs-icon.png';

import mysqlIcon from '../assets/Personal Info/Skills/Small/mysql-icon.png';
import mongoIcon from '../assets/Personal Info/Skills/Small/mongodb-icon.png';
import postgresIcon from '../assets/Personal Info/Skills/Small/postgre-icon.png';
import typescriptIcon from '../assets/Personal Info/Skills/Small/typescript-icon.png';
import gitIcon from '../assets/Personal Info/Skills/Small/git-icon.png';
import figmaIcon from '../assets/Personal Info/Skills/Small/figma-icon.png';

/* Large Icons */
import htmlLarge from '../assets/Personal Info/Skills/Large/html-icon.png';
import cssLarge from '../assets/Personal Info/Skills/Large/css-icon.png';
import jslLarge from '../assets/Personal Info/Skills/Large/javascript-icon.png'
import reactLarge from '../assets/Personal Info/Skills/Large/react-icon.png'
import tailwindLarge from '../assets/Personal Info/Skills/Large/tailwind-icon.png';;

import nodeLarge from '../assets/Personal Info/Skills/Large/node-icon.png';
import expressLarge from '../assets/Personal Info/Skills/Large/express-icon.png';
import ejsLarge from '../assets/Personal Info/Skills/Large/ejs-icon.png';
import typescriptLarge from '../assets/Personal Info/Skills/Large/typescript-icon.png';

import postgresLarge from '../assets/Personal Info/Skills/Large/postgres-icon.png';
import mysqlLarge from '../assets/Personal Info/Skills/Large/mysql-icon.png';
import mongoLarge from '../assets/Personal Info/Skills/Large/mongodb-icon.png';
import gitLarge from '../assets/Personal Info/Skills/Large/git-icon.png';
import figmaLarge from '../assets/Personal Info/Skills/Large/figma-icon.png';


interface SkillCategory {
  category: string;
  skills: {name: string, imgIcon: string, imgLarge: string}[];
}


const CreateSkillCategory = ({ category, skills }: SkillCategory) => {
    return ({category, skills})
}

 const SkillSet: SkillCategory[] = [ 
    CreateSkillCategory({category: "Front-end", skills: [
        { name: "HTML5", imgIcon: htmlIcon, imgLarge: htmlLarge },
        { name: "CSS", imgIcon: cssIcon, imgLarge: cssLarge },
        { name: "Javascript", imgIcon: jsIcon, imgLarge: jslLarge },
        { name: "ReactJS", imgIcon: reactIcon, imgLarge: reactLarge },
        { name: "TailwindCSS", imgIcon: tailwindIcon, imgLarge: tailwindLarge },
        { name: "Typescript", imgIcon: typescriptIcon, imgLarge: typescriptLarge },
    ]}),
    CreateSkillCategory({category: "Back-end", skills: [
        { name: "NodeJS", imgIcon: nodeIcon, imgLarge: nodeLarge },
        { name: "ExpressJS", imgIcon: expressIcon, imgLarge: expressLarge },
        /* { name: "EJS", imgIcon: ejsIcon, imgLarge: ejsLarge }, */
        { name: "MySQL", imgIcon: mysqlIcon, imgLarge: mysqlLarge },
        { name: "PostgreSQL", imgIcon: postgresIcon, imgLarge: postgresLarge },
        { name: "MongoDB", imgIcon: mongoIcon, imgLarge: mongoLarge },
    ]}),
    CreateSkillCategory({category: "Database", skills: [
        { name: "GIT", imgIcon: gitIcon, imgLarge: gitLarge },
        { name: "Figma", imgIcon: figmaIcon, imgLarge: figmaLarge },
        { name: "EJS", imgIcon: ejsIcon, imgLarge: ejsLarge },
    ]}),
 ]

 export default SkillSet