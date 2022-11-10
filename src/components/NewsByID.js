import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import '../css/News.css';
import GeneralContext from '../context/general/GeneralContext';

const NewsByID = () => {

    const { id } = useParams();
    const context = useContext(GeneralContext);
    const { news, getNewsByID } = context;
    useEffect(() => {
        getNewsByID(id);
        // eslint-disable-next-line
    }, []);
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <BsArrowLeft size={25} className="BackIcon" onClick={() => navigate(-1)} />
                <div className='my-2'></div>
                <div className="NewsTitle">{news.title}</div>
                <div className='my-2'></div>
                <div className="NewsDate">Date : {new Date(news.date).toLocaleDateString()}</div>
                <div className='my-2'></div>
                <p className="NewsDiscription">{news.description}</p>
                
            </div>
        </>
    )
}

export default NewsByID
