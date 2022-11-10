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
            {batchs.map((batch) => {
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

                                                {/* <BlogItem image={Student.image} name={Student.name} link={Student.link} /> */}
                                            </>
                                        );
                                })}
                            </div>
                        </div>
                    </>
                );

            })}
        </>
    )
}

export default Alumni
