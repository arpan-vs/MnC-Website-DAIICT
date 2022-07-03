import React, { useContext, useEffect } from 'react'
import CourseContext from '../context/courses/CourseContext'
import './Course.css';

const Courses = () => {
  const context = useContext(CourseContext);
  const { courses, getCourses } = context;

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <div className='sem-container'>
        <div className='Semtitle'>Sem 1</div>
      {courses.map((course) => {
        if (course.sem === 1) {
          return (
            <div key={course._id} className="courseTab">
              <a href='#'>
                <div className='courseTitle'>
                  {course.title}
                </div>
                <div className='courseCredit'>
                  {course.credits}
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>

      <div className='sem-container'>
        <div className='Semtitle'>Sem 2</div>
      {courses.map((course) => {
        if (course.sem === 2) {
          return (
            <div key={course._id} className="courseTab">
              <a href='#'>
                <div className='courseTitle'>
                  {course.title}
                </div>
                <div className='courseCredit'>
                  {course.credits}
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>

      <div className='sem-container'>
        <div className='Semtitle'>Sem 3</div>
      {courses.map((course) => {
        if (course.sem === 3) {
          return (
            <div key={course._id} className="courseTab">
              <a href='#'>
                <div className='courseTitle'>
                  {course.title}
                </div>
                <div className='courseCredit'>
                  {course.credits}
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>

      <div className='sem-container'>
        <div className='Semtitle'>Sem 4</div>
      {courses.map((course) => {
        if (course.sem === 4) {
          return (
            <div key={course._id} className="courseTab">
              <a href='#'>
                <div className='courseTitle'>
                  {course.title}
                </div>
                <div className='courseCredit'>
                  {course.credits}
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>

      <div className='sem-container'>
        <div className='Semtitle'>Sem 5</div>
      {courses.map((course) => {
        if (course.sem === 5) {
          return (
            <div key={course._id} className="courseTab">
              <a href='#'>
                <div className='courseTitle'>
                  {course.title}
                </div>
                <div className='courseCredit'>
                  {course.credits}
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>

      <div className='sem-container'>
        <div className='Semtitle'>Sem 6</div>
      {courses.map((course) => {
        if (course.sem === 6) {
          return (
            <div key={course._id} className="courseTab">
              <a href='#'>
                <div className='courseTitle'>
                  {course.title}
                </div>
                <div className='courseCredit'>
                  {course.credits}
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>

      <div className='sem-container'>
        <div className='Semtitle'>Sem 7</div>
      {courses.map((course) => {
        if (course.sem === 7) {
          return (
            <div key={course._id} className="courseTab">
              <a href='#'>
                <div className='courseTitle'>
                  {course.title}
                </div>
                <div className='courseCredit'>
                  {course.credits}
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>

      <div className='sem-container'>
        <div className='Semtitle'>Sem 8</div>
      {courses.map((course) => {
        if (course.sem === 8) {
          return (
            <div key={course._id} className="courseTab">
              <a href='#'>
                <div className='courseTitle'>
                  {course.title}
                </div>
                <div className='courseCredit'>
                  {course.credits}
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>



    </>
  )
}

export default Courses
