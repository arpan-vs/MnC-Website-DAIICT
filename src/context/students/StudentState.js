import React, { useState } from 'react';
import StudentContext from './StudentContext';


const StudentState = (props) => {
  const ID = 5000;
  const host = `http://localhost:${ID}`;
  const Initial = [];
  const [students, setStudents] = useState(Initial);

  // GET all students
  const getStudents = async () => {
    // TODO: API call
    const respose = await fetch(
      `${host}/getstudent`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await respose.json();
    setStudents(json);
  };

  return (
    <StudentContext.Provider value={{students,getStudents}}>
      {props.children}
    </StudentContext.Provider>
  )
}

export default StudentState
