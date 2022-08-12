import React, { useContext, useEffect, useState } from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import CourseContext from "../context/courses/CourseContext";
import "./Course.css";

const Courses = () => {
  const context = useContext(CourseContext);
  const { courses, getCourses } = context;
  // const { id } = useParams();
  const [id, setId] = useState();

  const semesters = [...new Set(courses.map((item) => item.sem))];
  useEffect(() => {
    getCourses();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();
  const handleClick = (e) => {
    id && navigate(generatePath("/course/:id", { id }));
  } 
  
  return (
    <>
      <div style={{margin:40}}></div>
      {semesters.map((semester) => {
        return (
          <>
            <div className="sem-container">
              <div className="Semtitle">Semester {semester}</div>
              {courses.map((course) => {
                if (course.sem === semester) {
                  return (
                    <div
                      key={course._id}
                      className="courseTab"
                    >
                      <a onClick={(e)=>{setId(course._id);handleClick(id)}} >
                        <div className="courseTitle">
                          {course.title}
                        </div>
                        <div className="courseCredit">
                          {course.credits}
                        </div>
                      </a>
                    </div>
                  );
                }
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Courses;
