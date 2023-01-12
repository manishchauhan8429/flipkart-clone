import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import   {   Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
 

const Slider = () =>(
          <>
              <Swiper
                    spaceBetween={0}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                     
                    modules={[Autoplay, Pagination,  Navigation]}
                    className="mySwiper"
                    >
        
        <SwiperSlide className="p-2"><Image src="/swipe.jpg" width={1333} height={290} alt="swipe" /></SwiperSlide>
        <SwiperSlide className="p-2"><Image src="/swipe_aliya.jpg" width={1333} height={290} alt="swipe" /></SwiperSlide>
        <SwiperSlide className="p-2"><Image src="/swipe_flight.jpg" width={1333} height={290} alt="swipe" /></SwiperSlide>
        <SwiperSlide className="p-2"><Image src="/swipe_home.jpg" width={1333} height={290} alt="swipe" /></SwiperSlide>
        <SwiperSlide className="p-2"><Image src="/swipe_plane.jpg" width={1333} height={290} alt="swipe" /></SwiperSlide>
      </Swiper>
          </>
)
export default Slider;