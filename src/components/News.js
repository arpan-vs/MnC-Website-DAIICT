import React, { useCallback, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import './News.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


// import required modules
import { Autoplay, Navigation } from "swiper";

const News = () => {

    var newsAll = [
        {
            id: 1,
            title: "1 Mathematics & Computing Engineering is an amalgamation of mathematics with computer science",
            dates: new Date(2022, 11, 2),
        },
        {
            id: 2,
            title: "2 Mathematic & Computing Engineering is an amalgamation of mathematics with computer science",
            dates: new Date(2022, 1, 25),
        },
        {
            id: 3,
            title: "3 Mathematics & Computing Engineering is a amalgamation of mathematics with computer science",
            dates: new Date(2020, 11, 2),
        },
        {
            id: 4,
            title: "4 Mathematics & Computing Engineeng is an amalgamation of mathematics with computer science",
            dates: new Date(2021, 1, 25),
        },
        {
            id: 5,
            title: "5 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
            dates: new Date(2032, 11, 25),
        },
        {
            id: 6,
            title: "6 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
            dates: new Date(2012, 11, 25),
        },
        {
            id: 7,
            title: "7 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
            dates: new Date(2002, 11, 25),
        },
        {
            id: 8,
            title: "8 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
            dates: new Date(2000, 11, 25),
        },
    ];

    // const navigationPrevRef = React.useRef(null)
    // const navigationNextRef = React.useRef(null)
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <>
            <div className='news-container'>
                <div className='news-title'>
                    <div>
                        News
                    </div>
                    <div className='slider-icons'>
                        <MdChevronLeft size={40} className="left-slider-icon" onClick={handlePrev} />
                        <MdChevronRight size={40} className="right-slider-icon" onClick={handleNext} />
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    ref={sliderRef}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    {newsAll.map((news) => {
                        return (
                            <SwiperSlide>

                                <div className='news-card' key={news.id}>
                                    <div className="news-slider-title">
                                        {news.title}
                                    </div>
                                    <div className="news-date">
                                        {new Date(news.dates).toDateString()}
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default News
