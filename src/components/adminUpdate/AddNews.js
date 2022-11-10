import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useRef } from 'react';
import { Cookies } from 'react-cookie';
import GeneralContext from '../../context/general/GeneralContext'



const AddNews = (props) => {
    const cookie = new Cookies();
    const inputRef = useRef(null);
    const content = useContext(GeneralContext);
    const { addNews } = content;
    const [news, setNews] = useState({ title: "", date: "", description: "", image:"" });
    // const [file, setFile] = useState(null);


    const handleFileChange = (event) => {
        setNews({...news,image: event.target.files[0]});
        // console.log(news)
    }

    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', news.title);
        formData.append('date', news.date);
        formData.append('description', news.description);
        formData.append('image', news.image);
        addNews(formData);
        setNews({ title: "", date: "", description: "", image:"" });
        inputRef.current.value = null;
    }
    
    const onChange = (e) => {
        setNews({ ...news, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="modal modal-lg fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modalColor">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Add News
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="title"
                                        className="form-label"
                                        minLength={3}
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        aria-describedby="emailHelp"
                                        onChange={onChange}
                                        value={news.title}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="date"
                                        className="form-label"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        name="date"
                                        onChange={onChange}
                                        value={news.date}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="description"
                                        className="form-label"
                                    >
                                        Discription
                                    </label>
                                    <textarea
                                        className="form-control"
                                        placeholder=""
                                        style={{ height: '100px' }}
                                        id="description"
                                        name="description"
                                        onChange={onChange}
                                        value={news.description}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="file">Upload File:</label>
                                    <input
                                        className="form-control-file mb-3"
                                        type="file" id="file"
                                        accept="image/*"
                                        // multiple
                                        onChange={handleFileChange}
                                        ref={inputRef}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={handleClick}>
                                Add News
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNews
