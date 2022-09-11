import React from 'react';
import "./students.css";

const BlogItem = props => {

  return (
    <>
      <div className='p-2 col'>
        <a className='bloglink' href={props.link} target="_blank" >
          <div className='card blogItem'>
            <div className="card-body my-3">
              <img src={props.image} className="card-img" />
              <div className="card-title studentTitle text-capitalize">{props.name}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default BlogItem
