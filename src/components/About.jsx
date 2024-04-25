import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

const About = () => {
  const items = [
    { src: "img/silder2.png" },
    { src: "img/silder1.png" },
    { src: "img/silder3.png" },
    { src: "img/silder4.png" },
    { src: "img/silder5.png" },
    { src: "img/silder6.png" }
  ];
  return (
    <Swiper
    effect={"fade"}
    centeredSlides={true}
    fadeEffect= {
      {crossFade: false}
    }
    autoplay={{
      delay: 1000,
      disableOnInteraction: true
    }}
    loop={true}
    modules={[EffectFade,Autoplay]}
    className="mySwiper rightside"
    
  >
    {items.map((item, idx) => {
      return (
        <SwiperSlide key={idx}>
          <img src={item.src} alt='slideImg' />
        </SwiperSlide>
      );
    })}
  </Swiper>
  )
}

export default About