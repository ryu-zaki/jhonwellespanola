
import './App.css'
import HeroSection from './components/HeroSection'
import PersonalInfo from './components/PersonalInfo'
import RecentProject from './components/RecentProjects'
import ServicesSection from './components/ServicesSection'
import UpperNavigation from './components/UpperNavigation'
import Certificates from './components/Certificates'
import GoalsSection from './components/GoalsSection'
import Footer from './components/Footer'
import { Element } from 'react-scroll'
import { useTheme } from './components/ThemeContext'

function App() {
  
  const { theme } = useTheme();

  return (
    
    <div className='overflow-x-hidden'>
      
      <div className={`${theme === "Dark" && "scale-[3]"} fixed w-[100vh] rounded-full translate-y-1/2 aspect-square bg-dark -z-20 bottom-0 left-1/2 -translate-x-1/2`}></div>

 <div className={`container mx-auto px-2 ${theme === "Dark" ? "text-white" : "text-dark "} lg:px-6 2xl:px-10`}>
      <UpperNavigation />
      <div className='flex flex-col gap-16 md:gap-28 lg:gap-32 xl:gap-48'> 
       <Element name="home" className="w-full">
           <HeroSection />
       </Element>
       
       <Element name="services">
         <ServicesSection />
       </Element>

       <Element name="recent-projects">
         <RecentProject />
       </Element>

       <Element name="personal-info">
         <PersonalInfo />
       </Element>

       <Element name="certificates">
         <Certificates />
       </Element>

      <Element name="goals">
        <GoalsSection />    
      </Element>
      </div>
    </div>
    <Footer />
    </div>
   
    
    
  )
}

export default App
