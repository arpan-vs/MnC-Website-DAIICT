import React from 'react';
import BlogItem from './BlogItem';
import "./students.css";

const Amc = () => {

    const Professors = [
        {
            id: 1,
            name: "Arpan1 Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            link: ""
        },
        {
            id: 2,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            link: "https://google.com/"
        },
        {
            id: 3,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            link: "https://google.com/"
        },
        {
            id: 4,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            link: "https://google.com/"
        },
        {
            id: 5,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            link: "https://google.com/"
        },
        {
            id: 6,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            link: "https://google.com/"
        },
        {
            id: 7,
            name: "Arpan Shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            link: "https://google.com/"
        },
        {
            id: 8,
            name: "arpan shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2020,
            link: "https://google.com/"
        },
    ];
    return (
        <>
            <div className='container'>

                <div className="ruler"></div>
                <div className="batchTitle fs-3">Academic Monitoring Committee </div>
                <div className="ruler"></div>
            </div>
            <div className="container mt-3">
                <div className='container row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 m-auto'>

                    {Professors.map((Professor) => {
                        return (
                            <>
                                <BlogItem image={Professor.image} name={Professor.name} link={Professor.link} />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Amc
