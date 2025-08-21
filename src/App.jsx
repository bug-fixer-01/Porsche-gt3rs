import Details from "./component/Details"
import Hero from "./component/Hero"
import Specification from "./component/Specification"
import { ScrollTrigger,SplitText } from "gsap/all"
import gsap from "gsap"
import Gallery from "./component/Gallery"
import Footer from "./component/Footer"
import { Toaster } from 'react-hot-toast';


gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
   <main>
    <Hero/>
    <Details/>
    <Specification/>
    <Gallery/>
    <Footer/>
    <Toaster/>
   </main>
  )
}

export default App