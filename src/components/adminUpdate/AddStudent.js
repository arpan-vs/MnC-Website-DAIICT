import React, { useState, useContext } from 'react';
import GeneralContext from '../../context/general/GeneralContext';
import "../../css/Students.css";

const AddStudent = (props) => {
    const context = useContext(GeneralContext);
    const { addStudent } = context;
    const [student, setStudent] = useState({ name: "", student_id: "", batch: "", link: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addStudent(student.name, student.student_id, student.batch, student.link);
        setStudent({ name: "", student_id: "", batch: "", link: "" });
    }

    const onChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modalColor">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Add Student
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                        minLength={3}
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
                                        value={student.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="student_id"
                                        className="form-label"
                                    >
                                        Student ID
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="student_id"
                                        name="student_id"
                                        onChange={onChange}
                                        value={student.student_id}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="batch"
                                        className="form-label"
                                    >
                                        Batch
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="batch"
                                        name="batch"
                                        onChange={onChange}
                                        value={student.batch}
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
                                        value={student.link}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={handleClick}>
                                Add Student
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudent
