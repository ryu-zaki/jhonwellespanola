
import './App.css'
import HeroSection from './components/HeroSection'
import RecentProject from './components/RecentProjects'
import ServicesSection from './components/ServicesSection'
import UpperNavigation from './components/UpperNavigation'

function App() {


  return (
    <div className='container mx-auto px-2 text-dark lg:px-6 2xl:px-10'>
      <UpperNavigation />
      <div className='flex flex-col gap-16 lg:gap-32 xl:gap-48'> 
       <HeroSection />
       <ServicesSection />
       <RecentProject />
      </div>
      
    </div>
  )
}

export default App
