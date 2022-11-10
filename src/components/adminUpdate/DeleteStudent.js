import React, { useContext, useEffect } from 'react';
import GeneralContext from '../../context/general/GeneralContext'

const DeleteStudent = (props) => {
    const context = useContext(GeneralContext);
    const { students, getStudents, deleteStudent } = context;

    useEffect(() => {
        getStudents();
        // eslint-disable-next-line
    }, []);

    const batchs = ([...new Set(students.map((item) => item.batch))]).sort();

    return (
        <>
            <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content modalColor">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Delete Student
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                {batchs.map((batch) => {
                                    return (
                                        <>
                                            <div>
                                                <div className='bg-dark border border-3 m-1 rounded p-2 fs-4'>
                                                    Batch {batch}
                                                </div>
                                                {students.map((student) => {
                                                    if (student.batch === batch) {
                                                        return (
                                                            <>
                                                                <div className='border m-1 py-1 px-2 rounded d-flex justify-content-between' key={student._id}>
                                                                    <div style={{ alignSelf: 'center' }}>
                                                                        {student.name}
                                                                    </div>
                                                                    <button type="button" className="btn btn-outline-info btn-sm" onClick={() => { deleteStudent(student._id);}}>Delete</button>
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

export default DeleteStudent
