import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CourseContext from "../context/courses/CourseContext";
import "../css/Course.css";

const GetCourse = () => {

  const { id } = useParams();
  const context = useContext(CourseContext);
  const { courses, getCourseByID } = context;
  useEffect(() => {
    getCourseByID(id);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="SCourseTab">
        <div className="SCourseTitle">{courses.title}</div>
        <div className="SCourseCredits">{courses.credits}</div>
        <pre className="SCourseDiscription">{courses.description}</pre>
      </div>
    </>
  )
}

export default GetCourse
