import React, { useState } from 'react';
import GeneralContext from './GeneralContext';
import { Cookies } from 'react-cookie';

const GeneralState = (props) => {
    const cookie = new Cookies();

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
    // Add Course
    const addCourse = async (title, sem, credits, discription) => {
        const respose = await fetch(
            `${host}/api/users/course`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": cookie.get('token'),
                },
                body: JSON.stringify({ title, sem, credits, discription }),
            }
        )
        .then((respose) => {
            if(respose.status !== 200){
                throw (respose.status,respose.statusText);
            }
            else{
                const data = respose.json();
                setCourses(courses.concat(data));
                window.alert("Course added Successfully!!!");
            }
        })
        .catch((err) => {
            window.alert(err);
        })

        // const json = await respose.json();

        // setCourses(courses.concat(json));
    }

    // Delete a Course
    const deleteCourse = async (id) => {
        // TODO: API call
        const respose = await fetch(`${host}/api/users/course/${id}`, {
            method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": cookie.get('token'),
            },
        })
        .then((respose) => {
            if(respose.status !== 200){
                throw (respose.status, respose.statusText)
            }
            else{
                respose.json();
            }        
        })
        .then(() => {
            const newCourses = courses.filter((data) => {
                return data._id !== id;
            });
            setCourses(newCourses);
            window.alert("Course deleted Successfully!!!");
        })
        .catch((err) => {
            window.alert(err);
        })
    }

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
    // Add Amc
    const addAmc = async (formData) => {
        const respose = await fetch(
            `${host}/api/users/faculty`,
            {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json",
                    "auth-token": cookie.get('token'),
                },
                body: formData,
            }
        )
        .then((respose) => {
            if(respose.status !== 200){
                throw (respose.status,respose.statusText);
            }
            else{
                const data = respose.json();
                setAmc(amc.concat(data));
                window.alert("Faculty added Successfully!!!");
            }
        })
        .catch((err) => {
            window.alert(err);
        })
        // const json = await respose.json();

        // setAmc(amc.concat(json));
    }

    // Delete a Course
    const deleteAmc = async (id) => {
        // TODO: API call
        const respose = await fetch(`${host}/api/users/faculty/${id}`, {
            method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": cookie.get('token'),
            },
        })
        .then((respose) => {
            if(respose.status !== 200){
                throw (respose.status, respose.statusText)
            }
            else{
                respose.json();
            }
        })
        .then(() => {
            const newAmc = amc.filter((data) => {
                return data._id !== id;
            });
            setAmc(newAmc);
            window.alert("Faculty deleted Successfully!!!");
        })
        .catch((err) => {
            window.alert(err);
        })
    }

    const StudentInitial = [];
    const [students, setStudents] = useState(StudentInitial);

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
    // Add Student
    const addStudent = async (name, student_id, batch, link) => {
        // console.log("hello");
        const respose = await fetch(
            `${host}/api/users/student`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": cookie.get('token'),
                },
                withCredentials: true,
                body: JSON.stringify({ name, student_id, batch, link }),
            }
            )
            .then((respose) => {
                if(respose.status !== 200){
                    throw (respose.status,respose.statusText);
                }
                else{
                    const data = respose.json();
                    setStudents(students.concat(data));
                    window.alert("Student added Successfully!!!");
                }
            })
            .catch((err) => {
                window.alert(err);
            })

    }

    // Delete a Student
    const deleteStudent = async (id) => {
        // TODO: API call
        const respose = await fetch(`${host}/api/users/student/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": cookie.get('token'),
            },
        })
        .then((respose) => {
            if(respose.status !== 200){
                throw (respose.status, respose.statusText)
            }
            else{
                respose.json();
            }        })
        .then(() => {
            const newStudents = students.filter((data) => {
                return data._id !== id;
            });
            setStudents(newStudents);
            window.alert("Student deleted Successfully!!!");
        })
        .catch((err) => {
            window.alert(err);
        })

        // const json = respose.json();
        // console.log(json)
        // console.log("Deleteing the note " + id);
    }

    const NewsInitial = [];
    const [news, setNews] = useState(NewsInitial);

    // GET all News
    const getNews = async () => {
        // TODO: API call
        const respose = await fetch(
            `${host}/getnews`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const json = await respose.json()
        setNews(json);
    };
    // GET News
    const getNewsByID = async (id) => {
        // TODO: API call
        const respose = await fetch(
            `${host}/getnews?id=${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const json = await respose.json();
        setNews(json);
    };
    // Add News
    const addNews = async (formData) => {
        const respose = await fetch(
            `${host}/api/users/news`,
            {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json",
                    "auth-token": cookie.get('token'),
                },
                body: formData,
            }
        )
        .then((respose) => {
            if(respose.status !== 200){
                throw (respose.status,respose.statusText);
            }
            else{
                const data = respose.json();
                setNews(news.concat(data));
                window.alert("Course added Successfully!!!");
            }
        })
        .catch((err) => {
            window.alert(err);
        })

        // const json = await respose.json();

        // setNews(news.concat(json));
    }
    // Delete a Course
    const deleteNews = async (id) => {
        // TODO: API call
        const respose = await fetch(`${host}/api/users/news/${id}`, {
            method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": cookie.get('token'),
            },
        })
        .then((respose) => {
            if(respose.status !== 200){
                throw (respose.status, respose.statusText)
            }
            else{
                respose.json();
            }        })
        .then(() => {
            const newNews = news.filter((data) => {
                return data._id !== id;
            });
            setNews(newNews);
            window.alert("News deleted Successfully!!!");
        })
        .catch((err) => {
            window.alert(err);
        })

        // const json = respose.json();
        // console.log(json)
        // console.log("Deleteing the note " + id);
    }
    return (
        <GeneralContext.Provider value={{ courses, getCourses, addCourse, deleteCourse, amc, getAmc, addAmc, deleteAmc, students, getStudents, addStudent, deleteStudent, news, getNews, getNewsByID, addNews, deleteNews }}>
            {props.children}
        </GeneralContext.Provider>
    )
}

export default GeneralState
