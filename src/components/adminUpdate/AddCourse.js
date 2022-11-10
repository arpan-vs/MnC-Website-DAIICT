import React, { useState, useContext } from 'react'
import GeneralContext from '../../context/general/GeneralContext'

const AddCourse = (props) => {
    const context = useContext(GeneralContext);
    const { addCourse } = context;
    const [course, setCourse] = useState({ title: "", sem: "", credits: "", description: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addCourse(course.title, course.sem, course.credits, course.description);
        setCourse({ title: "", student_id: "", batch: "", link: "" });
    }
    const onChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="modal modal-lg fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modalColor">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Add Course
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="title"
                                        className="form-label"
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
                                        value={course.title}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="sem"
                                        className="form-label"
                                    >
                                        Semester
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="sem"
                                        name="sem"
                                        onChange={onChange}
                                        value={course.sem}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="credits"
                                        className="form-label"
                                    >
                                        Credits
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="credits"
                                        name="credits"
                                        onChange={onChange}
                                        value={course.credits}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="discription"
                                        className="form-label"
                                    >
                                        Discription
                                    </label>
                                    <textarea
                                        className="form-control"
                                        placeholder=""
                                        style={{ height: '100px' }}
                                        id="discription"
                                        name="discription"
                                        onChange={onChange}
                                        value={course.discription}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary"  onClick={handleClick}>
                                Add Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCourse
