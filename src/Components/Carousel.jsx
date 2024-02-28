import { useEffect, useState } from "react";
import images from "../../public/assets/JSON/Images.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prev = () =>
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);

  useEffect(() => {
    const next = () =>
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    const slideInterval = setInterval(next, 2000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <div className="flex relative overflow-hidden max-w-4xl ">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img) => {
          return <img src={img.url} key={img.id}></img>;
        })}
      </div>

      {/* <div className="absolute w-[100%] h-[100%] flex justify-between items-center ">
        <button>
          <ChevronLeft size={200}></ChevronLeft>
        </button>
        <button>
          <ChevronRight size={200}></ChevronRight>
        </button>
      </div> */}
    </div>
  );
}

export default Carousel;
