import React, { useState } from 'react';
import AmcContext from './AmcContext';


const AmcState = (props) => {
    const ID = 5000;
    const host = `http://localhost:${ID}`;
    const AmcInitial = [];
    const [amc, setAmc] = useState(AmcInitial);
  
    // GET all Course
    const getAmc = async () => {
      // TODO: API call
      const respose = await fetch(
        `${host}/getfaculty`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await respose.json()
      setAmc(json);
    };
  
    // GET all Course
    const getAmcByID = async (id) => {
      // TODO: API call
      const respose = await fetch(
        `${host}/getfaculty?id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await respose.json();
      console.log(json);
      setAmc(json);
    };
  
    return (
      <AmcContext.Provider value={{amc, getAmc, getAmcByID}}>
        {props.children}
      </AmcContext.Provider>
    )
  }
  
  export default AmcState
  