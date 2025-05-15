import responsiveCert from '../assets/Certificates/Responsive web design.webp';
import dataStructure from '../assets/Certificates/Data Structures.webp';
import { DataAlgoComp, ResponsivDesignComp } from './CustomComponents.tsx';
import { ReactElement } from 'react';

interface ScopeData {
    title: string;
    subDescription: string
}

enum FlexDirection {
    Normal, Reverse
}

interface CertData {
    img: string;
    description: ReactElement;
    scope: ScopeData[];
    direction: FlexDirection;
}


const createCertData = ({ img, description, scope, direction }: CertData) => {

    return ({
        img, description, scope, direction
    })
}

const certificatesData = [
    createCertData({
        img: responsiveCert, 
        description: <ResponsivDesignComp />,
        direction: FlexDirection.Normal,
        scope: [
           {
            subDescription: "Structuring and styling web pages for optimal performance.",
            title: "HTML & CSS Fundamentals"
           },

           {
            subDescription: "Creating flexible and modern layouts.",
            title: "Flexbox & CSS Grid"
           }, 
        ]}),
        
        createCertData({img: dataStructure, 
             description: <DataAlgoComp />,
             direction: FlexDirection.Reverse,
             scope: [
                {
                    subDescription: "Arrays, linked lists, stacks, queues, hash tables, trees, and graphs.",
                    title: "Data Structures"
                   },
        
                   {
                    subDescription: "Sorting, searching, recursion, dynamic programming, and graph traversal.",
                    title: "Flexbox & CSS Grid"
                   }, 
             ]}),
]

export type { CertData };
export {FlexDirection}

export default certificatesData;
