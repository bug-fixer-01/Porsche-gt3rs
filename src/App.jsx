import Details from "./component/Details"
import Hero from "./component/Hero"
import Specification from "./component/Specification"
import { ScrollTrigger,SplitText } from "gsap/all"
import gsap from "gsap"
import Gallery from "./component/Gallery"
import Footer from "./component/Footer"
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react"; 


gsap.registerPlugin(ScrollTrigger, SplitText);

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-[9999]">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-600">Loading...</p>
    </div>
  );
};

const App = () => {
 const [loading, setLoading] = useState(true);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    const imagePromises = images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve();
          else {
            img.onload = resolve;
            img.onerror = resolve;
          }
        })
    );

    Promise.all([...imagePromises, document.fonts.ready]).then(() => {
      setLoading(false);
      setTimeout(() => setAnimateHero(true), 300); // delay for loader fade
    });
  }, []);


  return (
   <main>
    {loading && <Loader />}
    <Hero animate={animateHero}/>
    <Details/>
    <Specification/>
    <Gallery/>
    <Footer/>
    <Toaster/>
   </main>
  )
}

export default App