import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowForwardIos,ArrowBackIos } from "@mui/icons-material";

const NextBtn = (props) =>{
    const {className, onClick} = props;
    return(
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{color:"black"}} className="m:0" />
        </div>
    );
};
const PreviousBtn = (props) =>{
    const {className, onClick} = props; 
    return(
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{color:"black" }} />
        </div>
    );
};
const Slide = () =>(
          <>
              
      <div style={{margin:"10px"}}>
        <Slider  
            autoplay
            autoplaySpeed={4000}
            infinite
           
            pauseOnHover = {false}
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
        >
        <div>
        <Image src="/swipe.jpg" width={1333} height={290} alt="swipe" />
        </div>
        <div>
        <Image src="/swipe_aliya.jpg" width={1333} height={290} alt="swipe" />
        </div>
        <div>
        <Image src="/swipe_flight.jpg" width={1333} height={290} alt="swipe" />
        </div>
        <div>
        <Image src="/swipe_home.jpg" width={1333} height={290} alt="swipe" />
        </div>
        <div>
            <Image src="/swipe_plane.jpg" width={1333} height={290} alt="swipe" />
        </div>    
        </Slider>
      </div>  
          </>
)
export default Slide;