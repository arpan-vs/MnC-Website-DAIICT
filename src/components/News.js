import React, { useContext, useEffect } from 'react';
import NewsEventContext from '../context/news_events/NewsEventContext';
import '../css/News.css';

const News = () => {

    const context = useContext(NewsEventContext);
    const { news, getNews } = context;

    useEffect(() => {
        getNews();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='container'>

                <div className="ruler"></div>
                <div className="batchTitle fs-3">News &amp; Events </div>
                <div className="ruler"></div>
            </div>
            <div className='newsPage container'>
                {[...news].reverse().map((news1) => {
                    return (
                        <a className='newsLink' key={news1._id} href='#'>
                            <div className='news-card newsCard' >
                                <div className="news-slider-title">
                                    {news1.title}

                                </div>
                                <div className="news-date">
                                    {new Date(news1.date).toLocaleDateString()}
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </>
    )
}

export default News
