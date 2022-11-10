import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from '../context/general/GeneralContext';
import '../css/News.css';

const News = () => {

    const context = useContext(GeneralContext);
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
                {Array.from(news).reverse().map((news1) => {
                    return (
                        <Link to={news1._id} className='newsLink' key={news1._id}>
                            <div className='news-card newsCard' >
                                <div className="news-slider-title">
                                    {news1.title}

                                </div>
                                <div className="news-date">
                                    Date : {new Date(news1.date).toLocaleDateString()}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    )
}

export default News
