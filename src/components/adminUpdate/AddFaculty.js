import React, { useState } from 'react'
import { useRef } from 'react';
import { useContext } from 'react'
import GeneralContext from '../../context/general/GeneralContext'

const AddFaculty = (props) => {
    const context = useContext(GeneralContext);
    const { addAmc } = context;
    const inputRef = useRef(null);
    const [faculty, setFaculty] = useState({ name: "", link: "", image: "" });

    const handleFileChange = (event) => {
        setFaculty({...faculty,image: event.target.files[0]});
        // console.log(news)
    }

    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', faculty.name);
        formData.append('link', faculty.link);
        formData.append('image', faculty.image);
        addAmc(formData);
        setFaculty({ name: "", link: "", image: ""});
        inputRef.current.value = null;
    }
    const onChange = (e) => {
        setFaculty({ ...faculty, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modalColor">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Add Faculty
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        aria-describedby="emailHelp"
                                        onChange={onChange}
                                        value={faculty.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="link"
                                        className="form-label"
                                    >
                                        Link
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="link"
                                        name="link"
                                        onChange={onChange}
                                        value={faculty.link}
                                    />
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
                                Add Faculty
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFaculty
