import { useState } from "react";
import { isMotionValue, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { imgLists, specLists } from "../constants";

const Gallery = () => {
  const [videoId, setVideo] = useState(0);
  const isMobile = window.innerWidth < 768;

  const itemCount = imgLists.length;
  const threshold = 100; // drag distance in px to change slide

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${(videoId !== itemCount - 1) || isMobile ? -100 * videoId : (-100 * videoId) + 55}%)`,
      duration: 0.6,
      ease: "expo.out"
    });
  }, [videoId]);

  return (
    <section id="gallery" className="h-full xl:px-20 px-6 py-10 overflow-hidden">
      {/* Header Section */}
      <div className="flex max-lg:flex-col max-sm:gap-3 justify-between lg:items-center mb-15">
        <span>04/<b>Gallery</b></span>
        <div className="flex flex-col">
          <span className="sm:text-3xl font-semibold">Some Shoot of The Beauty from the Beast</span>
          <span>European models shown. Vehicle shown is equipped with the optional roll-cage not available in the U.S.</span>
        </div>
      </div>

      {/* Draggable Slider */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -threshold && videoId < itemCount - 1) {
            setVideo(videoId + 1);
          } else if (info.offset.x > threshold && videoId > 0) {
            setVideo(videoId - 1);
          }
        }}
        className="flex  items-start cursor-grab active:cursor-grabbing"
      >
        {imgLists.map((list, i) => (
          <div key={i} id="slider" className="pr-5">
            <div className="image-carousel relative">
              <div
                className="w-full h-full rounded-xl flex-center overflow-hidden bg-center bg-cover"
                style={{ backgroundImage: `url(${list.img})` }}
              ></div>
              <div className="absolute right-0 bottom-0 w-full sm:px-10 px-3 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-xl text-white flex flex-col justify-center gap-4 items-start">
                <h1 className="text-3xl max-sm:text-lg font-semibold">{list.tag}</h1>
                <span className="sm:text-sm sm:w-[90%] text-xs">{list.heading}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>



      {/* Navigation Controls */}
      <div className="flex justify-center gap-10 mt-5">
        <button
          onClick={() => setVideo(videoId - 1)}
          disabled={videoId === 0}
          className={`rounded-lg text-4xl p-2 ${videoId === 0 ? "bg-none hover:cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <IoIosArrowRoundBack className={`${videoId === 0 ? "text-black/15" : "text-black"
            }`} />
        </button>
        <div className="flex-center gap-2 ">
          {imgLists.map((_, i) => (
            <div
              key={i}
              onClick={() => setVideo(i)}
              className={`h-2 cursor-pointer rounded-full transition-all ease-in-out duration-500 origin-center ${videoId === i ? "bg-black w-5" : "bg-black/35 w-2"
                }`}
            ></div>
          ))}
        </div>
        <button
          onClick={() => setVideo(videoId + 1)}
          disabled={videoId === itemCount - 1}
          className={`rounded-lg text-4xl p-2 ${videoId === itemCount - 1
            ? "bg-none hover:cursor-not-allowed "
            : "hover:bg-gray-100 cursor-pointer"
            }`}
        >
          <IoIosArrowRoundForward className={`${videoId === itemCount - 1 ? "text-black/15" : "text-black"}`} />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
