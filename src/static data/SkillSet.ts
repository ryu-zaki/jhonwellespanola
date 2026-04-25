
import htmlIcon from '../assets/Personal Info/Skills/Small/html-icon.png';
import cssIcon from '../assets/Personal Info/Skills/Small/css-icon.png';
import jsIcon from '../assets/Personal Info/Skills/Small/javascript-icon.png';
import reactIcon from '../assets/Personal Info/Skills/Small/react-icon.png';
import tailwindIcon from '../assets/Personal Info/Skills/Small/tailwind-icon.png';
import angularIcon from '../assets/Personal Info/Skills/Small/angular-icon.png';

import nodeIcon from '../assets/Personal Info/Skills/Small/nodejs-icon.png';
import expressIcon from '../assets/Personal Info/Skills/Small/express-icon.png';
import ejsIcon from '../assets/Personal Info/Skills/Small/ejs-icon.png';

import mysqlIcon from '../assets/Personal Info/Skills/Small/mysql-icon.png';
import mongoIcon from '../assets/Personal Info/Skills/Small/mongodb-icon.png';
import postgresIcon from '../assets/Personal Info/Skills/Small/postgre-icon.png';
import typescriptIcon from '../assets/Personal Info/Skills/Small/typescript-icon.png';
import gitIcon from '../assets/Personal Info/Skills/Small/git-icon.png';
import figmaIcon from '../assets/Personal Info/Skills/Small/figma-icon.png';

import javaIcon from '../assets/Personal Info/Skills/Small/java-icon.png';
import javaLarge from '../assets/Personal Info/Skills/Large/java-icon.png';
import springIcon from '../assets/Personal Info/Skills/Small/spring-boot-icon.png';
import springLarge from '../assets/Personal Info/Skills/Large/spring-boot-icon.png';
import csharpIcon from '../assets/Personal Info/Skills/Small/c-sharp-icon.png';
import csharpLarge from '../assets/Personal Info/Skills/Large/c-sharp-icon.png';
import redisIcon from '../assets/Personal Info/Skills/Small/redis-icon.png';
import redisLarge from '../assets/Personal Info/Skills/Large/redis-icon.png';
import hivemqIcon from '../assets/Personal Info/Skills/Small/hivemq-icon.png';
import hivemqLarge from '../assets/Personal Info/Skills/Large/hivemq-icon.png';
import prismaIcon from '../assets/Personal Info/Skills/Small/prisma-icon.png';
import prismaLarge from '../assets/Personal Info/Skills/Large/prisma-icon.png';
import dockerIcon from '../assets/Personal Info/Skills/Small/docker-icon.png';
import dockerLarge from '../assets/Personal Info/Skills/Large/docker-icon.png';
import postmanIcon from '../assets/Personal Info/Skills/Small/postman-icon.png';
import postmanLarge from '../assets/Personal Info/Skills/Large/postman-icon.png';
import jestIcon from '../assets/Personal Info/Skills/Small/jest-icon.png';
import jestLarge from '../assets/Personal Info/Skills/Large/jest-icon.png';

/* Large Icons */
import htmlLarge from '../assets/Personal Info/Skills/Large/html-icon.png';
import cssLarge from '../assets/Personal Info/Skills/Large/css-icon.png';
import jslLarge from '../assets/Personal Info/Skills/Large/javascript-icon.png'
import reactLarge from '../assets/Personal Info/Skills/Large/react-icon.png'
import tailwindLarge from '../assets/Personal Info/Skills/Large/tailwind-icon.png';;
import angularLarge from '../assets/Personal Info/Skills/Large/angular-icon.png';

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
        { name: "Angular", imgIcon: angularIcon, imgLarge: angularLarge }
    ]}),
    CreateSkillCategory({category: "Back-end", skills: [
        { name: "NodeJS", imgIcon: nodeIcon, imgLarge: nodeLarge },
        { name: "ExpressJS", imgIcon: expressIcon, imgLarge: expressLarge },
        
         { name: "MySQL", imgIcon: mysqlIcon, imgLarge: mysqlLarge },
        { name: "PostgreSQL", imgIcon: postgresIcon, imgLarge: postgresLarge },
        { name: "MongoDB", imgIcon: mongoIcon, imgLarge: mongoLarge },
        { name: "JAVA", imgIcon: javaIcon, imgLarge: javaLarge },
        { name: "Spring Boot", imgIcon: springIcon, imgLarge: springLarge },
        { name: "C#", imgIcon: csharpIcon, imgLarge: csharpLarge },
        { name: "REDIS", imgIcon: redisIcon, imgLarge: redisLarge },
        { name: "HIVEMQ", imgIcon: hivemqIcon, imgLarge: hivemqLarge },
        { name: "Prisma", imgIcon: prismaIcon, imgLarge: prismaLarge },
        
    ]}),
    CreateSkillCategory({category: "Tools", skills: [
        { name: "GIT", imgIcon: gitIcon, imgLarge: gitLarge },
        { name: "Figma", imgIcon: figmaIcon, imgLarge: figmaLarge },
        { name: "EJS", imgIcon: ejsIcon, imgLarge: ejsLarge },
        { name: "Docker", imgIcon: dockerIcon, imgLarge: dockerLarge },
        { name: "Postman", imgIcon: postmanIcon, imgLarge: postmanLarge },
         { name: "Jest", imgIcon: jestIcon, imgLarge: jestLarge },
    ]}),
 ]

 export default SkillSet