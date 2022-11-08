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
                    <div className='batchTitle'>
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
                        disableOnInteraction: true,
                    }}
                    ref={sliderRef}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                        
                    {Array.from(news).reverse().map((news1) => {
                        return (
                            <SwiperSlide>

                                <div className='news-card' key={news1._id}>
                                    <Link to={'/news/' + news1._id} className='news-link'>
                                        <div className="news-slider-title">
                                            {news1.title}
                                            <div className="news-date">
                                                Date : {new Date(news1.date).toLocaleDateString()}
                                            </div>

                                        </div>
                                    </Link>
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
