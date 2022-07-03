import React, { useState } from 'react';
import CourseContext from './CourseContext';


const CourseState = (props) => {
  const ID = 5000;
  const host = `http://localhost:${ID}`;
  const CourseInitial = [];
  const [courses, setCourses] = useState(CourseInitial);

  // GET all Course
  const getCourses = async () => {
    // TODO: API call
    const respose = await fetch(
      `${host}/getcourse`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await respose.json()
    setCourses(json);
  };

  return (
    <CourseContext.Provider value={{courses, getCourses}}>
      {props.children}
    </CourseContext.Provider>
  )
}

export default CourseState
