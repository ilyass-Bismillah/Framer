import AboutSection from './Components/AboutSection'
import CustomersSection from './Components/CustomersSection'
import FeaturesSection from './Components/FeaturesSection'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Logos from './Components/Logos'
import SignSection from './Components/SignSection'
import UpdatesSection from './Components/UpdatesSection'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Logos/>
      <AboutSection/>
      <FeaturesSection/>
      <CustomersSection/>
      <UpdatesSection/>
      <SignSection/>
      <Footer/>
    </div>
  )
}

export default App
