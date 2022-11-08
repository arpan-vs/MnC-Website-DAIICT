import React from 'react'
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import AddCourse from './adminUpdate/AddCourse';
import AddFaculty from './adminUpdate/AddFaculty';
import AddNews from './adminUpdate/AddNews';
import AddStudent from './adminUpdate/AddStudent';
import DeleteCourse from './adminUpdate/DeleteCourse';
import DeleteFaculty from './adminUpdate/DeleteFaculty';
import DeleteNews from './adminUpdate/DeleteNews';
import DeleteStudent from './adminUpdate/DeleteStudent';

const Admin = () => {

  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    if(!cookies.get('token')){
      navigate('/login');
    }
  },[]);

  const handleClick = (e) => {
    e.preventDefault();
    cookies.remove('token');
    navigate(-1);
    window.alert("Logout Successfully!!");
  }

  return (
    <>
      <div className='container'>

        <div className="container row row-col-1 justify-content-center">
          <button type="button" className="btn btn-primary col-auto" onClick={handleClick}>
            Logout
          </button>
        </div>

        <div className="my-4"></div>

        <div className="container row row-cols-3 row-cols-xl-5 justify-content-center">

          <button type="button" className="btn btn-primary col m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
            Add Student
          </button>

          <button type="button" className="btn btn-primary col m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
            Add News
          </button>

          <button type="button" className="btn btn-primary col m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
            Add Course
          </button>

          <button type="button" className="btn btn-primary col m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
            Add Faculty
          </button>
        </div>

        <AddStudent id={'staticBackdrop1'} />
        <AddNews id={'staticBackdrop2'} />
        <AddCourse id={'staticBackdrop3'} />
        <AddFaculty id={'staticBackdrop4'} />

        <div className="my-4"></div>

        <div className="container row row-cols-3 row-cols-xl-5 justify-content-center">

          <button type="button" className="btn btn-primary col m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop11">
            Delete Student
          </button>

          <button type="button" className="btn btn-primary col m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop21">
            Delete News
          </button>

          <button type="button" className="btn btn-primary col m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop31">
            Delete Course
          </button>

          <button type="button" className="btn btn-primary col m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop41">
            Delete Faculty
          </button>
        </div>

        <DeleteStudent id={'staticBackdrop11'} />
        <DeleteNews id={'staticBackdrop21'} />
        <DeleteCourse id={'staticBackdrop31'} />
        <DeleteFaculty id={'staticBackdrop41'} />
      </div>
    </>
  )
}

export default Admin
