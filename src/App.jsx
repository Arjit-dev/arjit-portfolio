import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import Navbar from "./components/Navbar"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import Experiencesection from "./sections/Experiencesection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero />
    <ShowcaseSection />
    {/* <LogoSection /> */}
    <FeatureCards />
    <Experiencesection/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App