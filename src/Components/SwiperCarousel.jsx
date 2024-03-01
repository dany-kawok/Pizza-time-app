import { register } from "swiper/element/bundle";
import images from "../../public/assets/JSON/Images.json";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { useEffect, useRef } from "react";

register();

export const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,

      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            
            width: 10px;
            height: 10px;
            color: white;
          }
          .swiper-pagination-bullet{
            width: 3px;
            height: 3px;
            visibility: hidden;            background-color: white;
            
          }
          @media (min-width: 600px) {
            .swiper-button-next,
            .swiper-button-prev {
              width: 100px;
              height: 100px;
              color: white;
            }
            .swiper-pagination-bullet {
              width: 15px;
              height: 15px;
              visibility: visible;              background-color: white;
            }
          }
          
          
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <swiper-container ref={swiperRef} slides-per-view="1" init="false">
      {images.map((img) => {
        return (
          <swiper-slide key={img.id}>
            <img src={img.url} style={{ width: "69%", margin: "0 auto" }} />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};
