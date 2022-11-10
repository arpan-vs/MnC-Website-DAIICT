import React, { useContext, useEffect } from "react";
import GeneralContext from "../context/general/GeneralContext";
import "../css/Course.css";

const Courses = () => {
  const context = useContext(GeneralContext);
  const { courses, getCourses } = context;

  const semesters = [...new Set(courses.map((item) => item.sem))];
  useEffect(() => {
    getCourses();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="mx-2">

        <div className="accordion accordion-flush" id="accordionFlushExample">
          {Array.from(semesters).map((semester) => {
            return (
              <>
                <div className="sem-container container">
                  <div className="Semtitle"><div className="semColor">Semester {semester}</div></div>
                  {/* eslint-disable-next-line */}
                  {Array.from(courses).map((course) => {
                    if (course.sem === semester) {
                      return (
                        <div className="accordion-item courseTab my-1 rounded-3" key={course._id}>
                          <button className="accordion-button collapsed rounded-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-' + course._id} aria-expanded="false" aria-controls={'flush-' + course._id}>
                            <div className="courseHead">
                              <div className="text-capitalize">
                                {course.title}
                              </div>
                              <div>
                                {course.credits}
                              </div>
                            </div>
                            <div className="mx-2"></div>
                          </button>
                          <div id={'flush-' + course._id} className="accordion-collapse collapse" aria-labelledby={'flush-h' + course._id} data-bs-parent="#accordionFlushExample">
                          {/* <div className="my-2"></div> */}
                            <p className="accordion-body Discription m-auto py-2">
                              {course.description}
                            </p>
                          </div>
                        </div>
                        // </div>
                      );
                    }
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Courses;
