import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Navbar from "./Navbar";

gsap.registerPlugin(SplitText);

const Hero = ({ animate }) => {
  useGSAP(() => {
    if (animate) {
      const heroSplit = SplitText.create("#hero-footer", { type: "lines" });

      const tl = gsap.timeline();
      tl.from("#heading", {
        y: 150,
        opacity: 0,
        duration: 1.6,
        ease: "expo.out"
      }).from(
        heroSplit.lines,
        {
          y: 100,
          opacity: 0,
          duration: 2,
          stagger: 0.2,
          ease: "expo.out"
        },
        "-=1"
      );
    }
  }, [animate]); // runs again when animate changes

  return (
    <section
      id="Hero"
      className="bg-[url('/img/section2.avif')] bg-cover h-screen relative overflow-y-hidden"
    >
      <Navbar />
      <div className="flex flex-col justify-between py-10 h-full sm:px-10 px-5">
        <div className="mt-15">
          <p
            id="heading"
            className="font-details text-black/35 font-black text-3xl sm:text-7xl"
          >
            The Journey to a{" "}
            <b className="font-hello max-sm:text-4xl text-white">PERFECTION</b>
          </p>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <p
            id="hero-footer"
            className="text-white hidden sm:block lg:mt-10"
          >
            <b className="font-bold">
              Experience the new <span className="font-hello">911 GT3 RS</span>{" "}
              in top form{" "}
            </b>
            <br /> <span className="font-thin">
              {" "}
              - with increased race track performance
            </span>
          </p>
          <p
            id="hero-footer"
            className="sm:text-2xl text-lg sm:text-end text-white/65"
          >
            Top <b className="font-hello text-white">performance</b> requires{" "}
            <br />
            more than perfect conditions <br />
            especially just luck.
          </p>
          <p
            id="hero-footer"
            className="text-white block sm:hidden text-xs mt-5 lg:mt-10"
          >
            <b>
              Experience the new{" "}
              <span className="font-hello text-xs">911 GT3 RS</span> in top form{" "}
            </b>
            <br /> <span className="font-thin">
              {" "}
              - with increased race track performance
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
