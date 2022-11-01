import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import StudentContext from "../context/students/StudentContext";
import "../css/Students.css";

const Students = () => {
    const context = useContext(StudentContext);
    const { students, getStudents } = context;

    useEffect(() => {
        getStudents();
        // eslint-disable-next-line
    },[]);

    const batchsO = [...new Set(students.map((item) => item.batch))];
    const batchs = batchsO.filter(
        (batch) =>
            new Date().getFullYear() - batch <= 4 &&
            new Date().getFullYear() - batch > 0
    );
    batchs.sort();

    // console.log(students);
    return (
        <>
            {batchs.map((batch) => {
                return (
                    <>
                        <div className="container">
                            <div className="ruler"></div>
                            <div className="batchTitle fs-3">{batch}</div>
                            <div className="ruler"></div>
                        </div>

                        <div className="container my-3">
                            <div className="ContainerForBatch p-2 text-white">
                                {students.map((Student) => {
                                // eslint-disable-next-line
                                    if (Student.batch === batch)
                                        return (
                                            <>
                                                <div
                                                    key={Student._id}
                                                    className="container StudentPage my-1"
                                                >
                                                    <a
                                                        href={Student.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="StudentPage"
                                                    >
                                                        <div className="text-capitalize py-1">
                                                            {Student.name}
                                                        </div>
                                                    </a>
                                                </div>
                                            </>
                                        );
                                })}
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Students;
