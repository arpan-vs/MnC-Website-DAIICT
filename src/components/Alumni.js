import React, { useContext, useEffect } from 'react'
import StudentContext from '../context/students/StudentContext';
import "../css/Students.css";

const Alumni = props => {

    const context = useContext(StudentContext);
    const { students, getStudents } = context;

    useEffect(() => {
        getStudents();
    }, []);

    const Students = [
        {
            id: 1,
            name: "Arpan1 Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2011,
            link: "https://google.com/"
        },
        {
            id: 2,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2015,
            link: "https://google.com/"
        },
        {
            id: 3,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2015,
            link: "https://google.com/"
        },
        {
            id: 4,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2015,
            link: "https://google.com/"
        },
        {
            id: 5,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2015,
            link: "https://google.com/"
        },
        {
            id: 6,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2015,
            link: "https://google.com/"
        },
        {
            id: 7,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2015,
            link: "https://google.com/"
        },
        {
            id: 8,
            name: "Arpan shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2017,
            link: "https://google.com/"
        },
    ];

    
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
                                                        <div className='text-capitalize'>
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
