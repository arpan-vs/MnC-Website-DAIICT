import React, { useCallback, useRef, useContext, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import '../css/News.css';
import NewsEventContext from '../context/news_events/NewsEventContext';

const NewsEventsHome = () => {

    const context = useContext(NewsEventContext);
    const { news, getNews } = context;

    useEffect(() => {
        getNews();
        // eslint-disable-next-line
    }, []);
    // var newsAll = [
    //     {
    //         id: 1,
    //         title: "1 Mathematics & Computing Engineering is an amalgamatioalknsddddddddnklcnalscanclnanclanlncslnalkn of mathematics with computer science",
    //         dates: new Date(2022, 11, 2),
    //     },
    //     {
    //         id: 2,
    //         title: "2 Mathematic & Computing Engineering is an amalgamation of mathematics with computer science",
    //         dates: new Date(2022, 1, 25),
    //     },
    //     {
    //         id: 3,
    //         title: "3 Mathematics & Computing Engineering is a amalgamation of mathematics with computer science",
    //         dates: new Date(2020, 11, 2),
    //     },
    //     {
    //         id: 4,
    //         title: "4 Mathematics & Computing Engineeng is an amalgamation of mathematics with computer science",
    //         dates: new Date(2021, 1, 25),
    //     },
    //     {
    //         id: 5,
    //         title: "5 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
    //         dates: new Date(2032, 11, 25),
    //     },
    //     {
    //         id: 6,
    //         title: "6 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
    //         dates: new Date(2012, 11, 25),
    //     },
    //     {
    //         id: 7,
    //         title: "7 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
    //         dates: new Date(2002, 11, 25),
    //     },
    //     {
    //         id: 8,
    //         title: "8 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
    //         dates: new Date(2000, 11, 25),
    //     },
    // ];

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
        <>  <div className="container">
            <div className='news-container container-sm'>
                <div className='news-title'>
                    <div>
                        News &amp; Events
                    </div>
                    <div className='slider-icons'>
                        <Link to='/news' className='view-all-news'>
                            View All
                            <MdChevronRight size={30} className="right-slider-icon" onClick={handleNext} />
                        </Link>
                        <MdChevronLeft size={40} className="left-slider-icon" onClick={handlePrev} />
                        <MdChevronRight size={40} className="right-slider-icon" onClick={handleNext} />
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    loop={true}
                    loopFillGroupWithBlank={false}
                    autoplay={{
                        delay: 4000,
                        // disableOnInteraction: true,
                    }}
                    ref={sliderRef}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    {[...news].reverse().map((news1) => {
                        return (
                            <SwiperSlide>

                                <div className='news-card' key={news1._id}>
                                    <a href='#' className='news-link'>
                                        <div className="news-slider-title">
                                            {news1.title}
                                            <div className="news-date">
                                                Date : {new Date(news1.date).toLocaleDateString()}
                                            </div>

                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
        </>
    )
}

export default NewsEventsHome
