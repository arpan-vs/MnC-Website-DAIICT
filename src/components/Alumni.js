import React, { useContext, useEffect } from 'react'
import GeneralContext from '../context/general/GeneralContext';
import "../css/Students.css";

const Alumni = () => {

    const context = useContext(GeneralContext);
    const { students, getStudents } = context;

    useEffect(() => {
        getStudents();
    }, []);

    const batchsO = [...new Set(students.map((item) => item.batch))]
    const batchs = batchsO.filter((batch) => new Date().getFullYear() - batch > 4)
    batchs.sort();

    return (
        <>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {Array.from(batchs).sort().map((batch) => {
                    return (
                        <>
                            <div className="container ">
                                {/* eslint-disable-next-line */}
                                <div className="accordion-item my-1 rounded-3 StudentPage pb-1" key={batch}>
                                    <button className="accordion-button collapsed rounded-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-' + batch} aria-expanded="false" aria-controls={'flush-' + batch}>
                                        <div className='container'>

                                            <div className="ruler"></div>
                                            <div className="batchTitle fs-3">{batch}</div>
                                            <div className="ruler"></div>
                                        </div>
                                    </button>
                                    <div className="container">
                                        <div id={'flush-' + batch} className="accordion-collapse ContainerForBatch collapse p-1" aria-labelledby={'flush-h' + batch} data-bs-parent="#accordionFlushExample">
                                            {Array.from(students).map((Student) => {
                                                if (Student.batch === batch)
                                                    return (
                                                        <>
                                                            <div id={Student._id} className=' StudentPage m-1 px-2'>

                                                                <a href={Student.link} target="_blank" className='StudentPage'>
                                                                    <div className='text-capitalize py-1'>
                                                                        {Student.name}
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </>
                                                    );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
            {/* {
                batchs.map((batch) => {
                    return (
                        <>
                            <div className='container'>

                                <div className="ruler"></div>
                                <div className="batchTitle fs-3">{batch}</div>
                                <div className="ruler"></div>
                            </div>

                            <div className='container my-3'>
                                <div className="ContainerForBatch p-2 text-white">

                                    {students.map((Student) => {
                                        if (Student.batch === batch)
                                            return (
                                                <>
                                                    <div id={Student._id} className=' StudentPage m-1 px-2'>

                                                        <a href={Student.link} target="_blank" className='StudentPage'>
                                                            <div className='text-capitalize py-1'>
                                                                {Student.name}
                                                            </div>
                                                        </a>
                                                    </div>

                                                </>
                                            );
                                    })}
                                </div>
                            </div>
                        </>
                    );

                })
            } */}
        </>
    )
}

export default Alumni
