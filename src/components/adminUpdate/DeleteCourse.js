import React, { useEffect, useContext } from 'react'
import GeneralContext from '../../context/general/GeneralContext'

const DeleteCourse = (props) => {
    const context = useContext(GeneralContext);
    const { courses, getCourses, deleteCourse } = context;

    const semesters = ([...new Set(courses.map((item) => item.sem))]).sort();
    useEffect(() => {
        getCourses();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="modal modal-xl fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content modalColor">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Delete Course
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                {semesters.map((semester) => {
                                    return (
                                        <>
                                            <div>
                                                <div className='bg-dark border border-3 m-1 rounded p-2 fs-4'>
                                                    Semester {semester}
                                                </div>
                                                {courses.map((course) => {
                                                    if (course.sem === semester) {
                                                        return (
                                                            <>
                                                                <div className='border m-1 py-1 px-2 rounded d-flex justify-content-between' key={course._id}>
                                                                    <div style={{alignSelf:'center'}}>
                                                                        {course.title}
                                                                    </div>
                                                                    <button type="button" className="btn btn-outline-info btn-sm" onClick={() => { deleteCourse(course._id); window.alert("Deleted Succesfully!") }}>Delete</button>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </>
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

export default DeleteCourse
