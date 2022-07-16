import React, { useContext, useEffect } from 'react';
import NewsEventContext from '../context/news_events/NewsEventContext';
import './News.css';

const News = () => {

    const context = useContext(NewsEventContext);
    const { news, getNews } = context;

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <div className='newsPage'>
                {[...news].reverse().map((news1) => {
                    return (
                        <div className='news-card newsCard' key={news1._id}>
                            <a className='newsLink' href='#'>
                                <div className="news-slider-title">
                                    {news1.title}

                                </div>
                                <div className="news-date">
                                    {new Date(news1.date).toLocaleDateString()}
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default News
