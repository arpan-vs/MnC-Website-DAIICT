import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import './Events.css';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import NewsEventContext from '../context/news_events/NewsEventContext';


const EventsHome = () => {

  const context = useContext(NewsEventContext);
  const {events, getEvents} = context;

  useEffect(()=>{
    getEvents();
  },[]);
  var eventsAll = [
    {
      id: 1,
      title: "1 Mathematics & Computing Engineering is an amalgamatioalknsddddddddnklcnalscanclnanclanlncslnalkn of mathematics with computer science",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      startdate: new Date(2022, 11, 2),
    },
    {
      id: 2,
      title: "2 Mathematic & Computing Engineering is an amalgamation of mathematics with computer science",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      startdate: new Date(2022, 1, 25),
      enddate: new Date(2022, 11, 2),
    },
    {
      id: 3,
      title: "3 Mathematics & Computing Engineering is a amalgamation of mathematics with computer science",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      startdate: new Date(2020, 11, 2),
      enddate: new Date(2022, 11, 2),
    },
    {
      id: 4,
      title: "4 Mathematics & Computing Engineeng is an amalgamation of mathematics with computer science",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      startdate: new Date(2021, 1, 25),
      enddate: new Date(2022, 11, 2),
    },
    {
      id: 5,
      title: "5 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      startdate: new Date(2032, 11, 25),
      enddate: new Date(2022, 11, 2),
    },
    {
      id: 6,
      title: "6 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      startdate: new Date(2012, 11, 25),
      enddate: new Date(2022, 11, 2),
    },
    {
      id: 7,
      title: "7 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      startdate: new Date(2002, 11, 25),
      enddate: new Date(2022, 11, 2),
    },
    {
      id: 8,
      title: "8 Mathematics & Computing Engineering is an amalgamion of mathematics with computer science",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
      startdate: new Date(2000, 11, 25),
      enddate: new Date(2022, 11, 2),
    },
  ];

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
      <div className='events-container'>
        <div className='events-title'>
          <div>
            Events
          </div>
          <div className='slider-icons'>
            <a href='#' className='view-all-events'>
              View All
              <MdChevronRight size={30} className="right-slider-icon" onClick={handleNext} />
            </a>
            <MdChevronLeft size={40} className="left-slider-icon" onClick={handlePrev} />
            <MdChevronRight size={40} className="right-slider-icon" onClick={handleNext} />
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          ref={sliderRef}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          {events.map((event) => {
            return (
              <SwiperSlide>

                <a href='#'>
                  <div className='events-card' key={event._id}>
                    <div className="events-img">
                      <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
                    </div>
                    <div className="events-slider-title">
                      {event.title}

                    </div>
                    <div className="events-date">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  )
}

export default EventsHome
