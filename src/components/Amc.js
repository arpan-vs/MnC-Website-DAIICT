import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import BlogItem from './BlogItem';
import "../css/Students.css";
import GeneralContext from '../context/general/GeneralContext';

const Amc = () => {

    const context = useContext(GeneralContext);
    const { amc, getAmc } = context;

    useEffect(() => {
        getAmc();
        // eslint-disable-next-line
    },[]);

    // const Professors = [
    //     {
    //         id: 1,
    //         name: "Arpan1 Shingala",
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         link: ""
    //     },
    //     {
    //         id: 2,
    //         name: "Arpan Shingala",
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         link: "https://google.com/"
    //     },
    //     {
    //         id: 3,
    //         name: "Arpan Shingala",
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         link: "https://google.com/"
    //     },
    //     {
    //         id: 4,
    //         name: "Arpan Shingala",
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         link: "https://google.com/"
    //     },
    //     {
    //         id: 5,
    //         name: "Arpan Shingala",
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         link: "https://google.com/"
    //     },
    //     {
    //         id: 6,
    //         name: "Arpan Shingala",
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         link: "https://google.com/"
    //     },
    //     {
    //         id: 7,
    //         name: "Arpan Shingala",
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         link: "https://google.com/"
    //     },
    //     {
    //         id: 8,
    //         name: "arpan shingala",
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //         batch: 2020,
    //         link: "https://google.com/"
    //     },
    // ];
    
    return (
        <>
            <div className='container'>

                <div className="ruler"></div>
                <div className="batchTitle fs-3">Academic Monitoring Committee </div>
                <div className="ruler"></div>
            </div>
            <div className="container mt-3">
                <div className='container row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 m-auto'>

                    {Array.from(amc).map((Professor) => {
                        return (
                            <>
                                <BlogItem image={`http://localhost:5000/images/${Professor.image}`} name={Professor.name} link={Professor.link} _id={Professor._id}/>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Amc
