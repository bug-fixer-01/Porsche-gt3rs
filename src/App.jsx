import Details from "./component/Details"
import Hero from "./component/Hero"
import Imagedetails from "./component/Imagedetails"
import Specification from "./component/Specification"
import { ScrollTrigger,SplitText } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  // const isMobile = window.innerWidth < 1500
  return (
   <main>
    <Hero/>
    <Details/>
    {/* {isMobile ? <Imagedetails/> : ""} */}
    <Specification/>
   </main>
  )
}

export default App