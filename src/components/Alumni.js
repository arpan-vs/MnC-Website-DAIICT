import React from 'react'
import BlogItem from './BlogItem';
import "./students.css";

const Alumni = props => {

    const Students = [
        {
            id: 1,
            name: "Arpan1 Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2025,
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
            batch: 2016,
            link: "https://google.com/"
        },
    ];

    const batchsO = [...new Set(Students.map((item) => item.batch))]
    const batchs = batchsO.filter((batch) => new Date().getFullYear() - batch > 4)
    batchs.sort();

    return (
        <>
            {batchs.map((batch) => {
                return (
                    <>
                        <div className="ruler"></div>
                        <div className="batchTitle">{batch}</div>
                        <div className="ruler"></div>
                        <div className="ContainerForBatch">
                            {Students.map((Student) => {
                                if (Student.batch === batch)
                                    return (
                                        <>
                                            <BlogItem image={Student.image} name={Student.name} link={Student.link} />
                                        </>
                                    );
                            })}
                        </div>
                    </>
                );

            })}
        </>
    )
}

export default Alumni
