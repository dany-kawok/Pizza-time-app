/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import images from "../../public/assets/JSON/Images.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Carousel({ autoSlide = false, autoSlideInterval = 2000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prev = () =>
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  const next = () =>
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  useEffect(() => {
    const next = () =>
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, currentSlide]);
  return (
    <div className="flex justify-center items-center">
      <div className="overflow-hidden max-w-4xl ">
        <div
          className="flex transition-transform   ease-in-out duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img) => {
            return <img src={img.url} key={img.id}></img>;
          })}
        </div>
      </div>
      <div className="absolute w-[100%] h-[100%] flex justify-between items-center ">
        <button>
          <ChevronLeft
            size={200}
            className="text-white"
            onClick={prev}
          ></ChevronLeft>
        </button>
        <button>
          <ChevronRight
            size={200}
            className="text-white"
            onClick={next}
          ></ChevronRight>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
