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
            name: "Arpan shingala",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            batch: 2020,
            link: "https://google.com/"
        },
    ];
    return (
        <>
            <div className="ruler"></div>
            <div className="batchTitle">Professors</div>
            <div className="ruler"></div>
            <div className="ContainerForBatch">
                {Professors.map((Professor) => {
                    return (
                        <>
                            <BlogItem image={Professor.image} name={Professor.name} link={Professor.link} />
                        </>
                    );
                })}
            </div>
        </>
    )
}

export default Amc
