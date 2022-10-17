import React,{useRef,useState} from "react";
// Import Swiper React components
import {Swiper,SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel-styles.css";

// import required modules
import {Pagination} from "swiper";

import PortfolioCarouselSlide from './portfolio-carousel-slide';

export default function Carousel() {

    return (
        <>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <PortfolioCarouselSlide />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
