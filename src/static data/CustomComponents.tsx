import { useTheme } from "../components/ThemeContext";

export const ResponsivDesignComp = ( {} ) => {
    const { highlightClr } = useTheme();
    

    return <p className="details text-center md:text-left">Principles of <span className={`${highlightClr} poppins-semibold`}>responsive web design</span>, ensuring seamless and user-friendly experiences across all devices.</p>
} 

export const DataAlgoComp = () => {
    const { highlightClr } = useTheme();

    return <p className="details text-center md:text-left">Strong foundation in <span className={`${highlightClr} poppins-semibold`}>algorithms and data structures</span>, essential for writing efficient and scalable code.</p>
}