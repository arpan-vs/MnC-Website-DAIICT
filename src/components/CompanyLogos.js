import React from 'react';
import "../css/Logos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";


const CompanyLogos = () => {
    const LogosAll = [
        {
            id: 1,
            image: "amazon-logo.png",
            lnk: "https://affiliate-program.amazon.in/",
        },
        {
            id: 2,
            image: "apple-logo.png",
            lnk: "https://www.apple.com/",
        },
        {
            id: 3,
            image: "att-logo.png",
            lnk: "https://www.att.com/",
        },
        {
            id: 4,
            image: "coca-cola-logo.png",
            lnk: "https://www.coca-cola.com/",
        },
        {
            id: 5,
            image: "facebook-logo.png",
            lnk: "https://www.facebook.com/",
        },
        {
            id: 6,
            image: "google-logo.png",
            lnk: "https://www.google.com/",
        },
        {
            id: 7,
            image: "intel-logo.png",
            lnk: "https://www.intel.com/",
        },
        {
            id: 8,
            image: "louis-vuitton-logo.png",
            lnk: "https://eu.louisvuitton.com/",
        },
        {
            id: 9,
            image: "mcdonalds-logo.png",
            lnk: "https://www.mcdonaldsindia.com/",
        },
        {
            id: 10,
            image: "microsoft-logo.png",
            lnk: "https://www.microsoft.com/",
        },
        {
            id: 11,
            image: "samsung-logo.png",
            lnk: "https://www.samsung.com/",
        },
        {
            id: 12,
            image: "toyota-logo.png",
            lnk: "https://www.toyota.com/",
        },
        {
            id: 13,
            image: "walt-disney-logo.png",
            lnk: "https://thewaltdisneycompany.com/",
        },
    ];

    return (
        <>
            <div className="container">
                <div className='logo-container'>
                    <div className='logo-title'>
                        <div className='Title'>
                            Recruiters
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={5}
                        loop={true}

                        breakpoints={{
                            640: {
                                slidesPerView: 5,
                            },

                            768: {
                                slidesPerView: 7,
                            },
                            1024: {
                                slidesPerView: 10,
                            },
                        }}
                        loopFillGroupWithBlank={false}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper">
                        {LogosAll.map((logo) => {
                            return (
                                <SwiperSlide>
                                    <div className='logo-card' key={logo.id}>
                                        <a href={logo.lnk}>
                                            <div className="logo-img">
                                                <img src={process.env.PUBLIC_URL + "logos/" + logo.image} />
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

export default CompanyLogos
