import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./PhotoSlider.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDataFromSlug } from "@/app/products-data";

export const PhotoSlider = ({ slug }: { slug: string }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>(
    null as unknown as SwiperType
  );

  const images = useDataFromSlug(slug).sliderPhoto;

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full min-h-[520px] rounded-3xl text-land-violet"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="max-h-48 w-full rounded-2xl">
            <img src={image} className="rounded-2xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
