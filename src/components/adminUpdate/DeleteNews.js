import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import GeneralContext from '../../context/general/GeneralContext'

const DeleteNews = (props) => {
    const context = useContext(GeneralContext);
    const { news, getNews, deleteNews } = context;

    useEffect(() => {
        getNews();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="modal modal-xl fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content modalColor">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Delete News
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                {[...news].reverse().map((News) => {
                                    return (
                                        <div className='border m-1 py-1 px-2 rounded d-flex justify-content-between' key={News._id}>
                                            <div style={{ alignSelf: 'center' }}>
                                                {News.title}
                                            </div>
                                            <button type="button" className="btn btn-outline-info btn-sm" onClick={() => { deleteNews(News._id); window.alert("Deleted Succesfully!") }}>Delete</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteNews
