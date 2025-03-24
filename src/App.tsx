
import './App.css'
import HeroSection from './components/HeroSection'
import UpperNavigation from './components/UpperNavigation'

function App() {


  return (
    <div className='container mx-auto px-2 text-dark lg:px-6 2xl:px-10'>
      <UpperNavigation />
      <HeroSection />
    </div>
  )
}

export default App
