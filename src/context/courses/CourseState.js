import React, { useState } from "react";
import CourseContext from "./CourseContext";

const CourseState = (props) => {
    const ID = 5000;
    const host = `http://localhost:${ID}`;
    const CourseInitial = [];
    const [courses, setCourses] = useState(CourseInitial);

    // GET all Course
    const getCourses = async () => {
        // TODO: API call
        const respose = await fetch(`${host}/getcourse`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await respose.json();
        setCourses(json);
    };

    // GET Course
    const getCourseByID = async (id) => {
        // TODO: API call
        const respose = await fetch(`${host}/getcourse?id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // querys: {
            //   "id":id,
            // }
        });
        const json = await respose.json();
        // const NewCourse = json.filter((course)=>{
        //   return course._id == _id;
        // })
        console.log(json);
        setCourses(json);
    };

    return (
        <CourseContext.Provider value={{ courses, getCourses, getCourseByID }}>
            {props.children}
        </CourseContext.Provider>
    );
};

export default CourseState;
